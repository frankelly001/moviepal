import React, {Fragment, FunctionComponent, useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  SaveIcon,
  StarIcon,
  TicketIcon,
} from '../../../assets/svg';
import {AppText} from '../../../components/common';
import {AppScreen} from '../../../components/containers';
import {AppHeader} from '../../../components/headers';
import {useColors} from '../../../hooks';
import {GeneralScreenProps} from '../../../navigation/types';
import {useGetMovieDetailApiQuery} from '../../../state/services/movies/api';
import {detailStyles, otherDetailsStyles} from './styles';
import {OtherDetailsProps} from './types';
import {AppVectorIcons, Icon} from '../../../components/icons';

const MovieDetail: FunctionComponent<GeneralScreenProps<'DETAIL'>> = ({
  route,
}) => {
  const colors = useColors();
  const {data: movieDetail} = useGetMovieDetailApiQuery({
    plot: 'full',
    imdbID: route.params.imdbID,
  });
  const uri =
    movieDetail?.Poster && movieDetail?.Poster !== 'N/A'
      ? movieDetail?.Poster
      : undefined;

  const styles = detailStyles({colors});
  return (
    <AppScreen
      ScreenHeader={
        <AppHeader
          LeftContent={
            <ArrowLeftIcon
              width={24}
              height={24}
              fill={colors.neutral_dark_1}
            />
          }
          middleTitle="Detail"
          RightContent={
            <SaveIcon width={28} height={28} stroke={colors.neutral_dark_1} />
          }
        />
      }>
      <View style={styles.posterContainer}>
        <View style={styles.posterCover}>
          <Image
            source={{
              uri,
              cache: 'force-cache',
            }}
            style={styles.img}
          />
          <View style={styles.rateContainer}>
            <View style={styles.rateBackGround} />
            <StarIcon strokeWidth={1.2} stroke={colors.support_warning_1} />
            <AppText
              text="4.5"
              type="body_s"
              numberOfLines={6}
              color="support_warning_1"
            />
          </View>
        </View>

        <View style={styles.detailContainer}>
          <View style={styles.imgPoster}>
            <Image
              source={{
                uri,
                cache: 'force-cache',
              }}
              style={[styles.img]}
            />
          </View>
          <View style={styles.titleContainer}>
            <AppText
              text={movieDetail?.Title}
              type="heading_h3"
              numberOfLines={6}
            />
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.pillContainer}>
          {[
            {
              label: movieDetail?.Year,
              Icon: (
                <CalendarIcon
                  width={18}
                  height={18}
                  stroke={colors.highlight_5}
                />
              ),
            },
            {
              label: movieDetail?.Runtime,
              Icon: (
                <ClockIcon width={18} height={18} stroke={colors.highlight_5} />
              ),
            },
            {
              label: movieDetail?.Genre,
              Icon: (
                <TicketIcon
                  width={18}
                  height={18}
                  stroke={colors.highlight_5}
                />
              ),
            },
            {
              label: movieDetail?.Language,
              Icon: (
                <Icon
                  IconTag={AppVectorIcons.FontAwesome}
                  name="language"
                  size={18}
                  color={colors.highlight_5}
                />
              ),
            },
            {
              label: movieDetail?.Country,
              Icon: (
                <ClockIcon width={18} height={18} stroke={colors.highlight_5} />
              ),
            },
            {
              label: movieDetail?.Metascore,
              Icon: (
                <Icon
                  IconTag={AppVectorIcons.MaterialCommunityIcons}
                  name="scoreboard-outline"
                  size={18}
                  color={colors.highlight_5}
                />
              ),
            },
            {
              label: movieDetail?.imdbVotes,
              Icon: (
                <Icon
                  IconTag={AppVectorIcons.MaterialCommunityIcons}
                  name="vote-outline"
                  size={18}
                  color={colors.highlight_5}
                />
              ),
            },
            {
              label: movieDetail?.Awards,
              Icon: (
                <Icon
                  IconTag={AppVectorIcons.Feather}
                  name="award"
                  size={18}
                  color={colors.highlight_5}
                />
              ),
              isLast: true,
            },
          ].map(({label, Icon: AppIcon, isLast}, index) => (
            <Fragment key={index}>
              <View style={styles.pill}>
                {AppIcon}
                <AppText type="body_s" text={label} color="neutral_dark_2" />
              </View>
              {!isLast && <View style={styles.serpaerator} />}
            </Fragment>
          ))}
        </View>
        <OtherDetails
          plot={movieDetail?.Plot}
          actors={movieDetail?.Actors}
          director={movieDetail?.Actors}
          writer={movieDetail?.Writer}
          ratings={movieDetail?.Ratings}
        />
      </View>
    </AppScreen>
  );
};

export default MovieDetail;

const OtherDetails: FunctionComponent<OtherDetailsProps> = ({
  plot,
  actors,
  director,
  writer,
  ratings,
}) => {
  const colors = useColors();
  const [current, setCurrent] = useState(0);
  const styles = otherDetailsStyles;
  return (
    <>
      <View style={styles.headerContainer}>
        {['About Movie', 'Ratings', 'Cast'].map((el, i) => (
          <Pressable
            key={i}
            onPress={() => setCurrent(i)}
            style={{
              ...styles.header,
              borderColor:
                colors?.[current === i ? 'highlight_5' : 'transparent'],
            }}>
            <AppText type="action_m" text={el} />
          </Pressable>
        ))}
      </View>
      <View style={styles.detailConatiner}>
        {current === 0 && <AppText type="body_s" text={plot} />}
        {current === 1 && (
          <>
            {ratings?.map((el, i) => (
              <View key={i} style={styles.detail}>
                <AppText
                  type="body_s"
                  text={[
                    el.Source,
                    <AppText
                      key={1}
                      type="body_xs"
                      text={`   (${el.Value})`}
                      color="support_warning_2"
                    />,
                  ]}
                />
              </View>
            ))}
          </>
        )}
        {current === 2 && (
          <>
            {[
              {
                label: 'Actors',
                value: actors,
              },
              {
                label: 'Director',
                value: director,
              },
              {
                label: 'Writer',
                value: writer,
              },
            ].map((el, i) => (
              <View key={i} style={styles.detail}>
                <AppText
                  type="body_s"
                  color="neutral_dark_2"
                  text={[
                    `${el.label}:`,
                    <AppText key={1} type="body_s" text={` ${el.value}`} />,
                  ]}
                />
              </View>
            ))}
          </>
        )}
      </View>
    </>
  );
};
