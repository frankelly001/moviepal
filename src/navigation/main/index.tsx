import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTab from '../bottom-tab';
import {navigationRef} from '../root';
import {routesNames} from '../routes';
import {navigationTheme} from './theme';
import {RootStackParamList} from './types';
import {useColors} from '../../hooks/use-colors/useColors';
import {MovieDetail} from '../../screens/stack-screen';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  const colors = useColors();

  return (
    <NavigationContainer theme={navigationTheme({colors})} ref={navigationRef}>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen
          name={routesNames.BOTTOM_TAB}
          component={BottomTab}
          options={{}}
        />
        <Screen
          name={routesNames.DETAIL}
          component={MovieDetail}
          options={{}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
