import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../lib/hook';
import { Link, useParams } from 'react-router-dom';
import {
  fetchNewGames,
  fetchPopularGames,
  fetchUpcomingGames,
} from '../state/gamesSlice';
import Loader from '../components/loader';
import GameCard from '../components/game/game-card';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import H1 from '../components/h1';
import { cn } from '../lib/util';
import NotFound from '../components/not-found';

export default function SingleCategoryPage() {
  const { type } = useParams();
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const validTypes = ['new', 'popular', 'upcoming'];

  const handleChangePage = (direction: 'next' | 'previous') => {
    if (direction === 'next') {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const isLoading = useAppSelector((state) => state.games.isLoading);

  const games = useAppSelector((state) => {
    switch (type) {
      case 'new':
        return state.games.newGames;
      case 'popular':
        return state.games.popularGames;
      case 'upcoming':
        return state.games.upcomingGames;
      default:
        return [];
    }
  });

  const totalNumberOfGames = games.length || 0;
  const gamesPerPage = 12;
  const totalPages = Math.ceil(totalNumberOfGames / gamesPerPage);

  const gamesToDisplay = games.slice(
    currentPage * gamesPerPage - gamesPerPage,
    currentPage * gamesPerPage
  );

  useEffect(() => {
    switch (type) {
      case 'new':
        dispatch(fetchNewGames({ pageSize: 40 }));
        break;
      case 'popular':
        dispatch(fetchPopularGames({ pageSize: 40 }));
        break;
      case 'upcoming':
        dispatch(fetchUpcomingGames({ pageSize: 20 }));
        break;
      default:
        break;
    }
  }, [dispatch, type]);

  if (!type || !validTypes.includes(type)) {
    return <NotFound />;
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col">
          <div className="">
            <div className="flex">
              <Link to="/" className="text-[#999]">
                Home
              </Link>
              <span>&nbsp;/&nbsp;</span>
              <Link to="/category" className="text-[#999]">
                Category
              </Link>
              <span>&nbsp;/&nbsp;</span>
              <p className="text-accent">
                {type.charAt(0).toUpperCase() + type.slice(1)} Game
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-2 my-8">
            <H1>{type.charAt(0).toUpperCase() + type.slice(1)} Game</H1>
            <p>Details about the {type} game will be displayed here.</p>
          </div>
          <div className="my-auto grid max-w-8xl grid-cols-2 gap-5 p-4 md:grid-cols-3 lg:grid-cols-4 ">
            {gamesToDisplay.length > 0 &&
              gamesToDisplay.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
          </div>
          <div className="w-full flex justify-between items-center space-x-4 mt-4">
            <div className="flex-1 flex justify-start">
              {currentPage > 1 && (
                <PaginationButton
                  direction="previous"
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onClick={() => handleChangePage('previous')}
                />
              )}
            </div>
            <span>
              Page <b>{currentPage}</b> of {totalPages}
            </span>
            <div className="flex-1 flex justify-end">
              {currentPage < totalPages && (
                <PaginationButton
                  direction="next"
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onClick={() => handleChangePage('next')}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type PaginationButtonProps = {
  direction: 'previous' | 'next';
  currentPage: number;
  onClick: () => void;
  totalPages: number;
};

function PaginationButton({
  direction,
  currentPage,
  onClick,
  totalPages,
}: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center space-x-2 p-2 bg-theme-light hover:bg-theme-medium hover:border rounded-lg',
        direction === 'previous' && currentPage <= 1 && 'invisible',
        direction === 'next' && currentPage >= totalPages && 'invisible'
      )}
    >
      {direction === 'previous' && (
        <div className="flex gap-2 items-center">
          <FaArrowLeft size={16} />
          Page {currentPage - 1}
        </div>
      )}
      {direction === 'next' && (
        <div className="flex gap-2 items-center">
          Page {currentPage + 1}
          <FaArrowRight size={16} />
        </div>
      )}
    </button>
  );
}
