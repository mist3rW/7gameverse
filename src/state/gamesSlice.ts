import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  new_games_url,
  popular_games_url,
  search_game_url,
  upcoming_games_url,
} from '../lib/api';
import { gamesState } from '../lib/types';

const initialState: gamesState = {
  newGames: [],
  popularGames: [],
  upcomingGames: [],
  searchedGames: [],
  status: {
    new: 'idle',
    popular: 'idle',
    upcoming: 'idle',
    searched: 'idle',
  },
  error: null as string | null,
  isLoading: false,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    clearSearchedGames: (state) => {
      state.searchedGames = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewGames.pending, (state) => {
        state.status.new = 'loading';
        state.isLoading = true;
      })
      .addCase(fetchNewGames.fulfilled, (state, action) => {
        state.status.new = 'succeeded';
        state.newGames = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchNewGames.rejected, (state, action) => {
        state.status.new = 'failed';
        state.error = action.error.message ?? null;
        state.isLoading = false;
      })
      .addCase(fetchPopularGames.pending, (state) => {
        state.status.popular = 'loading';
        state.isLoading = true;
      })
      .addCase(fetchPopularGames.fulfilled, (state, action) => {
        state.status.popular = 'succeeded';
        state.popularGames = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPopularGames.rejected, (state, action) => {
        state.status.popular = 'failed';
        state.error = action.error.message ?? null;
        state.isLoading = false;
      })
      .addCase(fetchUpcomingGames.pending, (state) => {
        state.status.upcoming = 'loading';
        state.isLoading = true;
      })
      .addCase(fetchUpcomingGames.fulfilled, (state, action) => {
        state.status.upcoming = 'succeeded';
        state.upcomingGames = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUpcomingGames.rejected, (state, action) => {
        state.status.upcoming = 'failed';
        state.error = action.error.message ?? null;
        state.isLoading = false;
      })
      .addCase(fetchSearchedGames.pending, (state) => {
        state.status.searched = 'loading';
        state.isLoading = true;
      })
      .addCase(fetchSearchedGames.fulfilled, (state, action) => {
        state.status.searched = 'succeeded';
        state.searchedGames = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSearchedGames.rejected, (state, action) => {
        state.status.searched = 'failed';
        state.error = action.error.message ?? null;
        state.isLoading = false;
      })
      .addCase(fetchCategoryGames.pending, (state) => {
        state.status.new = 'loading';
        state.isLoading = true;
      })
      .addCase(fetchCategoryGames.fulfilled, (state, action) => {
        state.status.new = 'succeeded';
        state.newGames = action.payload.new;
        state.popularGames = action.payload.popular;
        state.upcomingGames = action.payload.upcoming;
        state.isLoading = false;
      })
      .addCase(fetchCategoryGames.rejected, (state, action) => {
        state.status.new = 'failed';
        state.error = action.error.message ?? null;
        state.isLoading = false;
      });
  },
});

export const fetchCategoryGames = createAsyncThunk(
  'games/fetchCategoryGames',
  async ({ pageSize }: { pageSize: number }) => {
    const popularGamesResponse = await axios.get(popular_games_url(pageSize));
    const newGamesResponse = await axios.get(new_games_url(pageSize));
    const upcomingGamesResponse = await axios.get(upcoming_games_url(pageSize));
    return {
      popular: popularGamesResponse.data.results,
      new: newGamesResponse.data.results,
      upcoming: upcomingGamesResponse.data.results,
    };
  }
);

export const fetchNewGames = createAsyncThunk(
  'games/fetchNewGames',
  async ({ pageSize }: { pageSize: number }) => {
    const response = await axios.get(new_games_url(pageSize));
    return response.data.results;
  }
);

export const fetchPopularGames = createAsyncThunk(
  'games/fetchPopularGames',
  async ({ pageSize }: { pageSize: number }) => {
    const response = await axios.get(popular_games_url(pageSize));
    return response.data.results;
  }
);

export const fetchUpcomingGames = createAsyncThunk(
  'games/fetchUpcomingGames',
  async ({ pageSize }: { pageSize: number }) => {
    const response = await axios.get(upcoming_games_url(pageSize));
    return response.data.results;
  }
);

export const fetchSearchedGames = createAsyncThunk(
  'games/searchedGames',
  async (name: string) => {
    const response = await axios.get(search_game_url(name));
    return response.data.results;
  }
);

export const { clearSearchedGames } = gamesSlice.actions;
export default gamesSlice.reducer;
