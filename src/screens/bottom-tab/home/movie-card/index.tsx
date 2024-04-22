import React, {FunctionComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {AppText} from '../../../../components/common';
import {movieCardStyles} from './styles';
import {MovieCardProps} from './types';

const MovieCard: FunctionComponent<MovieCardProps> = ({
  onPress,
  poster,
  title,
  year,
}) => {
  const styles = movieCardStyles;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: poster,
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.details}>
        <AppText type="action_m" numberOfLines={1} text={title} />
        <AppText type="body_xs" text={year} color="neutral_dark_2" />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
