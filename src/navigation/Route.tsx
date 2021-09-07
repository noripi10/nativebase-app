import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelcomeScreen } from '../screens/WelcomeScreen';
import { TransitionScreen } from '../screens/TransitionScreen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useColorMode } from 'native-base';
import { GridScreen } from '../screens/GridScreen';
import KeyboradAvoidingScreen from '../screens/KeyboradAvoidingScreen';

export type StackParamList = {
  welcome: undefined;
  transition: undefined;
  grid: undefined;
  keyboard_avoiding: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export const Router: React.VFC = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <NavigationContainer theme={colorMode === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name='welcome' component={WelcomeScreen} />
          <Stack.Screen name='transition' component={TransitionScreen} />
          <Stack.Screen name='grid' component={GridScreen} />
          <Stack.Screen name='keyboard_avoiding' component={KeyboradAvoidingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
    </>
  );
};
