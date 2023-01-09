import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/Ionicons';

// Utils
import {WHITE, PRIMARY, GRAY} from '../../utils/color';

// Screens
import Home from './Home';
import Favorite from './Favorite';
import Menu from './Menu';
import Chat from './Chat';
import Communities from './Communities';

const MainApp = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={22} />
          ),
          tabBarStyle: {
            alignItems: 'center',
            backgroundColor: WHITE,
            justifyContent: 'center',
            borderTopColor: GRAY,
            paddingVertical: 10,
            height: 56,
          },
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor: PRIMARY,
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" color={color} size={22} />
          ),
          tabBarStyle: {
            alignItems: 'center',
            backgroundColor: WHITE,
            justifyContent: 'center',
            borderTopColor: GRAY,
            paddingVertical: 10,
            height: 56,
          },
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor: PRIMARY,
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                position: 'absolute',
                bottom: 0, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="chevron-up-circle" color={PRIMARY} size={60} />
            </View>
          ),
          tabBarStyle: {
            alignItems: 'center',
            backgroundColor: WHITE,
            justifyContent: 'center',
            borderTopColor: GRAY,
            paddingVertical: 10,
            height: 56,
          },
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor: PRIMARY,
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="chatbubbles" color={color} size={22} />
          ),
          tabBarStyle: {
            alignItems: 'center',
            backgroundColor: WHITE,
            justifyContent: 'center',
            borderTopColor: GRAY,
            paddingVertical: 10,
            height: 56,
          },
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor: PRIMARY,
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="Communities"
        component={Communities}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="people" color={color} size={24} />
          ),
          tabBarStyle: {
            alignItems: 'center',
            backgroundColor: WHITE,
            justifyContent: 'center',
            borderTopColor: GRAY,
            paddingVertical: 10,
            height: 56,
          },
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor: PRIMARY,
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
