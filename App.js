import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './src/screens/HomeScreen';
import FlashcardScreen from './src/screens/FlashcardScreen';
import SavedScreen from './src/screens/SavedScreen';
import { SavedProvider } from './src/context/SavedContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SavedProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Flashcards" component={FlashcardScreen} />
            <Stack.Screen name="Saved" component={SavedScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SavedProvider>
    </GestureHandlerRootView>
  );
}
