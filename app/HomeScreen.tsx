import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <Text className="text-red-500 font-bold">Hello world!</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
