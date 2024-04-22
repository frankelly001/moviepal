import React, {Fragment, FunctionComponent, ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  View,
} from 'react-native';
import {appScreenStyles} from './styles';
import {COLOR_KEYS} from '../../../resources/colors';
import {useColorMode, useColors} from '../../../hooks';
import {isIOS} from '../../../resources/config';

const AppScreen: FunctionComponent<
  {
    children: ReactNode;
    isScrollable?: boolean;
    disableSafeArea?: boolean;
    ScreenHeader?: ReactNode;
    statusBarBackgroundColor?: COLOR_KEYS;
  } & ScrollViewProps
> = ({
  children,
  isScrollable = true,
  disableSafeArea = false,
  ScreenHeader,
  statusBarBackgroundColor = 'neutral_light_1',
  ...scrollViewProps
}) => {
  const colors = useColors();
  const Container = disableSafeArea ? View : SafeAreaView;
  const styles = appScreenStyles({colors});
  const {colorMode} = useColorMode();

  return (
    <Fragment>
      <StatusBar
        backgroundColor={colors?.[statusBarBackgroundColor]}
        barStyle={`${colorMode === 'light' ? 'dark' : 'light'}-content`}
      />

      <Container style={[styles.flex1, styles.screenBackground]}>
        <View style={[styles.flex1, styles.container]}>
          {ScreenHeader}
          <KeyboardAvoidingView
            behavior={isIOS ? 'padding' : 'height'}
            style={[styles.flex1]}>
            {isScrollable ? (
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                {...scrollViewProps}>
                {children}
              </ScrollView>
            ) : (
              <View
                style={[styles.flex1, scrollViewProps.contentContainerStyle]}>
                {children}
              </View>
            )}
          </KeyboardAvoidingView>
        </View>
      </Container>
    </Fragment>
  );
};

export default AppScreen;
