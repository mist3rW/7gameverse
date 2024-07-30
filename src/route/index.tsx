import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import GameCategoryPage from '../pages/game-category-page';
// import GameSinglePage from '../pages/game-single-page';
import Home from '../pages/home';
import Layout from './layout';
import CategoryPage from '../pages/category';
import SingleGamePage from '../pages/single-game';
import SingleCategoryPage from '../pages/single-category';
import SearchResultPage from '../pages/search-result';

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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
