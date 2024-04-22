import React, {FunctionComponent, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import formatListData from '../../../../utils/helpers/format-list-data';
import {AppText} from '../../../components/common';
import {AppScreen} from '../../../components/containers';
import {AppTextInput} from '../../../components/inputs';
import {GeneralScreenProps} from '../../../navigation/types';
import MovieCard from './movie-card';
import {homeStyles} from './styles';
import {routesNames} from '../../../navigation/routes';
import {
  moviesAdapter,
  moviesSelector,
  useGetAllMoviesApiQuery,
} from '../../../state/services/movies/api';
import useDebounce from '../../../hooks/use-debounce/useDebounce';
import {SearchIcon} from '../../../assets/svg';
import {useColors} from '../../../hooks';
import {wp} from '../../../resources/config';

const searchTerms = [
  'Action',
  'Comedy',
  'Drama',
  'Romance',
  'Horror',
  'Thriller',
  'Sci-Fi',
  'Fantasy',
  'Adventure',
  'Mystery',
  'Crime',
  'Animation',
  'Family',
  'Documentary',
  'Biography',
  'History',
  'War',
  'Musical',
  'Sport',
  'Western',
];
const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];

const Home: FunctionComponent<GeneralScreenProps<'HOME'>> = ({navigation}) => {
  const styles = homeStyles;

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm, debouncedValue] = useDebounce('');
  const {
    data: moviesData,
    isFetching,
    isError,
  } = useGetAllMoviesApiQuery(
    {page, search: debouncedValue || randomTerm},
    {
      selectFromResult: ({data, ...otherParams}) => ({
        data: {
          ...data,
          Search: moviesSelector.selectAll(
            data?.Search ?? moviesAdapter.getInitialState(),
          ),
        },
        ...otherParams,
      }),
    },
  );

  const colors = useColors();

  return (
    <AppScreen
      ScreenHeader={
        <View style={styles.headerContainer}>
          <AppText type="heading_h2" text="What do you want to watch?" />
          <AppTextInput
            placeholder="Search..."
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            RightSuffixIcon={
              <SearchIcon
                width={20}
                height={20}
                stroke={colors.neutral_light_5}
              />
            }
          />
        </View>
      }
      isScrollable={false}
      contentContainerStyle={styles.container}>
      <FlatList
        data={formatListData(moviesData.Search, 2)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(_, index) => `${index}`}
        contentContainerStyle={styles.gap16}
        columnWrapperStyle={styles.gap16}
        onEndReachedThreshold={1}
        ListFooterComponent={
          <>
            {isFetching ? (
              <ActivityIndicator
                color={colors.highlight_5}
                style={{marginBottom: wp(16)}}
              />
            ) : null}
          </>
        }
        onEndReached={() => {
          const itemsLeft = Number(moviesData?.totalResults ?? 0) - page * 10;
          if (!isFetching && itemsLeft) {
            setPage(prevPage => (!isError ? prevPage + 1 : prevPage));
          }
        }}
        renderItem={({item}) =>
          item && 'empty' in item ? (
            <View style={styles.flex1} />
          ) : item && 'imdbID' in item ? (
            <MovieCard
              onPress={() =>
                navigation.navigate(routesNames.DETAIL, {imdbID: item.imdbID})
              }
              poster={
                item.Poster || item.Poster !== 'N/A' ? item.Poster : undefined
              }
              title={item.Title}
              year={item.Year}
            />
          ) : (
            <></>
          )
        }
      />
    </AppScreen>
  );
};

export default Home;
