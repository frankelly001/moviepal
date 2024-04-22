/* eslint-disable react/react-in-jsx-scope */
import {FunctionComponent, ReactNode, useState} from 'react';
import {BaseSheetProps} from '../../../types/Sheet';
import {useAppDispatch} from '../../../state/hooks';
import {useColorMode, useColors} from '../../../hooks';
import {COLOR_MODE_TYPES} from '../../../resources/colors';
import {
  CheckIcon,
  CustomMoonIcon,
  DarkMoonIcon,
  LightMoonIcon,
} from '../../../assets/svg';
import {AppScreenSheet} from '../../../components/sheets';
import {AppButton} from '../../../components/buttons';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '../../../components/common';
import {setColorMode} from '../../../state/store/colors/colorsSlice';
import {appearanceSheetStyles} from './styles';
import {localStorage} from '../../../../utils/helpers';

const AppearanceSheet: FunctionComponent<BaseSheetProps> = ({
  sheetRef,
  closeSheet = () => null,
}) => {
  const colors = useColors();
  const dispatch: any = useAppDispatch();

  const {mode} = useColorMode();

  const [selected, setSelected] = useState<COLOR_MODE_TYPES>(mode);

  const createBtns: {
    name: COLOR_MODE_TYPES;
    Icon: ReactNode;
  }[] = [
    {
      name: 'light',
      Icon: <LightMoonIcon fill={colors.neutral_dark_4} />,
    },
    {
      name: 'dark',
      Icon: <DarkMoonIcon fill={colors.neutral_dark_4} />,
    },
    {
      name: 'custom',
      Icon: <CustomMoonIcon fill={colors.neutral_dark_4} />,
    },
  ];

  const styles = appearanceSheetStyles({colors});

  return (
    <AppScreenSheet
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      title="Appearance">
      <>
        {/* <AppListButton
          disabled
          title="Select an appearance"
          titleSize="caption_m"
          textTranform="uppercase"
          titleColor="neutral_dark_2"
        /> */}
        <View style={styles.createItemBtnContainer}>
          {createBtns.map(({Icon, name}) => (
            <TouchableOpacity
              onPress={() => setSelected(name)}
              key={name}
              style={[
                styles.createItem,
                styles.createItemBtn,
                name === selected ? styles.createItemSelected : null,
              ]}>
              {Icon}
              <AppText
                text={name}
                type="body_m"
                textTransform="capitalize"
                color="neutral_dark_5"
                style={styles.itemTitle}
              />
              {name === selected && <CheckIcon />}
            </TouchableOpacity>
          ))}
        </View>
        <AppButton
          text="Done"
          disabled={mode === selected}
          onPress={() => {
            if (selected) {
              dispatch(setColorMode(selected));
            }
            closeSheet();
            localStorage.store(localStorage.keys.COLOR_MODE, selected);
          }}
        />
      </>
    </AppScreenSheet>
  );
};

export default AppearanceSheet;
