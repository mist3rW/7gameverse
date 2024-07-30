import { Link } from 'react-router-dom';
import H1 from '../components/h1';
import SearchForm from '../components/search-form';
import { useAppDispatch } from '../lib/hook';
import { useEffect } from 'react';
import { clearSearchedGames } from '../state/gamesSlice';

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearSearchedGames());
  }, [dispatch]);
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Find your favourite games</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{' '}
        <span className="font-bold text-accent italic underline">
          869,858 games
        </span>{' '}
      </p>

      <div id="search" className="w-full flex justify-center">
        <SearchForm />
      </div>

      <section className="mt-4 flex flex-col justify-center items-center md:flex-row gap-y-2 gap-x-4 text-sm text-white/50">
        <span>Popular category:&nbsp;</span>
        <div className="space-x-2 font-semibold">
          <Link
            to="/category/new"
            className="hover:text-accent hover:underline"
          >
            New games
          </Link>
          <Link
            to="/category/popular"
            className="hover:text-accent hover:underline"
          >
            Popular games
          </Link>
          <Link
            to="/category/upcoming"
            className="hover:text-accent hover:underline"
          >
            Upcoming releases
          </Link>
        </div>
      </section>
    </main>
  );
}
