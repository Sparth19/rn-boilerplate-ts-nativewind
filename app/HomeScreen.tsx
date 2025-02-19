import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from './assets/icons/verified.svg';
import {cssInterop} from 'nativewind';

cssInterop(Icon, {
  className: {
    target: 'style',
    nativeStyleToProp: {width: true, height: true},
  },
});

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-color-blue06 justify-center items-center">
      <Icon className="m-2" />
      <Text className="text-color-caution font-poppins700 text-medium p-3 border-color-white border-2 rounded-3 uppercase dark:text-color-success">
        Hello world!
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
