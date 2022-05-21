import UserIcon from '../../../public/images/feather/user.svg';
import HomeIcon from '../../../public/images/feather/home.svg';
import MessageCircleIcon from '../../../public/images/feather/message-circle.svg';
import MusicIcon from '../../../public/images/feather/music.svg';
import TrendingUpIcon from '../../../public/images/feather/trending-up.svg';
import CodeIcon from '../../../public/images/feather/code.svg';
import TwitterIcon from '../../../public/images/feather/twitter.svg';
import GitHubIcon from '../../../public/images/feather/github.svg';
import LinkedInIcon from '../../../public/images/feather/linkedin.svg';
import {
  APP_ABOUT_URL,
  APP_CONTACT_URL,
  APP_HOME_URL,
  APP_INVESTMENTS_URL,
  APP_MUSIC_URL,
  APP_PROJECTS_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from '../../config';

export type NavigationIcon =
  | 'about'
  | 'projects'
  | 'investments'
  | 'music'
  | 'contact'
  | 'github'
  | 'linkedin'
  | 'twitter';

export const NavigationIcons: Record<NavigationIcon, JSX.Element> = {
  about: <UserIcon />,
  projects: <CodeIcon />,
  investments: <TrendingUpIcon />,
  music: <MusicIcon />,
  contact: <MessageCircleIcon />,
  github: <GitHubIcon />,
  twitter: <TwitterIcon />,
  linkedin: <LinkedInIcon />,
};

export const NavigationLinks: Record<NavigationIcon, string> = {
  about: APP_HOME_URL,
  projects: APP_PROJECTS_URL,
  investments: APP_INVESTMENTS_URL,
  music: APP_MUSIC_URL,
  contact: APP_CONTACT_URL,
  github: GITHUB_URL,
  linkedin: LINKEDIN_URL,
  twitter: TWITTER_URL,
};
