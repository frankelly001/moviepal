import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://www.omdbapi.com';
const API_KEY = 'e8a962d6';
const baseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URL}?apikey=${API_KEY}`,
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Invoice'],
  endpoints: () => ({}),
});
