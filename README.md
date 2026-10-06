# Larp.

Swipeable, niche-fact flashcards so you can instantly talk like an expert.

## Run it locally

1. Install [Node.js](https://nodejs.org) (LTS) if you don't have it.
2. Install the Expo Go app on your phone (App Store / Play Store).
3. In this folder, run:
   ```
   npm install
   npm start
   ```
4. Scan the QR code that appears with your phone's camera (iOS) or the Expo Go app (Android). The app opens live on your device — no build/publish step needed for development.

## Project structure

```
App.js                      — navigation root
src/screens/HomeScreen.js       — category grid
src/screens/FlashcardScreen.js  — swipe deck
src/screens/SavedScreen.js      — saved folder
src/context/SavedContext.js     — save/persist state (AsyncStorage)
src/data/facts.js               — seed fact bank (3 categories, 5 facts each)
src/services/factGenerator.js   — AI generation stub (run offline as a script to grow the bank)
```

## Growing the fact bank with AI

`src/services/factGenerator.js` is wired to call the Claude API and return
JSON facts for a category. Don't call it from inside the running app per
swipe — run it as a one-off Node script locally (with your own API key)
whenever you want to add facts, then paste the output into `src/data/facts.js`.
This keeps the app fast, offline-capable, and free to run for users.

## What's next (not built yet)

- More categories / more facts per category
- A "regenerate facts" batch script (Node script using factGenerator.js)
- Optional backend (Supabase) if you want saved folders to sync across devices
- Onboarding / empty states polish
- App icon, splash screen, store listing assets
