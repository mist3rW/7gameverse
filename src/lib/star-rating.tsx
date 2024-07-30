import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function StarRating({ rating }: { rating: number }) {
  const getStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return [
      ...Array(fullStars).fill('full'),
      ...(hasHalfStar ? ['half'] : []),
      ...Array(emptyStars).fill('empty'),
    ];
  };

  const stars = getStars(rating);

  return (
    <div className="flex items-center">
      {stars.map((star, index) => (
        <span key={index}>
          {star === 'full' && <FaStar className="text-yellow-400" />}
          {star === 'half' && <FaStarHalfAlt className="text-yellow-400" />}
          {star === 'empty' && <FaRegStar className="text-yellow-400" />}
        </span>
      ))}
      <span className="ml-2">{rating.toFixed(1)} stars</span>
    </div>
  );
}
