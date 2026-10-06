import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { useSaved } from '../context/SavedContext';
import { CATEGORIES } from '../data/facts';

export default function SavedScreen() {
  const { saved, removeFact } = useSaved();
  const categoryLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label || id;

  if (saved.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyTitle}>No saved facts yet</Text>
        <Text style={styles.emptySubtitle}>
          Swipe through a category and tap "Save this fact" to build your folder.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Facts</Text>
      <FlatList
        data={[...saved].sort((a, b) => b.savedAt - a.savedAt)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.categoryTag}>{categoryLabel(item.categoryId)}</Text>
            <Text style={styles.cardText}>{item.text}</Text>
            <Pressable onPress={() => removeFact(item.id)}>
              <Text style={styles.removeText}>Remove</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F14', paddingTop: 70, paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: '800', color: '#fff', marginBottom: 18 },
  card: { backgroundColor: '#1B1B24', borderRadius: 16, padding: 18, marginBottom: 14 },
  categoryTag: { color: '#8A8AF0', fontSize: 12, fontWeight: '700', marginBottom: 8, textTransform: 'uppercase' },
  cardText: { color: '#fff', fontSize: 15, lineHeight: 22, marginBottom: 12 },
  removeText: { color: '#F87171', fontSize: 13, fontWeight: '600' },
  emptyTitle: { color: '#fff', fontSize: 20, fontWeight: '700', textAlign: 'center', paddingHorizontal: 30, marginTop: 200 },
  emptySubtitle: { color: '#9A9AA5', fontSize: 14, textAlign: 'center', marginTop: 10, paddingHorizontal: 40 },
});
