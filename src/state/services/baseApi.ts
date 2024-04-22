import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://www.omdbapi.com';
const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Movie'],
  endpoints: ({}) => ({}),
});
