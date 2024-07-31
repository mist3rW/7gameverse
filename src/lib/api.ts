// Base URL
const RAWG_BASE_URL = 'https://api.rawg.io/api/';
const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const popular_games_url = (pageSize: number) =>
  `${RAWG_BASE_URL}games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=${pageSize}&key=${RAWG_API_KEY}`;

export const upcoming_games_url = (pageSize: number) =>
  `${RAWG_BASE_URL}games?dates=${currentDate},${nextYear}&ordering=-added&page_size=${pageSize}&key=${RAWG_API_KEY}`;

const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const upcomingGamesURL = () =>
  `${RAWG_BASE_URL}${upcoming_games}&key=${RAWG_API_KEY}`;

export const new_games_url = (pageSize: number) =>
  `${RAWG_BASE_URL}games?dates=${lastYear},${currentDate}&ordering=-released&page_size=${pageSize}&key=${RAWG_API_KEY}`;

export const game_detail_url = (game_id: number) =>
  `${RAWG_BASE_URL}games/${game_id}?key=${RAWG_API_KEY}`;

export const game_screenshot_url = (game_id: number) =>
  `${RAWG_BASE_URL}games/${game_id}/screenshots?key=${RAWG_API_KEY}`;

export const game_stores_url = (game_id: number) =>
  `${RAWG_BASE_URL}games/${game_id}/stores?key=${RAWG_API_KEY}`;

export const search_game_url = (game_name: string) =>
  `${RAWG_BASE_URL}games?search=${game_name}&page_size=50&key=${RAWG_API_KEY}`;

export const game_articles_url = () => {
  return `https://node7gameverse.tuayangweb.com/api/articles`;
};

export const game_single_article_url = (id: string) => {
  return `https://node7gameverse.tuayangweb.com/api/articles/${id}`;
};
