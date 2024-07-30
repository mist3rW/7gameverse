import gamesReducer from '../state/gamesSlice';
import detailsReducer from '../state/detailsSlice';
import articlesReducer from '../state/articlesSlice';
import singleArticleSlice from '../state/singleArticleSlice';

import { configureStore } from '@reduxjs/toolkit';

export const makeStore = () => {
  return configureStore({
    reducer: {
      games: gamesReducer,
      details: detailsReducer,
      articles: articlesReducer,
      article: singleArticleSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
