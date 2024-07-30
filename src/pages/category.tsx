import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../lib/hook';
import { useEffect } from 'react';
import { fetchCategoryGames } from '../state/gamesSlice';
import { TGame } from '../lib/types';
import GameCard from '../components/game/game-card';
import { MdArrowRightAlt } from 'react-icons/md';
import Loader from '../components/loader';

export default function CategoryPage() {
  const path = useLocation().pathname;
  console.log(path);
  const dispatch = useAppDispatch();
  const { popularGames, newGames, upcomingGames, isLoading } = useAppSelector(
    (state) => state.games
  );

  useEffect(() => {
    dispatch(fetchCategoryGames({ pageSize: 8 }));
  }, [dispatch]);

  if (!popularGames || !newGames || !upcomingGames) return <Loader />;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <div>
            <GameCategorySection
              title="New games"
              games={newGames}
              link="/category/new"
            />
            <GameCategorySection
              title="Popular games"
              games={popularGames}
              link="/category/popular"
            />
            <GameCategorySection
              title="Upcoming releases"
              games={upcomingGames}
              link="/category/upcoming"
            />
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
}

type GameCategorySectionProps = {
  title: string;
  games: TGame[];
  link: string;
};

function GameCategorySection({ title, games, link }: GameCategorySectionProps) {
  return (
    <div>
      <div className="flex justify-between p-4 items-center">
        <h2 className="font-bold text-[3vw]">{title}</h2>
        <Link
          to={link}
          className="flex leading-4 gap-1 underline text-accent cursor-pointer"
        >
          browse more
          <MdArrowRightAlt />
        </Link>
      </div>
      <div className="bg-gray-700 h-px w-full my-4" />
      <div className="my-auto grid max-w-8xl grid-cols-2 gap-5 p-4 md:grid-cols-3 lg:grid-cols-4 ">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
}
