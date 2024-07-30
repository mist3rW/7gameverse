import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../lib/hook';
import { fetchSearchedGames } from '../state/gamesSlice';
import Loader from '../components/loader';
import GameCard from '../components/game/game-card';
import H1 from '../components/h1';
import SearchForm from '../components/search-form';

export default function SearchResultPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  const dispatch = useAppDispatch();

  const { searchedGames, isLoading } = useAppSelector((state) => state.games);

  useEffect(() => {
    if (!query) return;
    dispatch(fetchSearchedGames(query));
  }, [dispatch, query]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && searchedGames && searchedGames.length === 0 && (
        <div className="w-full h-screen flex py-10 items-center flex-col gap-2">
          <H1>
            No games found for <span className="text-accent">"{query}"</span>
          </H1>
          <p>
            Please try another search term or check the spelling of your search.
          </p>
          <SearchForm />
        </div>
      )}
      {!isLoading && searchedGames && searchedGames.length > 0 && (
        <div className="my-4 flex flex-col gap-4">
          <H1>
            Search results for <span className="text-accent">"{query}"</span>
          </H1>
          <div className="bg-gray-700 h-px w-full my-4" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {searchedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
