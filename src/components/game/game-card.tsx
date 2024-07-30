import { BiStar } from 'react-icons/bi';
import { TGame } from '../../lib/types';
import { Link } from 'react-router-dom';

type GameCardProps = {
  game: TGame;
};

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="rounded-lg cursor-pointer overflow-hidden p-2 lg:p-4 relative transition transform hover:scale-105 hover:border-2 hover:border-gray-800 bg-theme-light">
      <Link to={`/game/${game.id}`}>
        <div className="relative w-full h-[360px] lg:h-96 overflow-hidden">
          <img
            src={game.background_image}
            alt={game.name}
            className="object-cover w-full h-full"
          />
          {game.rating > 0 && (
            <div className="flex absolute top-0 right-0  p-2 rounded-l-lg">
              <div className="flex items-center gap-1 bg-black/50 px-2 rounded-full">
                <BiStar className="text-yellow-400" />
                <p className="text-sm">{game.rating.toFixed(1)}</p>
              </div>
            </div>
          )}
          <div className="absolute bottom-0 p-2 bg-black/30 w-full flex flex-col items-center justify-center">
            <p className="lg:text-lg font-medium text-white h-[2.5rem]">
              {game.name.length > 25
                ? game.name.slice(0, 25) + '...'
                : game.name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
