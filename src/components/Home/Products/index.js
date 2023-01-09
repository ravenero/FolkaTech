import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

// Libraries
import Ionicons from 'react-native-vector-icons/Ionicons';
import GridFlatList from 'grid-flatlist-react-native';

// Utils
import {GRAY, PRIMARY, WARNING, WHITE} from '../../../utils/color';

// Helpers
import {Rupiah} from '../../../helpers';
import {useNavigation} from '@react-navigation/native';

const Products = props => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headline}>Popular Food Nearby</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <GridFlatList
        data={props.data}
        renderItem={item => (
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('DetailProduct', {item})}>
            <View style={styles.content}>
              <Image source={{uri: item.cover}} style={styles.images} />
              <View
                style={{
                  paddingHorizontal: 10,
                  marginTop: 4,
                  marginBottom: 12,
                }}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc.slice(0, 50)}...</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 12,
                  }}>
                  <Text style={styles.price}>Rp. {Rupiah(item.price)}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons
                      name="star"
                      color={WARNING}
                      style={{marginRight: 4}}
                    />
                    <Text style={styles.desc}>4.8</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        )}
        gap={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  content: {
    backgroundColor: WHITE,
    borderRadius: 12,
    elevation: 2,
    // padding: 10,
  },
  box: {
    marginHorizontal: 4,
    alignItems: 'center',
  },
  headline: {
    color: PRIMARY,
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: PRIMARY,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 6,
  },
  desc: {
    color: GRAY,
    fontSize: 12,
    marginTop: 2,
  },
  price: {
    color: PRIMARY,
    fontWeight: 'bold',
    fontSize: 12,
  },
  viewAll: {
    color: WARNING,
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  icon: {
    fontSize: 24,
    color: PRIMARY,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: WHITE,
    elevation: 3,
    borderRadius: 6,
  },
  images: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
});

export default Products;
