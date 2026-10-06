import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { FACTS } from '../data/facts';
import { useSaved } from '../context/SavedContext';

export default function FlashcardScreen({ route }) {
  const { categoryId, label } = route.params;
  const deck = FACTS[categoryId] || [];
  const { saveFact, isSaved } = useSaved();
  const swiperRef = useRef(null);
  const [exhausted, setExhausted] = useState(deck.length === 0);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (exhausted) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyTitle}>That's the whole deck for {label} 🎉</Text>
        <Text style={styles.emptySubtitle}>
          More facts land here as the bank grows — check back soon.
        </Text>
      </View>
    );
  }

  const current = deck[currentIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{label}</Text>

      <Swiper
        ref={swiperRef}
        cards={deck}
        renderCard={(card) =>
          card ? (
            <View style={styles.card}>
              <Text style={styles.cardText}>{card.text}</Text>
            </View>
          ) : null
        }
        onSwiped={(index) => setCurrentIndex(index + 1)}
        onSwipedAll={() => setExhausted(true)}
        cardIndex={0}
        backgroundColor="transparent"
        stackSize={3}
        stackSeparation={14}
        disableTopSwipe
        disableBottomSwipe
        overlayLabels={{
          right: {
            title: 'NEXT',
            style: { label: { color: '#4ADE80', fontSize: 24 } },
          },
          left: {
            title: 'DISCARD',
            style: { label: { color: '#F87171', fontSize: 24 } },
          },
        }}
      />

      <Pressable
        style={[styles.saveButton, current && isSaved(current.id) && styles.saveButtonActive]}
        onPress={() => current && saveFact(current, categoryId)}
      >
        <Text style={styles.saveButtonText}>
          {current && isSaved(current.id) ? '✓ Saved' : '💾 Save this fact'}
        </Text>
      </Pressable>

      <Text style={styles.hint}>Swipe right for next · swipe left to discard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F14', paddingTop: 70, alignItems: 'center' },
  header: { fontSize: 24, fontWeight: '700', color: '#fff', marginBottom: 20 },
  card: {
    height: 420,
    borderRadius: 24,
    backgroundColor: '#1B1B24',
    padding: 28,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  cardText: { color: '#fff', fontSize: 19, lineHeight: 28 },
  saveButton: {
    marginTop: 24,
    backgroundColor: '#2A2A36',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  saveButtonActive: { backgroundColor: '#2F5233' },
  saveButtonText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  hint: { color: '#5C5C66', fontSize: 12, marginTop: 14 },
  emptyTitle: { color: '#fff', fontSize: 20, fontWeight: '700', textAlign: 'center', paddingHorizontal: 30 },
  emptySubtitle: { color: '#9A9AA5', fontSize: 14, textAlign: 'center', marginTop: 10, paddingHorizontal: 40 },
});
