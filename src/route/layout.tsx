import { Outlet } from 'react-router-dom';
import Header from '../components/nav/header';
import StoreProvider from '../lib/store-provider';

export default function Layout() {
  return (
    <div className="grid grid-cols-1 grid-rows-[60px_1fr] lg:grid-cols-[60px_1fr] lg:grid-rows-[60px_1fr_60px] min-h-screen bg-theme-dark gap-5 p-5 text-text-primary">
      <Header />
      <main className="bg-theme-medium p-4 rounded-md h-full lg:col-start-2 lg:-col-end-1 lg:row-start-1 lg:-row-end-1 relative">
        <StoreProvider>
          <Outlet />
        </StoreProvider>
      </main>
    </div>
  );
}
