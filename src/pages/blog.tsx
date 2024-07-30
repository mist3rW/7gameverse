import { useAppDispatch, useAppSelector } from '../lib/hook';
import { useEffect } from 'react';
import { fetchArticles } from '../state/articlesSlice';
import Loader from '../components/loader';
import { GoPerson } from 'react-icons/go';
import { CiClock2 } from 'react-icons/ci';
import { formatDate } from '../lib/util';
import { Link } from 'react-router-dom';
import { TArticle } from '../lib/types';

export default function BlogPage() {
  const dispatch = useAppDispatch();

  const { articles, isLoading, error } = useAppSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && articles.length === 0 && <p>No articles found</p>}
      {!isLoading && articles.length > 0 && (
        <div className="md:px-10 px-4 py-12 font-[sans-serif]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-extrabold text-white mb-8">
              Latest Blog Posts from{' '}
              <Link
                to="https://www.gamespot.com/"
                target="_blank"
                className="text-accent underline"
              >
                GameSpot
              </Link>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article: TArticle) => (
                <div
                  className="bg-theme-light rounded-lg overflow-hidden shadow-lg"
                  key={article.id}
                >
                  <Link to={`/article/${article.id}`}>
                    <img
                      src={article.image.original}
                      alt="article featured image"
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-6  space-y-2">
                      <div className="flex gap-2 items-center text-sm text-gray-400">
                        <div className="flex gap-1 items-center">
                          <CiClock2 />
                          {formatDate(article.publish_date)}
                        </div>
                        <div className="flex gap-1 items-center">
                          <GoPerson />
                          {article.authors}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {article.title}
                      </h3>

                      <p className="text-white/50 text-sm">{article.lede}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
