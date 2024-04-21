import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {BottomTabParamList} from './bottom-tab/type';
import {RootStackParamList} from './main/types';

export type RootNavProp = NativeStackNavigationProp<RootStackParamList>;

export type BottomTabNavProp = NativeStackNavigationProp<BottomTabParamList>;

export type GeneralNavProp = NavigationProp<ReactNavigation.RootParamList>;

export type GeneralScreenProps<T extends keyof ReactNavigation.RootParamList> =
  {
    navigation: NavigationProp<ReactNavigation.RootParamList, T>;
    route: RouteProp<Omit<ReactNavigation.RootParamList, ''>, T>;
  };

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabParamList, RootStackParamList {}
  }
}
