import { CiClock2 } from 'react-icons/ci';
import H1 from '../components/h1';
import { GoPerson } from 'react-icons/go';
import { useAppDispatch, useAppSelector } from '../lib/hook';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchSingleArticle } from '../state/singleArticleSlice';
import Loader from '../components/loader';
import { formatDate } from '../lib/util';

export default function SingleArticlePage() {
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  const dispatch = useAppDispatch();

  const { article, isLoading, error } = useAppSelector(
    (state) => state.article
  );

  useEffect(() => {
    dispatch(fetchSingleArticle(pathId));
  }, [dispatch, pathId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && article && (
        <div className="relative overflow-hidden max-w-screen-xl mx-auto">
          <section className="relative flex flex-col justify-center items-center overflow-hidden py-4 rounded-lg">
            <img
              src={article.image.original}
              alt="article featured image"
              className="object-cover w-full h-[300px] md:h-[500px] blur-2xl z-0 absolute top-0 left-0 "
            />
            <div className="z-10 flex flex-col gap-6 relative justify-center items-center">
              <div className="flex w-[70%] justify-center items-center py-4">
                <img
                  src={article.image.original}
                  alt="article featured image"
                  className="rounded-xl border-2 border-white/20 object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center text-center px-4 md:px-0">
                <H1 className="text-accent mb-2 mt-1 ">{article.title}</H1>
                <div className="flex gap-2 items-center text-gray-400 justify-center">
                  <div className="flex gap-1 items-center">
                    <CiClock2 /> {formatDate(article.publish_date)}
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoPerson />
                    {article.authors}
                  </div>
                </div>

                <div
                  dangerouslySetInnerHTML={{ __html: article.body }}
                  className="p-2 md:p-6 relative text-left"
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
