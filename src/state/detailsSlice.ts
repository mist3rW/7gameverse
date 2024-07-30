import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  game_detail_url,
  game_screenshot_url,
  game_stores_url,
} from '../lib/api';
import { detailState } from '../lib/types';

const initialState: detailState = {
  game: null,
  screenshots: [],
  stores: [],
  isLoading: false,
  status: 'idle',
  error: null as string | null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGameDetails.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(fetchGameDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.game = action.payload.game;
        state.screenshots = action.payload.screenshots;
        state.stores = action.payload.stores;
      })
      .addCase(fetchGameDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

export const fetchGameDetails = createAsyncThunk(
  'details/fetchGameDetails',
  async (id: number) => {
    const gameData = await axios(game_detail_url(id));
    const screenshotsData = await axios(game_screenshot_url(id));
    const storesData = await axios(game_stores_url(id));
    return {
      game: gameData.data,
      screenshots: screenshotsData.data.results,
      stores: storesData.data.results,
    };
  }
);

export default detailsSlice.reducer;
