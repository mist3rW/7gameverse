import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { game_single_article_url } from '../lib/api';
import { singleArticleState } from '../lib/types';

const initialState: singleArticleState = {
  article: null,
  isLoading: false,
  status: 'idle',
  error: null as string | null,
};

export const fetchSingleArticle = createAsyncThunk(
  'singleArticle/fetchSingleArticle',
  async (id: string) => {
    const response = await axios.get(game_single_article_url(id));

    return response.data.results[0];
  }
);

const singleArticleSlice = createSlice({
  name: 'singleArticle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleArticle.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(fetchSingleArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.article = action.payload;
      })
      .addCase(fetchSingleArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export default singleArticleSlice.reducer;
