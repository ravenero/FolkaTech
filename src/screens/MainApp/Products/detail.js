import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

// Utils
import {BG, BLACK, GRAY, PRIMARY, WARNING, WHITE} from '../../../utils/color';

// Libraries
import IonIcons from 'react-native-vector-icons/Ionicons';

// Helpers
import {Rupiah} from '../../../helpers';
import {useNavigation} from '@react-navigation/native';
// others
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DetailProduct = props => {
  const product = props.route.params.item;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{flex: 1}}>
          <IonIcons name="arrow-back-circle-outline" size={26} color={GRAY} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: 6}}>
          <IonIcons name="heart-outline" size={20} color={GRAY} />
        </TouchableOpacity>
        <TouchableOpacity>
          <IonIcons name="share-social-outline" size={20} color={GRAY} />
        </TouchableOpacity>
      </View>
      {/* End Header */}
      <View>
        <Image source={{uri: product.cover}} style={styles.images} />
        <View style={styles.content}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <View>
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.price}>Rp. {Rupiah(product.price)}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <IonIcons name="star" size={20} color={WARNING} />
              <Text style={{fontSize: 10}}>4.8</Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={{paddingHorizontal: 20, paddingVertical: 12}}>
            <Text style={styles.desc}>{product.desc}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  images: {
    width: width,
    height: height * 0.3,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    color: PRIMARY,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: PRIMARY,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: WHITE,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    marginTop: -19,
  },
  desc: {
    fontSize: 12,
    color: GRAY,
  },
  line: {
    borderBottomWidth: 0.9,
    borderColor: '#E5E5E5',
  },

  header: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 10000,
    marginHorizontal: 12,
    marginVertical: 6,
    alignItems: 'center',
  },
});

export default DetailProduct;
