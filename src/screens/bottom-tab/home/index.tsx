import React, {FunctionComponent} from 'react';
import {homeStyles} from './styles';
import {GeneralScreenProps} from '../../../navigation/types';
import {AppText} from '../../../components/common';
import {AppScreen} from '../../../components/containers';
import {AppTextInput} from '../../../components/inputs';

const Home: FunctionComponent<GeneralScreenProps<'HOME'>> = () => {
  const styles = homeStyles;
  return (
    <AppScreen isScrollable={false} contentContainerStyle={styles.container}>
      <AppText type="heading_h2" text="What do you want to watch?" />
      <AppTextInput placeholder="Search..." />
    </AppScreen>
  );
};

export default Home;
