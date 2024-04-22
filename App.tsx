/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import MainNavigation from './src/navigation/main';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';
import {useAppDispatch} from './src/state/hooks';
import {setColorMode} from './src/state/store/colors/colorsSlice';
import {localStorage} from './utils/helpers';

function App(): React.JSX.Element {
  const [init, setInit] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const mode = localStorage.get(localStorage.keys.COLOR_MODE);
    if (mode) {
      dispatch(setColorMode(mode));
    }

    setInit(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!init) {
    return <></>;
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <Host>
        <MainNavigation />
      </Host>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({container: {flex: 1}});

export default App;
