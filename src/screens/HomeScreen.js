import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { CATEGORIES } from '../data/facts';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Larp.</Text>
      <Text style={styles.subtitle}>Pick a field. Become an instant expert.</Text>

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate('Flashcards', { categoryId: item.id, label: item.label })
            }
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.cardLabel}>{item.label}</Text>
          </Pressable>
        )}
      />

      <Pressable style={styles.savedLink} onPress={() => navigation.navigate('Saved')}>
        <Text style={styles.savedLinkText}>📁 My Saved Facts</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F14', paddingTop: 70, paddingHorizontal: 20 },
  title: { fontSize: 40, fontWeight: '800', color: '#fff' },
  subtitle: { fontSize: 15, color: '#9A9AA5', marginTop: 6, marginBottom: 24 },
  grid: { paddingBottom: 24 },
  row: { justifyContent: 'space-between', marginBottom: 16 },
  card: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#1B1B24',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: { fontSize: 40, marginBottom: 10 },
  cardLabel: { color: '#fff', fontSize: 16, fontWeight: '600' },
  savedLink: { alignSelf: 'center', paddingVertical: 14 },
  savedLinkText: { color: '#9A9AA5', fontSize: 15 },
});
