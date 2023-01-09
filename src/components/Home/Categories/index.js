import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// Libraries
import Ionicons from 'react-native-vector-icons/Ionicons';

// Utils
import {PRIMARY, WARNING, WHITE} from '../../../utils/color';

const Categories = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headline}>Categories</Text>
      </View>
      <View style={styles.content}>
        {/* Button All */}
        <TouchableOpacity style={{flex: 1}}>
          <View style={styles.box}>
            <View style={styles.boxIcon}>
              <Ionicons name="list" style={styles.icon} />
            </View>
            <Text style={styles.text}>All</Text>
          </View>
        </TouchableOpacity>
        {/* End Button All */}

        {/* Button Coffee */}
        <TouchableOpacity style={{flex: 1}}>
          <View style={styles.box}>
            <View style={styles.boxIcon}>
              <Ionicons name="cafe" style={styles.icon} />
            </View>
            <Text style={styles.text}>Coffee</Text>
          </View>
        </TouchableOpacity>
        {/* End Button Coffee */}

        {/* Button Drink */}
        <TouchableOpacity style={{flex: 1}}>
          <View style={styles.box}>
            <View style={styles.boxIcon}>
              <Ionicons name="beer" style={styles.icon} />
            </View>
            <Text style={styles.text}>Drink</Text>
          </View>
        </TouchableOpacity>
        {/* End Button Drink */}

        {/* Button Food */}
        <TouchableOpacity style={{flex: 1}}>
          <View style={styles.box}>
            <View style={styles.boxIcon}>
              <Ionicons name="fast-food" style={styles.icon} />
            </View>
            <Text style={styles.text}>Food</Text>
          </View>
        </TouchableOpacity>
        {/* End Button Food */}
      </View>

      <View style={styles.content}>
        {/* Button Cake */}
        <TouchableOpacity style={{flex: 1}}>
          <View style={styles.box}>
            <View style={styles.boxIcon}>
              <Ionicons name="pie-chart" style={styles.icon} />
            </View>
            <Text style={styles.text}>Cake</Text>
          </View>
        </TouchableOpacity>
        {/* End Button Cake */}

        {/* Button Pizza */}
        <TouchableOpacity style={{flex: 1}}>
          <View style={styles.box}>
            <View style={styles.boxIcon}>
              <View style={styles.boxIcon}>
                <Ionicons name="pizza" style={styles.icon} />
              </View>
            </View>
            <Text style={styles.text}>Pizza</Text>
          </View>
        </TouchableOpacity>
        {/* Button Pizza */}

        {/* Button Ice Cream */}
        <TouchableOpacity style={{flex: 1}}>
          <View style={styles.box}>
            <View style={styles.boxIcon}>
              <Ionicons name="ice-cream" style={styles.icon} />
            </View>
            <Text style={styles.text}>Ice Cream</Text>
          </View>
        </TouchableOpacity>
        {/* End Button Ice Cream */}

        {/* Button More */}
        <TouchableOpacity style={{flex: 1}}>
          <View style={styles.box}>
            <View style={styles.boxIcon}>
              <Ionicons name="grid" style={styles.icon} />
            </View>
            <Text style={styles.text}>More</Text>
          </View>
        </TouchableOpacity>
        {/* End Button More */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  box: {
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    marginTop: 2,
    // backgroundColor: WHITE,
    // elevation: 3,
    // borderRadius: 6,
    // justifyContent: 'center',
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
    marginVertical: 6,
    textAlign: 'center',
  },
  viewAll: {
    color: WARNING,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  icon: {
    fontSize: 22,
    color: WHITE,
    paddingHorizontal: 12,
    paddingVertical: 10,
    elevation: 6,
    borderRadius: 6,
  },
  boxIcon: {
    backgroundColor: PRIMARY,
    borderRadius: 8,
  },
});

export default Categories;
