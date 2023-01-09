import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './Routes';

import {Provider} from 'react-redux';
import {store} from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
