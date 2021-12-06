/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import Navigation from './src/navigation/AuthNavigator';
import { getStateFromPath, NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { createStore } from 'redux';
import rootReducers from './src/reducers';
import { Provider } from 'react-redux';
import { AsyncStorage } from '@react-native-community/async-storage';


const store = createStore(rootReducers);

useEffect(async()=> {
  try {
    const value = await AsyncStorage.getItem('userData');
    if (value !== null) {
      navigation.navigate('Home');
    }
  } catch (error) {
    // Error retrieving data
  }
},[])

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
