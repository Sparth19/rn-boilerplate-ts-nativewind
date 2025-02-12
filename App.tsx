import React, {FC} from 'react';
import {verifyInstallation} from 'nativewind';
import HomeScreen from './app/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import './global.css';

const App: FC = () => {
  verifyInstallation();
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
};

export default App;
