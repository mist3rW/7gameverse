import LogoImg from '/logo.webp';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={LogoImg} alt="logo" />
      </Link>
    </div>
  );
}
