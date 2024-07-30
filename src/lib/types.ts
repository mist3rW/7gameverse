export type TGame = {
  id: number;
  rating: number;
  background_image: string;
  name: string;
  released: string;
  description_raw: string;
  genres: { id: number; name: string }[];
  platforms: { platform: { id: number; name: string } }[];
  developers: { name: string }[];
  publishers: { name: string }[];
};

export type detailState = {
  game: TGame | null;
  screenshots: { id: number; image: string }[];
  stores: { store_id: number; url: string }[];
  isLoading: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type gamesState = {
  newGames: TGame[];
  popularGames: TGame[];
  upcomingGames: TGame[];
  searchedGames: TGame[];
  status: {
    new: 'idle' | 'loading' | 'succeeded' | 'failed';
    popular: 'idle' | 'loading' | 'succeeded' | 'failed';
    upcoming: 'idle' | 'loading' | 'succeeded' | 'failed';
    searched: 'idle' | 'loading' | 'succeeded' | 'failed';
  };
  error: string | null;
  isLoading: boolean;
};
