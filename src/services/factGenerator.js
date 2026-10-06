// This module is the seam where AI generation plugs in.
// For MVP we ship a pre-generated static bank (src/data/facts.js) so the
// app works fully offline with zero latency/cost per swipe.
//
// When you're ready to generate NEW facts (e.g. to expand a category),
// run this as a one-off SCRIPT (not on-device, not per-swipe) and append
// the output to facts.js or a backend table. Calling this from inside the
// app on every swipe is possible but not recommended — it's slow, costs
// money per user session, and quality is harder to QA.

const SYSTEM_PROMPT = `You generate trivia flashcards for an app called "Larp.",
where users read a few deep-cut facts and can then talk like an expert/fan
of that field. Facts must be:
- Niche and specific, the kind only a die-hard fan or insider would know
- NOT the first thing you'd read on a Wikipedia summary
- Verifiably true (no invented statistics or unverifiable claims)
- Self-contained: understandable without extra context
- Conversational in tone, 1-3 sentences, no dry textbook phrasing

Return ONLY a JSON array of objects: [{ "text": "..." }, ...]. No preamble.`;

export async function generateFacts({ category, count = 5, apiKey }) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Generate ${count} niche facts about: ${category}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`Claude API error ${response.status}: ${errBody}`);
  }

  const data = await response.json();
  const textBlock = data.content?.find((c) => c.type === 'text');
  if (!textBlock) throw new Error('No text content returned from API');

  const cleaned = textBlock.text.replace(/```json|```/g, '').trim();
  return JSON.parse(cleaned); // [{ text: "..." }, ...]
}
