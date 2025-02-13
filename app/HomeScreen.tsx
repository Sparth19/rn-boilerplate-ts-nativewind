import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const HomeScreen: React.FC = () => {
  console.log('HELLO');
  return (
    <SafeAreaView className="flex-1 bg-color-blue06 justify-center items-center">
      <Text className="text-color-caution font-poppins700 text-medium-extra p-3 border-color-white border-2 rounded-[10] uppercase dark:text-color-success">
        Hello world!
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
