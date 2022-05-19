import UserIcon from '../../../public/images/user.svg';
import HomeIcon from '../../../public/images/home.svg';
import MessageCircleIcon from '../../../public/images/message-circle.svg';
import MusicIcon from '../../../public/images/music.svg';
import TrendingUpIcon from '../../../public/images/trending-up.svg';
import CodeIcon from '../../../public/images/code.svg';
import TwitterIcon from '../../../public/images/twitter.svg';
import {
  APP_ABOUT_URL,
  APP_CONTACT_URL,
  APP_HOME_URL,
  APP_INVESTMENTS_URL,
  APP_MUSIC_URL,
  APP_PROJECTS_URL,
  TWITTER_URL,
} from '../../config';

export type NavigationIcon = 'about' | 'projects' | 'investments' | 'music' | 'contact' | 'twitter';

export const NavigationIcons: Record<NavigationIcon, JSX.Element> = {
  about: <UserIcon />,
  projects: <CodeIcon />,
  investments: <TrendingUpIcon />,
  music: <MusicIcon />,
  contact: <MessageCircleIcon />,
  twitter: <TwitterIcon />,
};

export const NavigationLinks: Record<NavigationIcon, string> = {
  about: APP_HOME_URL,
  projects: APP_PROJECTS_URL,
  investments: APP_INVESTMENTS_URL,
  music: APP_MUSIC_URL,
  contact: APP_CONTACT_URL,
  twitter: TWITTER_URL,
};
