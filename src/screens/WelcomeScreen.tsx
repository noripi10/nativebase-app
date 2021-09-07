import React, { useRef, createRef, useState } from 'react';
import {
  Box,
  useColorModeValue,
  useColorMode,
  VStack,
  Button,
  Badge,
  Heading,
  HStack,
  Spinner,
  ScrollView,
  Input,
  Checkbox,
} from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/Route';
import { GestureResponderEvent, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

type Props = NativeStackScreenProps<StackParamList, 'welcome'>;

export const WelcomeScreen: React.FC<Props> = ({ navigation }: Props) => {
  const refElements = useRef<React.MutableRefObject<HTMLInputElement | null>[]>([]);
  for (let i = 0; i <= 3; i++) {
    refElements.current[i] = createRef<HTMLInputElement>()!;
  }
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.100', 'gray.800');
  const bgButton = useColorModeValue('blue.800', 'red.800');

  const [user1, setUser1] = useState({ userName: '', isActive: false });
  const [user2, setUser2] = useState({ userName: '', isActive: false });
  const [user3, setUser3] = useState({ userName: '', isActive: false });
  const [user4, setUser4] = useState({ userName: '', isActive: false });
  return (
    <>
      <ScrollView
        flex={1}
        bg={bg}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
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
        <VStack w='100%'>
          <HStack justifyContent='center' alignItems='center'>
            <Input
              w='70%'
              ref={refElements.current[0]}
              value={user1.userName}
              onChangeText={(userName: string) => {
                setUser1((prev) => ({ ...prev, userName }));
              }}
            />
            <Checkbox
              value='green'
              size='lg'
              colorScheme='yellow'
              accessibilityLabel='user1 active check'
              isChecked={user1.isActive}
              onChange={(isSelected: boolean) => {
                setUser1((prev) => ({ ...prev, isActive: isSelected }));
              }}
            />
          </HStack>
          <HStack justifyContent='center' alignItems='center'>
            <Input
              w='70%'
              ref={refElements.current[0]}
              value={user2.userName}
              onChangeText={(userName: string) => {
                setUser2((prev) => ({ ...prev, userName }));
              }}
            />
            <Checkbox
              value='green'
              size='lg'
              colorScheme='yellow'
              accessibilityLabel='user1 active check'
              isChecked={user2.isActive}
              onChange={(isSelected: boolean) => {
                setUser2((prev) => ({ ...prev, isActive: isSelected }));
              }}
            />
          </HStack>
          <HStack justifyContent='center' alignItems='center'>
            <Input
              w='70%'
              ref={refElements.current[0]}
              value={user3.userName}
              onChangeText={(userName: string) => {
                setUser3((prev) => ({ ...prev, userName }));
              }}
            />
            <Checkbox
              value='green'
              size='lg'
              colorScheme='yellow'
              accessibilityLabel='user1 active check'
              isChecked={user3.isActive}
              onChange={(isSelected: boolean) => {
                setUser3((prev) => ({ ...prev, isActive: isSelected }));
              }}
            />
          </HStack>
          <HStack justifyContent='center' alignItems='center'>
            <Input
              w='70%'
              ref={refElements.current[0]}
              value={user4.userName}
              onChangeText={(userName: string) => {
                setUser4((prev) => ({ ...prev, userName }));
              }}
            />
            <Checkbox
              value='green'
              size='lg'
              colorScheme='yellow'
              accessibilityLabel='user1 active check'
              isChecked={user4.isActive}
              onChange={(isSelected: boolean) => {
                setUser4((prev) => ({ ...prev, isActive: isSelected }));
              }}
            />
          </HStack>

          <Button
            m={3}
            onPress={(e: GestureResponderEvent) => {
              e.preventDefault();
              console.log(user1, user2, user3, user4);
            }}
            _pressed={{ bg: 'white' }}
          >
            プレーヤー登録
          </Button>
        </VStack>
      </ScrollView>
      <HStack
        h='120px'
        justifyContent='center'
        alignItems='center'
        bg={useColorModeValue('gray.200', 'gray.900')}
        flexWrap='wrap'
        py='3'
      >
        <Button onPress={() => navigation.navigate('transition')} mr={2}>
          transition page
        </Button>
        <Button onPress={() => navigation.navigate('keyboard_avoiding')}>keyboard_avoiding</Button>
        <Button onPress={() => navigation.navigate('grid')}>grid page</Button>
      </HStack>
      <ExpoStatusBar style={colorMode === 'dark' ? 'light' : 'dark'} />
    </>
  );
};
