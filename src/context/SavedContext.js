import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@larp/saved_facts_v1';

const SavedContext = createContext(null);

export function SavedProvider({ children }) {
  const [saved, setSaved] = useState([]); // [{ id, text, categoryId, savedAt }]
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) setSaved(JSON.parse(raw));
      } catch (e) {
        console.warn('Failed to load saved facts', e);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (!loaded) return; // avoid overwriting storage with [] before initial load finishes
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(saved)).catch((e) =>
      console.warn('Failed to persist saved facts', e)
    );
  }, [saved, loaded]);

  function saveFact(fact, categoryId) {
    setSaved((prev) => {
      if (prev.some((f) => f.id === fact.id)) return prev; // no duplicates
      return [...prev, { ...fact, categoryId, savedAt: Date.now() }];
    });
  }

  function removeFact(id) {
    setSaved((prev) => prev.filter((f) => f.id !== id));
  }

  function isSaved(id) {
    return saved.some((f) => f.id === id);
  }

  return (
    <SavedContext.Provider value={{ saved, saveFact, removeFact, isSaved, loaded }}>
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error('useSaved must be used within a SavedProvider');
  return ctx;
}
