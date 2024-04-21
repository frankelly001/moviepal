import {TextStyle, TextProps} from 'react-native';
import {ReactNode} from 'react';
import {COLOR_KEYS} from '../../../resources/colors';
import {ALIGN_TYPES, TYPOGRAPHY_KEYS} from '../../../resources/fonts';

export type TEXT_TRANSFORM = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

export type AppTextProps = {
  text?: ReactNode;
  style?: TextStyle;
  color?: COLOR_KEYS;
  align?: ALIGN_TYPES;
  type?: TYPOGRAPHY_KEYS;
  children?: React.ReactNode;
  onPress?: () => void;
  textTransform?: TEXT_TRANSFORM;
} & TextProps;
