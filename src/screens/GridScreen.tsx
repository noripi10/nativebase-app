import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Box,
  Button,
  HStack,
  Input,
  KeyboardAvoidingView,
  ScrollView,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from 'native-base';
import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { StackParamList } from '../navigation/Route';

type Props = NativeStackScreenProps<StackParamList, 'grid'>;

const Master: (number | string)[] = ['ホール', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, '合計'];

type Data = {
  userId: string;
  userName: string;
  score: number[];
};
const DataList: Data[] = [
  { userId: '0002', userName: '杉山', score: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { userId: '0008', userName: '園部', score: [4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { userId: '0012', userName: '角', score: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { userId: '0014', userName: '牧', score: [5, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
];

export const GridScreen: React.FC<Props> = ({ navigation }) => {
  const [dataList, setDatalist] = useState<Data[]>(DataList);
  const bc = useColorModeValue('gray.800', 'gray.100');
  const fc = useColorModeValue('black', 'white');
  const { width, height } = useWindowDimensions();
  const colWidth = (width * 0.98) / 5;
  const rowHeight = (height * 0.78) / 19;

  const onScoreChange = (userID: string, arrayPlace: number, val: string) => {
    console.log(val, parseInt(val));
    let newVal = val.toLowerCase();
    if (!/^\d{1,}$/.test(newVal)) newVal = '0';
    const currentList = dataList.map((data) => {
      if (data.userId === userID) {
        let tempData = data;
        tempData.score[arrayPlace] = parseInt(newVal);
      }
      return data;
    });

    setDatalist(currentList);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Group-A スコア表',
      headerRight: () => (
        <Button bg='blue.800' px={2}>
          <Text fontSize={'sm'} color={fc}>
            データ共有
          </Text>
        </Button>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior='position'
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Stack>
          <HStack flex={1} safeAreaBottom p={1} justifyContent='flex-start' alignItems='flex-start'>
            <VStack alignItems='flex-start' bg={'blue.300'}>
              {Master.map((numStr) => (
                <Box
                  key={'hole-' + numStr.toString()}
                  justifyContent='center'
                  alignItems='center'
                  width={colWidth}
                  height={rowHeight}
                  bg='blue.500'
                  borderColor={bc}
                  borderWidth={StyleSheet.hairlineWidth}
                  borderTopWidth={0}
                >
                  <Text color={fc}>{numStr.toString()}</Text>
                </Box>
              ))}
            </VStack>
            <VStack justifyContent='flex-start' alignItems='flex-start'>
              <HStack>
                {dataList.map((data) => (
                  <Box
                    key={data.userName}
                    justifyContent='center'
                    alignItems='center'
                    width={colWidth}
                    height={rowHeight}
                    borderWidth={StyleSheet.hairlineWidth}
                    borderLeftWidth={0}
                    borderBottomWidth={0}
                    borderColor={bc}
                    bg='teal.500'
                  >
                    <Text color={fc}>{data.userName}</Text>
                  </Box>
                ))}
              </HStack>
              <HStack justifyContent='flex-start'>
                {dataList.map(({ userId, userName, score }) => (
                  <VStack key={'scoreList-' + userName} justifyContent='flex-start'>
                    {score.map((val, number) => (
                      <Box
                        key={userName + number.toString()}
                        justifyContent='center'
                        alignItems='center'
                        width={colWidth}
                        height={rowHeight}
                      >
                        <Input
                          width={colWidth}
                          height={rowHeight}
                          p={1}
                          textAlign='center'
                          type='number'
                          borderWidth={StyleSheet.hairlineWidth}
                          borderLeftWidth={0}
                          borderColor={bc}
                          borderRadius={0}
                          color={fc}
                          value={val ? val.toString() : ''}
                          onChangeText={(text: string) => onScoreChange(userId, number, text)}
                        />
                      </Box>
                    ))}
                  </VStack>
                ))}
              </HStack>
              <HStack>
                {dataList.map((data) => (
                  <Box
                    key={'totalScore-' + data.userName}
                    justifyContent='center'
                    alignItems='center'
                    width={colWidth}
                    height={rowHeight}
                    borderWidth={StyleSheet.hairlineWidth}
                    borderLeftWidth={0}
                    borderColor={bc}
                    bg='blue.500'
                  >
                    <Text color={fc}>{data.score.reduce((total, n) => total + n, 0)}</Text>
                  </Box>
                ))}
              </HStack>
            </VStack>
          </HStack>
        </Stack>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
