// Seed fact bank. In production these are generated in bulk offline
// (see src/services/factGenerator.js) and periodically synced/refreshed.
// Each fact is written to be niche/insider — the kind a die-hard fan
// would nod at, not a Wikipedia opener.

export const CATEGORIES = [
  { id: 'movies', label: 'Movies', emoji: '🎬' },
  { id: 'geography', label: 'Geography', emoji: '🗺️' },
  { id: 'sports', label: 'Sports', emoji: '⚽' },
];

export const FACTS = {
  movies: [
    {
      id: 'mv-001',
      text: "The chestburster scene in Alien got real, unscripted screams from the cast — most of the actors weren't told exactly how it would look.",
    },
    {
      id: 'mv-002',
      text: "In Jaws, the mechanical shark ('Bruce') broke down so often that Spielberg was forced to shoot around it — which is why the shark barely appears for the first hour, and why the film is scarier for it.",
    },
    {
      id: 'mv-003',
      text: "The 'I am your father' line in The Empire Strikes Back was kept secret even from most of the cast — Mark Hamill filmed an alternate fake line for the crew.",
    },
    {
      id: 'mv-004',
      text: "Toy Story's animators built an internal rule: no human character could have fully convincing skin or cloth, because 1995-era rendering couldn't sell it — so the humans are stylized on purpose, not by accident.",
    },
    {
      id: 'mv-005',
      text: "In Goodfellas, Ray Liotta was barely allowed to blink on camera — Scorsese wanted an unsettling, predatory stillness whenever Henry Hill was calm.",
    },
  ],
  geography: [
    {
      id: 'geo-001',
      text: "Point Nemo, the ocean's 'pole of inaccessibility,' is so remote that the nearest humans are often astronauts on the ISS rather than anyone on a boat.",
    },
    {
      id: 'geo-002',
      text: "Because of how the Prime Meridian was drawn, part of eastern Fiji sits in the western hemisphere and part in the eastern — the antimeridian gets bent specifically to keep the country's calendar unified.",
    },
    {
      id: 'geo-003',
      text: "Slovenia and Croatia never formally agreed on a maritime border in the Bay of Piran, which is why the two countries still dispute a few square kilometers of sea.",
    },
    {
      id: 'geo-004',
      text: "Death Valley holds the record for hottest reliably recorded air temperature on Earth, but a spot in Iran's Lut Desert has recorded hotter *surface* temperatures via satellite.",
    },
    {
      id: 'geo-005',
      text: "Because Russia spans 11 time zones, there was a period where it briefly consolidated to 9 zones in 2010 — then partially reversed the decision in 2014 after public backlash over dark winter mornings.",
    },
  ],
  sports: [
    {
      id: 'sp-001',
      text: "The 'Marcus Rashford' style long throw-ins some teams use as a set piece exist because a long throw travels faster into the box than most corner kicks — it's basically an uncontested free header machine.",
    },
    {
      id: 'sp-002',
      text: "In baseball, the infield fly rule exists specifically to stop infielders from intentionally dropping a routine pop-up to turn an easy out into a cheap double play.",
    },
    {
      id: 'sp-003',
      text: "Tiebreak scoring in tennis (7-point breaker) was only introduced in the 1970s — before that, sets could theoretically go on forever, and some historic matches did, for hours.",
    },
    {
      id: 'sp-004',
      text: "NBA teams intentionally foul trailing in the final seconds not to stop a shot, but to stop the clock — it's a clock-management tactic dressed up as defense.",
    },
    {
      id: 'sp-005',
      text: "F1's 'DRS zone' only activates if a car is within one second of the car ahead at a specific detection point — meaning drivers sometimes deliberately back off entering the zone just to trigger eligibility.",
    },
  ],
};
