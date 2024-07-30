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

export type TArticle = {
  id: number;
  title: string;
  body: string;
  authors: string;
  deck: string;
  lede: string;
  image: {
    square_tiny: string;
    screen_tiny: string;
    square_small: string;
    original: string;
  };
  publish_date: string;
  site_detail_url: string;
  update_date: string;
  associations: object[];
  categories: object[];
};

export type articlesState = {
  articles: TArticle[];
  isLoading: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

export type singleArticleState = {
  article: TArticle | null;
  isLoading: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};
