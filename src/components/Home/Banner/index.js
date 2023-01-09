import React, {Component} from 'react';
import {View, Image, Dimensions} from 'react-native';

// Libraries
import Carousel from 'react-native-banner-carousel';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Banner = props => {
  return (
    <Carousel
      autoplay={false}
      loop={true}
      index={0}
      activePageIndicatorStyle={{backgroundColor: '#FFFFFF'}}>
      {props.data.map((results, index) => (
        <View key={results.id}>
          <Image
            style={{
              height: height * 0.2,
              width: width - 25,
              borderRadius: 15,
              resizeMode: 'contain',
            }}
            source={results.img}
          />
        </View>
      ))}
    </Carousel>
  );
};

export default Banner;
