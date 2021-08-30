import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { TransitionScreen } from '../screens/TransitionScreen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useColorMode } from 'native-base';
import { GridScreen } from '../screens/GridScreen';

export type StackParamList = {
  welcome: undefined;
  transition: undefined;
  grid: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const Router: React.VFC = () => {
  const { colorMode } = useColorMode();
  return (
    <NavigationContainer theme={colorMode === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name='welcome' component={WelcomeScreen} />
        <Stack.Screen name='transition' component={TransitionScreen} />
        <Stack.Screen name='grid' component={GridScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
