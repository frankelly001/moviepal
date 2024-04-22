import {EntityState, createEntityAdapter} from '@reduxjs/toolkit';
import {RtkSuccessResponse} from '../../../types/ApiResponse';
import {baseApi as api} from '../baseApi';
import {
  GetAllMovieDetailPayloadApiArg,
  GetAllMoviesPayloadApiArg,
  Movie,
  MovieDetail,
} from './types';

const moviesAdapter = createEntityAdapter({
  selectId: (item: Movie) => item.imdbID,
});
const moviesSelector = moviesAdapter.getSelectors();

const apikey = 'e8a962d6';

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    getMovieDetailApi: build.query<MovieDetail, GetAllMovieDetailPayloadApiArg>(
      {
        query: queryArg => ({
          url: '',
          params: {apikey, i: queryArg.imdbID, plot: queryArg.plot},
        }),
      },
    ),

    getAllMoviesApi: build.query<
      RtkSuccessResponse<EntityState<Movie, string>>,
      GetAllMoviesPayloadApiArg
    >({
      query: (queryArg = {page: 1}) => ({
        url: '',
        params: {apikey, s: queryArg.search, page: queryArg.page},
      }),
      transformResponse: (response: RtkSuccessResponse<Movie[]>) => {
        const Search = moviesAdapter.addMany(
          moviesAdapter.getInitialState(),
          response.Search,
        );
        return {
          ...response,
          Search,
        };
      },
      forceRefetch: ({currentArg, previousArg}) => {
        return (currentArg?.page ?? 1) !== (previousArg?.page ?? 1);
      },
      serializeQueryArgs: ({endpointName, queryArgs}) => {
        return `${endpointName} - ${queryArgs.search}`;
      },
      merge: (currentState, incomingState) => {
        moviesAdapter.addMany(
          currentState.Search,
          moviesSelector.selectAll(incomingState.Search),
        );
        currentState.totalResults = incomingState.totalResults;
        currentState.Response = incomingState.Response;
      },
    }),
  }),
});
export {moviesAdapter, injectedRtkApi as moviesApi, moviesSelector};
export const {useGetAllMoviesApiQuery, useGetMovieDetailApiQuery} =
  injectedRtkApi;
