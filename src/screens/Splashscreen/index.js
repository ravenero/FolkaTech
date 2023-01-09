import React, {Component, useEffect} from 'react';
import {View, SafeAreaView, Image, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';

// RestAPI
import {AllProducts} from '../../RestAPI';

// Utils
import {WHITE} from '../../utils/color';

// Redux
import {useDispatch} from 'react-redux';

const Splashscreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      // Get response from REST API
      const response = await AllProducts();

      // Set redux from response
      dispatch({
        type: 'SET_PRODUCT',
        value: response,
      });
    }

    // Exexute function
    fetchData();

    // Redirect to Main App Screen
    setTimeout(() => {
      props.navigation.dispatch(StackActions.replace('MainApp'));
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('../../assets/img/logo-v2.png')}
          style={styles.images}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
  },
  images: {
    resizeMode: 'contain',
    height: 100,
  },
});

export default Splashscreen;
