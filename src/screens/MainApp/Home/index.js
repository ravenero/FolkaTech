import React, {Component, useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

// RestAPI
import {AllProducts} from '../../../RestAPI';

// Components
import Categories from '../../../components/Home/Categories';
import Products from '../../../components/Home/Products';
import Banner from '../../../components/Home/Banner';

// Libraries
import Ionicons from 'react-native-vector-icons/Ionicons';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {BG, BLACK, PRIMARY, WHITE} from '../../../utils/color';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const productReducer = useSelector(state => state.productReducer);
  const bannerReducer = useSelector(state => state.bannerReducer);
  const dispatch = useDispatch();

  // Refresh handler
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    async function fetchData() {
      // Get response from REST API
      const response = await AllProducts();

      // Set redux from old data to new data
      dispatch({
        type: 'SET_PRODUCT',
        value: response,
      });

      // Stop refresh
      setRefreshing(false);
    }

    // Execute function refresh
    fetchData();
  }, []);
  //   End Refresh handler

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.containerInput}>
              <TextInput
                placeholder="Find services, food or places"
                selectionColor={PRIMARY}
                style={styles.textInput}
              />
              <Ionicons name="search-outline" style={styles.iconSearch} />
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="person-circle" size={28} color={PRIMARY} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      {/* End Header */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.content}>
          {/* Banner */}
          <View style={{marginVertical: 12}}>
            <Banner data={bannerReducer} />
          </View>
          {/* End Banner */}

          {/* Categories */}
          <View style={{marginVertical: 12}}>
            <Categories />
          </View>
          {/* End Categories */}

          {/* List Products */}
          <View>
            <Products data={productReducer} />
          </View>
          {/* End List Products */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },
  content: {
    marginHorizontal: 14,
  },
  header: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  logo: {
    width: 100,
    resizeMode: 'contain',
    height: 25,
  },

  containerInput: {
    position: 'relative',
    marginRight: 12,
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#E5E5E5',
  },
  textInput: {
    paddingHorizontal: 12,
    paddingVertical: 1,
    color: BLACK,
  },
  iconSearch: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 12,
    fontSize: 18,
    color: '#959595',
  },
});

export default Home;
