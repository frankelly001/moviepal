/* eslint-disable react-native/no-inline-styles */
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
import {useColors} from '../../../hooks/use-colors/useColors';
import {GeneralScreenProps} from '../../../navigation/types';
import {useGetMovieDetailApiQuery} from '../../../state/services/movies/api';

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
  return (
    <AppScreen
      // isScrollable={false}
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
            <SaveIcon width={28} height={28} fill={colors.neutral_dark_1} />
          }
        />
      }>
      <View style={{marginBottom: 60}}>
        <View style={{height: 210}}>
          <Image
            source={{
              uri,
            }}
            style={{flex: 1}}
          />
          <View
            style={{
              position: 'absolute',

              right: 0,
              top: 10,
              paddingHorizontal: 8,
              paddingVertical: 4,
              flexDirection: 'row',
              gap: 4,
              alignItems: 'center',
            }}>
            <View
              style={{
                borderBottomLeftRadius: 8,
                borderTopLeftRadius: 8,
                opacity: 0.5,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: colors.neutral_dark_4,
              }}
            />
            <StarIcon strokeWidth={1.2} stroke={colors.support_warning_1} />
            <AppText
              text="4.5"
              type="body_s"
              numberOfLines={6}
              color="support_warning_1"
            />
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: 16,
            bottom: -60,
            left: 20,
            right: 20,
          }}>
          <View
            style={{
              height: 120,
              width: 95,
              // backgroundColor: 'green',
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <Image
              source={{
                uri,
              }}
              style={{flex: 1}}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 4,
              maxHeight: 120,
              // backgroundColor: 'black',
            }}>
            <AppText
              text={movieDetail?.Title}
              type="heading_h3"
              numberOfLines={6}
            />
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 16}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 8,
          }}>
          {[
            {label: movieDetail?.Year, Icon: CalendarIcon},
            {label: movieDetail?.Runtime, Icon: ClockIcon},
            {label: movieDetail?.Genre, Icon: TicketIcon},
            {label: movieDetail?.Actors, Icon: ClockIcon},
            {label: movieDetail?.Language, Icon: ClockIcon},
            {label: movieDetail?.Country, Icon: ClockIcon},
            {label: movieDetail?.Metascore, Icon: ClockIcon},
            {label: movieDetail?.imdbVotes, Icon: ClockIcon},
            {label: movieDetail?.Awards, Icon: ClockIcon, isLast: true},
          ].map(({label, Icon, isLast}, index) => (
            <Fragment key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}>
                <Icon width={18} height={18} stroke={colors.highlight_5} />
                <AppText type="body_s" text={label} color="neutral_dark_2" />
              </View>
              {!isLast && (
                <View
                  style={{
                    height: 15,
                    width: 1,
                    backgroundColor: 'white',
                    // marginHorizontal: 12,
                  }}
                />
              )}
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

const OtherDetails: FunctionComponent<{
  plot?: string;
  actors?: string;
  director?: string;
  writer?: string;
  ratings?: {Source: string; Value: string}[];
}> = ({plot, actors, director, writer, ratings}) => {
  const colors = useColors();
  const [current, setCurrent] = useState(0);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 24,
          gap: 24,
        }}>
        {['About Movie', 'Ratings', 'Cast'].map((el, i) => (
          <Pressable
            onPress={() => setCurrent(i)}
            style={{
              borderBottomWidth: 5,
              paddingVertical: 10,
              borderColor:
                colors?.[current === i ? 'highlight_5' : 'transparent'],
            }}>
            <AppText type="action_m" text={el} />
          </Pressable>
        ))}
      </View>
      <View style={{marginTop: 16}}>
        {current === 0 && <AppText type="body_s" text={plot} />}
        {current === 1 && (
          <>
            {ratings?.map((el, i) => (
              <View key={i} style={{marginBottom: 10}}>
                <AppText
                  type="body_s"
                  text={[
                    el.Source,
                    <AppText
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
              <View key={i} style={{marginBottom: 10}}>
                <AppText
                  type="body_s"
                  color="neutral_dark_2"
                  text={[
                    `${el.label}:`,
                    <AppText
                      type="body_s"
                      text={`   ${el.value}`}
                      // color="support_warning_2"
                    />,
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
