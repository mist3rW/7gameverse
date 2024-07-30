import H1 from './h1';
import img404 from '../assets/not-found.jpeg';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div className="absolute top-0 h-0 brightness-50">
        <img
          src={img404}
          alt="404"
          className="w-full h-screen object-cover object-right-bottom rounded-md"
        />
      </div>
      <div className="z-20 space-y-4 flex flex-col justify-center items-center">
        <H1>404 - Page not found</H1>
        <p className="text-center">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <button className="bg-accent font-bold px-4 py-2 rounded-md ">
          <Link to="/" className="flex items-center gap-2">
            <FaArrowLeft className="inline" />
            Go back to homepage
          </Link>
        </button>
      </div>
    </div>
  );
}
