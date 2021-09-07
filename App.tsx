import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { Router } from './src/navigation/Route';
import { AppearanceProvider } from 'react-native-appearance';
import { AppProvider } from './src/context/AppProvider';

const config = {
  useSystemColorMode: true,
  // initialColorMode: 'dark',
};
const theme = extendTheme({ config });

const linearGradientConfig = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};

export default function App() {
  return (
    <AppearanceProvider>
      <NativeBaseProvider theme={theme} config={linearGradientConfig}>
        <AppProvider>
          <Router />
        </AppProvider>
      </NativeBaseProvider>
    </AppearanceProvider>
  );
}
