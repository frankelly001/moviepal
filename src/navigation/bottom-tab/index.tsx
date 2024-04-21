/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useColors} from '../../hooks/use-colors/useColors';
import {typography} from '../../resources/fonts';
import {routesNames} from '../routes';
import {View} from 'react-native';
import {BottomTabParamList} from './type';
import {HomeIcon, SaveIcon, SearchIcon} from '../../assets/svg';
import {Home} from '../../screens/bottom-tab';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab = () => {
  const colors = useColors();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          lazy: true,
          tabBarLabelStyle: {marginBottom: 3, ...typography.body_xs},
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.neutral_light_1,
            bottom: 5,
            shadowColor: 'transparent',
            borderTopWidth: 0.5,
            borderTopColor: colors.neutral_light_4,
          },
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: colors.highlight_5,
          tabBarInactiveTintColor: colors.neutral_dark_4,
        }}>
        <Tab.Screen
          name={routesNames.HOME}
          component={Home}
          options={{
            title: 'Home',
            tabBarIcon: ({color}) => <HomeIcon stroke={color} />,
          }}
        />
        <Tab.Screen
          name={routesNames.SEARCH}
          component={View}
          options={{
            title: 'Search',
            tabBarIcon: ({color}) => <SearchIcon stroke={color} />,
          }}
        />
        <Tab.Screen
          name={routesNames.WATCH_LIST}
          component={View}
          options={{
            title: 'Watch list',
            tabBarIcon: ({color}) => <SaveIcon stroke={color} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
