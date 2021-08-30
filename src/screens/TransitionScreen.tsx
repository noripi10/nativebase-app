import React, { useState, useRef } from 'react';
import { Animated, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Center, Box, Text, PresenceTransition, Button } from 'native-base';

import { StackParamList } from '../navigation/Route';

type Props = NativeStackScreenProps<StackParamList, 'transition'>;

export const TransitionScreen: React.FC<Props> = (props: Props) => {
  const animated = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);
  return (
    <Center>
      <Button
        onPress={() => {
          setVisible(!visible);
          Animated.timing(animated, {
            toValue: visible ? 0 : 1,
            duration: 500,
            useNativeDriver: false,
          }).start();
        }}
      >
        toggle button
      </Button>
      <PresenceTransition
        visible={visible}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 500 } }}
      >
        <Box
          justifyContent='center'
          alignItems='center'
          h={120}
          w={120}
          m={3}
          borderRadius={8}
          bg={{ linearGradient: { colors: ['teal.300', 'teal.800'], start: [1, 1], end: [0, 0] } }}
        >
          <Text>BOX</Text>
        </Box>
      </PresenceTransition>
      <Animated.View
        style={{
          width: 120,
          height: 120,
          borderRadius: 8,
          opacity: animated.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: 'clamp' }),
        }}
      >
        <LinearGradient
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}
          colors={['blue', 'red']}
          start={[1, 1]}
          end={[0, 0]}
        >
          <Text>BOX</Text>
        </LinearGradient>
      </Animated.View>
    </Center>
  );
};
