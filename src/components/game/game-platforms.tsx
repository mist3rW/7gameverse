import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import {
  SiPlaystation4,
  SiPlaystation5,
  SiXbox,
  SiSteam,
  SiAndroid,
  SiLinux,
  SiApple,
  SiNintendoswitch,
  SiIos,
} from 'react-icons/si';
import { FaGamepad } from 'react-icons/fa';

type Platform =
  | 'PlayStation 4'
  | 'PlayStation 5'
  | 'Xbox One'
  | 'Xbox Series S/X'
  | 'PC'
  | 'Android'
  | 'Linux'
  | 'MacOS'
  | 'Nintendo Switch'
  | 'iOS';

type GamePlatformsProps = {
  platforms: Platform | string;
};

export default function GamePlatforms({ platforms }: GamePlatformsProps) {
  switch (platforms) {
    case 'PlayStation 4':
      return (
        <Tooltip placement="top" overlay="PlayStation 4">
          <span>
            <SiPlaystation4 size={32} />
          </span>
        </Tooltip>
      );
    case 'PlayStation 5':
      return (
        <Tooltip placement="top" overlay="PlayStation 5">
          <span>
            <SiPlaystation5 size={32} />
          </span>
        </Tooltip>
      );
    case 'Xbox One':
      return (
        <Tooltip placement="top" overlay="Xbox One">
          <span>
            <SiXbox size={32} />
          </span>
        </Tooltip>
      );
    case 'Xbox Series S/X':
      return (
        <Tooltip placement="top" overlay="Xbox Series S/X">
          <span>
            <SiXbox size={32} />
          </span>
        </Tooltip>
      );
    case 'PC':
      return (
        <Tooltip placement="top" overlay="PC">
          <span>
            <SiSteam size={32} />
          </span>
        </Tooltip>
      );
    case 'Android':
      return (
        <Tooltip placement="top" overlay="Android">
          <span>
            <SiAndroid size={32} />
          </span>
        </Tooltip>
      );
    case 'Linux':
      return (
        <Tooltip placement="top" overlay="Linux">
          <span>
            <SiLinux size={32} />
          </span>
        </Tooltip>
      );
    case 'MacOS':
      return (
        <Tooltip placement="top" overlay="MacOS">
          <span>
            <SiApple size={32} />
          </span>
        </Tooltip>
      );
    case 'Nintendo Switch':
      return (
        <Tooltip placement="top" overlay="Nintendo Switch">
          <span>
            <SiNintendoswitch size={32} />
          </span>
        </Tooltip>
      );
    case 'iOS':
      return (
        <Tooltip placement="top" overlay="iOS">
          <span>
            <SiIos size={32} />
          </span>
        </Tooltip>
      );
    default:
      return (
        <Tooltip placement="top" overlay="Unknown Platform">
          <span>
            <FaGamepad size={32} />
          </span>
        </Tooltip>
      );
  }
}
