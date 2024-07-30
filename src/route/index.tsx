import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import GameCategoryPage from '../pages/game-category-page';
// import GameSinglePage from '../pages/game-single-page';
import Home from '../pages/home';
import Layout from './layout';
import CategoryPage from '../pages/category';
import SingleGamePage from '../pages/single-game';
import SingleCategoryPage from '../pages/single-category';
import SearchResultPage from '../pages/search-result';
import BlogPage from '../pages/blog';
import SingleArticlePage from '../pages/single-article';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'category',
        element: <CategoryPage />,
      },
      {
        path: 'category/:type',
        element: <SingleCategoryPage />,
      },
      {
        path: 'game/:id',
        element: <SingleGamePage />,
      },
      {
        path: 'search',
        element: <SearchResultPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'article/:id',
        element: <SingleArticlePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
