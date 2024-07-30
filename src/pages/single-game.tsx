import { useAppDispatch, useAppSelector } from '../lib/hook';
import { useEffect, useState } from 'react';
import { fetchGameDetails } from '../state/detailsSlice';
import H1 from '../components/h1';
import { useParams } from 'react-router-dom';
import GamePlatforms from '../components/game/game-platforms';
import { getStoreName } from '../lib/game-store';
import { FaShoppingCart } from 'react-icons/fa';
import { formatDate } from '../lib/util';
import Loader from '../components/loader';
import StarRating from '../lib/star-rating';

export default function SingleGamePage() {
  const [isTruncated, setIsTruncated] = useState(true);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { game, screenshots, stores, isLoading } = useAppSelector(
    (state) => state.details
  );

  useEffect(() => {
    dispatch(fetchGameDetails(Number(id)));
    setIsTruncated(true);
  }, [dispatch, id]);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const truncateDescription = (desc: string) => {
    if (desc.length <= 150) return desc;
    return `${desc.slice(0, 150)}...`;
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && game && (
        <div className="w-full min-h-screen ">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side */}
            <div className="flex flex-col w-full md:w-1/2 relative md:sticky top-0 h-fit ">
              <div className="flex flex-col gap-2 text-gray-400">
                <H1 className="text-accent">{game.name}</H1>
                <div>
                  {game.rating > 0 && <StarRating rating={game.rating} />}
                </div>
                <p className="text-sm">
                  Release: {game.released ? formatDate(game.released) : 'N/A'}
                </p>
                <div className="flex gap-2 items-center">
                  <p>Available On: </p>
                  {game?.platforms.map((platform) => (
                    <GamePlatforms
                      key={platform.platform.id}
                      platforms={platform.platform.name}
                    />
                  ))}
                </div>
                <div className="bg-gray-700 h-px w-full my-4" />
                <h2 className="font-bold text-xl text-accent">Description: </h2>
                <p>
                  {isTruncated
                    ? truncateDescription(game.description_raw)
                    : game.description_raw}
                  {game.description_raw ? (
                    <span
                      className="text-accent cursor-pointer whitespace-nowrap"
                      onClick={toggleTruncate}
                    >
                      {isTruncated ? 'Read more' : 'Read less'}
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      No description available
                    </span>
                  )}
                </p>
                <div className="bg-gray-700 h-px w-full my-4" />

                <p>
                  Genres:{' '}
                  {game.genres
                    ? game.genres.map((genre) => genre.name).join(', ')
                    : 'N/A'}
                </p>
                <p>
                  Developed by:{' '}
                  {game.developers
                    ? game.developers.map((dev) => dev.name).join(', ')
                    : 'N/A'}
                </p>
                <p>
                  Published by:{' '}
                  {game.publishers
                    ? game.publishers.map((pub) => pub.name).join(', ')
                    : 'N/A'}
                </p>
                <div className="bg-gray-700 h-px w-full my-4" />
                <h2 className="text-xl text-accent font-semibold">
                  Where to buy this game?
                </h2>
                <div className="flex gap-4 py-4">
                  {stores.length === 0 && (
                    <p>
                      Currently, there is no data available for where to
                      purchase. Stay tuned!
                    </p>
                  )}
                  {stores.length > 0 &&
                    stores.map((store) => (
                      <button key={store.store_id}>
                        <a
                          href={store.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white font-semibold bg-theme-light px-4 py-2 rounded-md flex gap-2 items-center hover:border"
                        >
                          <FaShoppingCart />
                          {getStoreName(store.store_id)}
                        </a>
                      </button>
                    ))}
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className="flex flex-col w-full md:w-1/2">
              <div className="relative w-full">
                <div className="w-full h-full">
                  <img
                    src={game?.background_image}
                    alt="game featured image"
                    className="object-cover w-full"
                  />
                  {screenshots.map((screenshot) => (
                    <img
                      key={screenshot.id}
                      src={screenshot.image}
                      alt="game screenshots"
                      className="object-cover w-full"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
