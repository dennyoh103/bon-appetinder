import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/mainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

