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
    <main className="flex flex-col items-center py-10 px-3 h-full">
      <H1>
        <span className="text-accent italic">Find</span> your favourite games
      </H1>
      <p className=" my-4 text-lg lg:text-3xl opacity-75">
        Browse more than{' '}
        <span className="font-bold text-accent italic underline">
          871,031 games
        </span>
      </p>

      <div id="search" className="w-full flex justify-center">
        <SearchForm />
      </div>

      <section className="mt-4 flex flex-col justify-center items-center md:flex-row gap-y-2 gap-x-4 text-sm text-white/50">
        <span className="text-accent">Popular category:&nbsp;</span>
        <div className="flex flex-col gap-2 justify-center items-center md:flex-row font-semibold">
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

      <div className="flex mt-auto">
        source:&nbsp;
        <Link
          to="https://rawg.io/"
          target="_blank"
          className="text-accent font-bold"
        >
          rawg.io
        </Link>
      </div>
    </main>
  );
}
