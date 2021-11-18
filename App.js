/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import Navigation from './src/navigation/AuthNavigator'
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      <FlashMessage position="top" />
    </NavigationContainer>

  );
};

export default App;
