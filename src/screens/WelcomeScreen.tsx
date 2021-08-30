import React from 'react';
import {
  Box,
  Text,
  useColorModeValue,
  useColorMode,
  VStack,
  Button,
  Stack,
  Center,
  Badge,
  Heading,
  HStack,
  Spinner,
  Alert,
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/Route';

type Props = NativeStackScreenProps<StackParamList, 'welcome'>;

export const WelcomeScreen: React.FC<Props> = ({ navigation }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.800');
  const bgButton = useColorModeValue('blue.800', 'red.800');

  return (
    <>
      <Box flex={1} bg={bg} justifyContent='flex-start' alignItems='center' safeArea>
        <Box
          width='90%'
          height={200}
          bg={{ linearGradient: { colors: ['lightBlue.300', 'violet.800'], start: [0, 0], end: [1, 1] } }}
          borderRadius={8}
          mt={8}
          p={4}
          shadow={2}
          justifyContent='flex-start'
        >
          <Heading size='md' pb='2'>
            Card
          </Heading>
          <Badge p={1} borderRadius={4} colorScheme='secondary' width={150}>
            {`Color Mode : ${colorMode}`}
          </Badge>
        </Box>
        <Box
          width='90%'
          height={200}
          bg={{ linearGradient: { colors: ['teal.300', 'teal.800'], start: [0, 0], end: [1, 1] } }}
          borderRadius={8}
          mt={8}
          p={4}
          shadow={2}
          justifyContent='flex-start'
        >
          <Heading size='md' pb='2'>
            Card
          </Heading>
          <Badge p={1} borderRadius={4} colorScheme='teal.900' width={150}>
            {`Color Mode : ${colorMode}`}
          </Badge>
        </Box>
        <VStack justifyContent='center' alignItems='center' mt='8'>
          <Button
            colorScheme='success'
            size='sm'
            onPress={toggleColorMode}
            startIcon={<FontAwesome name='star' size={18} color='#ddf74a' />}
          >
            Change Color Mode
          </Button>
        </VStack>
        <HStack space={2} mt={8}>
          <Spinner color='danger.400' size='large' />
          <Spinner color='blue.500' />
          <Spinner color={useColorModeValue('gray.900', 'gray.100')} />
          <Spinner color='warning.500' />
        </HStack>
      </Box>
      <HStack h='120px' justifyContent='center' alignItems='center' bg={useColorModeValue('gray.200', 'gray.900')}>
        <Button onPress={() => navigation.navigate('transition')} mr={2}>
          transition page
        </Button>
        <Button onPress={() => navigation.navigate('grid')}>grid page</Button>
      </HStack>
      <ExpoStatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
    </>
  );
};
