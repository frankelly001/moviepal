import {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {COLOR_KEYS} from '../../../resources/colors';
import {TYPOGRAPHY_KEYS} from '../../../resources/fonts';

export type appButtonProps = {
  readonly?: boolean;
  isLoading?: boolean;
  text: string | undefined;
  textColor?: COLOR_KEYS;
  buttonColor?: COLOR_KEYS | 'transparent';
  borderColor?: COLOR_KEYS | 'transparent';
  borderWidth?: number;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  textSize?: TYPOGRAPHY_KEYS;
  LeftView?: ReactNode;
  borderRadius?: number;
} & TouchableOpacityProps;
