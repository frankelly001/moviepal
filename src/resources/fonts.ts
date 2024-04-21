import {StyleSheet, TextStyle} from 'react-native';
import {fs} from './config';

export const generateFontFamily = (
  fontFamily: FONT_FAMILY_TYPES,
  weight: FONT_WEIGHT,
) => `${fontFamily}-${weight}`;

type generateTypographyProps = {
  size: number;
  family: FONT_FAMILY_TYPES;
  weight: FONT_WEIGHT;
  lineHeight?: number;
};

const generateTypography = ({
  family,
  weight,
  size,
}: generateTypographyProps) => {
  return {
    fontFamily: generateFontFamily(family, weight),
    fontSize: fs(size),
    // lineHeight: fontSz(size) * 1.3,
  };
};

export const typography = StyleSheet.create({
  heading_h1: generateTypography({family: 'Inter', weight: 'Bold', size: 24}),
  heading_h2: generateTypography({family: 'Inter', weight: 'Bold', size: 18}),
  heading_h3: generateTypography({family: 'Inter', weight: 'Bold', size: 16}),
  heading_h4: generateTypography({family: 'Inter', weight: 'Bold', size: 14}),
  heading_h5: generateTypography({family: 'Inter', weight: 'Bold', size: 12}),
  body_xl: generateTypography({family: 'Inter', weight: 'Regular', size: 18}),
  body_l: generateTypography({family: 'Inter', weight: 'Regular', size: 16}),
  body_m: generateTypography({family: 'Inter', weight: 'Regular', size: 14}),
  body_s: generateTypography({family: 'Inter', weight: 'Regular', size: 12}),
  body_xs: generateTypography({family: 'Inter', weight: 'Regular', size: 10}),
  action_l: generateTypography({family: 'Inter', weight: 'SemiBold', size: 14}),
  action_m: generateTypography({family: 'Inter', weight: 'SemiBold', size: 12}),
  action_s: generateTypography({family: 'Inter', weight: 'SemiBold', size: 10}),
  caption_m: generateTypography({
    family: 'Inter',
    weight: 'SemiBold',
    size: 10,
  }),
});

export type TYPOGRAPHY_KEYS = keyof typeof typography;

export type TYPOGRAPHY_DEFINITIONS = {[key in TYPOGRAPHY_KEYS]: TextStyle};

export type FONT_FAMILY_TYPES = 'Inter';

export type FONT_WEIGHT =
  | 'Black'
  | 'Bold'
  | 'ExtraBold'
  | 'ExtraLight'
  | 'Light'
  | 'Medium'
  | 'Regular'
  | 'SemiBold'
  | 'Thin';

export type ALIGN_TYPES = 'left' | 'center' | 'right' | 'auto';
