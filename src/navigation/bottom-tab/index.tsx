/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FunctionComponent} from 'react';
import {useColorMode, useColors} from '../../hooks';
import {typography} from '../../resources/fonts';
import {routesNames} from '../routes';
import {Pressable, View} from 'react-native';
import {BottomTabParamList} from './type';
import {
  CustomMoonIcon,
  DarkMoonIcon,
  HomeIcon,
  LightMoonIcon,
  SaveIcon,
} from '../../assets/svg';
import {Home} from '../../screens/bottom-tab';
import {bottomTabStyles} from './styles';
import AppearanceSheet from './appearance-sheet';
import {useSheet} from '../../hooks';
import {light_mode_colors} from '../../resources/colors';

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
            tabBarButton: () => <ColorModeButton />,
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

const ColorModeButton: FunctionComponent = () => {
  const colors = useColors();
  const styles = bottomTabStyles({colors});
  const {sheetRef, openSheet, closeSheet} = useSheet();
  const {mode} = useColorMode();
  const modeBtns = {
    light: <LightMoonIcon fill={light_mode_colors.neutral_light_2} />,
    dark: <DarkMoonIcon fill={light_mode_colors.neutral_light_2} />,
    custom: <CustomMoonIcon fill={light_mode_colors.neutral_light_2} />,
  };

  const Icon = modeBtns[mode];

  return (
    <>
      <Pressable onPress={openSheet} style={styles.tabBtnContainer}>
        <View style={styles.createTabBtn}>{Icon}</View>
      </Pressable>
      <AppearanceSheet sheetRef={sheetRef} closeSheet={closeSheet} />
    </>
  );
};
