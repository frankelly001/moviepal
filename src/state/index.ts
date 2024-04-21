import {configureStore} from '@reduxjs/toolkit';
import {LogBox} from 'react-native';
import {combineReducers} from 'redux';
import {baseApi as api} from './services/baseApi';
import colorsReducer from './store/colors/colorsSlice';
LogBox.ignoreLogs(['Require cycle:']);

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  colorsReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export const resetStore = () => {
  const rootState = store.getState();
  const resetAction = {type: 'RESET_STORE'};
  Object.keys(rootState).forEach(key => {
    store.dispatch({...resetAction, meta: {key}});
  });
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
