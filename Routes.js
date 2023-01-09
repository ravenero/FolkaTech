import React, {Component} from 'react';
import {LogBox} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs,
} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
const Stack = createStackNavigator();

// Screens
import Splashscreen from './src/screens/Splashscreen';
import MainApp from './src/screens/MainApp';
import DetailProduct from './src/screens/MainApp/Products/detail';

LogBox.ignoreAllLogs();

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.BottomSheetSlideInSpec,
    close: TransitionSpecs.BottomSheetSlideInSpec,
  },
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
};

const Routes = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Stack.Navigator
        initialRouteName="Splashcreen"
        screenOptions={{
          ...MyTransition,
          detachPreviousScreen: false,
        }}>
        <Stack.Screen
          name="Splashscreen"
          component={Splashscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
