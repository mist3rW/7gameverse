import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { game_articles_url } from '../lib/api';
import { articlesState } from '../lib/types';

const initialState: articlesState = {
  articles: [],
  isLoading: false,
  status: 'idle',
  error: null as string | null,
};

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const response = await axios.get(game_articles_url());
    return response.data.results;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export default articlesSlice.reducer;
