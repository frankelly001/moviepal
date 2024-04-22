import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppSheet from '../app-sheet';
import {appScreenSheetStyles} from './styles';
import {AppScreenSheetProps} from './types';
import {useColors} from '../../../hooks';
import {SCREEN_HEIGHT, isIOS} from '../../../resources/config';
import {AppText} from '../../common';
import {CloseIcon} from '../../../assets/svg';

const AppScreenSheet: FunctionComponent<AppScreenSheetProps> = ({
  children,
  closeSheet,
  sheetRef,
  title,
}) => {
  const colors = useColors();
  const styles = appScreenSheetStyles({colors});

  return (
    <AppSheet
      sheetRef={sheetRef}
      disableBackDrop={true}
      enableSlideToClose={true}
      onPressButton={closeSheet}
      onBackPress={closeSheet}
      modalHeight={SCREEN_HEIGHT * (isIOS ? 0.95 : 1)}
      modalStyle={styles.modal}
      withHandle={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <AppText
            text={title}
            type="heading_h3"
            color="neutral_dark_5"
            align="center"
            style={styles.header}
          />
          <TouchableOpacity style={styles.closeBtn} onPress={closeSheet}>
            <CloseIcon fill={colors.neutral_dark_5} width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>{children}</View>
      </View>
    </AppSheet>
  );
};

export default AppScreenSheet;
