import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

// Utils
import {GRAY, WHITE} from '../../../utils/color';

const Communities = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Communities screen?</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    color: GRAY,
  },
});

export default Communities;
