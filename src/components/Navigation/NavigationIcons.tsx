import UserIcon16x16 from '../../../public/images/feather/user16x16.svg';
import UserIcon20x20 from '../../../public/images/feather/user20x20.svg';
import MessageCircleIcon16x16 from '../../../public/images/feather/message-circle16x16.svg';
import MessageCircleIcon20x20 from '../../../public/images/feather/message-circle20x20.svg';
import MusicIcon16x16 from '../../../public/images/feather/music16x16.svg';
import MusicIcon20x20 from '../../../public/images/feather/music20x20.svg';
import TrendingUpIcon16x16 from '../../../public/images/feather/trending-up16x16.svg';
import TrendingUpIcon20x20 from '../../../public/images/feather/trending-up20x20.svg';
import CodeIcon16x16 from '../../../public/images/feather/code16x16.svg';
import CodeIcon20x20 from '../../../public/images/feather/code20x20.svg';
import GitHubIcon16x16 from '../../../public/images/feather/github16x16.svg';
import GitHubIcon20x20 from '../../../public/images/feather/github20x20.svg';
import LinkedInIcon16x16 from '../../../public/images/feather/linkedin16x16.svg';
import LinkedInIcon20x20 from '../../../public/images/feather/linkedin20x20.svg';
import {
  APP_ABOUT_URL,
  APP_HOME_URL,
  APP_INVESTMENTS_URL,
  APP_MUSIC_URL,
  APP_PROJECTS_URL,
  GITHUB_URL,
  LINKEDIN_URL,
} from '../../config';
import Link from 'next/link';

export type NavigationIcon =
  | 'about-side'
  | 'about-tab'
  | 'projects-side'
  | 'projects-tab'
  | 'investments-side'
  | 'investments-tab'
  | 'music-side'
  | 'music-tab'
  | 'contact-side'
  | 'contact-tab'
  | 'github-side'
  | 'github-tab'
  | 'linkedin-side'
  | 'linkedin-tab';

export const NavigationIcons: Record<NavigationIcon, JSX.Element> = {
  'about-side': <UserIcon16x16 />,
  'about-tab': <UserIcon20x20 />,
  'projects-side': <CodeIcon16x16 />,
  'projects-tab': <CodeIcon20x20 />,
  'investments-side': <TrendingUpIcon16x16 />,
  'investments-tab': <TrendingUpIcon20x20 />,
  'music-side': <MusicIcon16x16 />,
  'music-tab': <MusicIcon20x20 />,
  'contact-side': <MessageCircleIcon16x16 />,
  'contact-tab': <MessageCircleIcon20x20 />,
  'github-side': <GitHubIcon16x16 />,
  'github-tab': <GitHubIcon20x20 />,
  'linkedin-side': <LinkedInIcon16x16 />,
  'linkedin-tab': <LinkedInIcon20x20 />,
};

export const NavigationLinks: Record<NavigationIcon, string> = {
  'about-side': APP_HOME_URL,
  'about-tab': APP_HOME_URL,
  'projects-side': APP_PROJECTS_URL,
  'projects-tab': APP_PROJECTS_URL,
  'investments-side': APP_INVESTMENTS_URL,
  'investments-tab': APP_INVESTMENTS_URL,
  'music-side': APP_MUSIC_URL,
  'music-tab': APP_MUSIC_URL,
  'contact-side': '',
  'contact-tab': '',
  'github-side': GITHUB_URL,
  'github-tab': GITHUB_URL,
  'linkedin-side': LINKEDIN_URL,
  'linkedin-tab': LINKEDIN_URL,
};

export const getNavigationTitle = (navigationIcon: NavigationIcon): string => {
  switch (navigationIcon) {
    case 'about-side' || 'about-tab':
      return 'About';
    case 'projects-side' || 'projects-tab':
      return 'Projects';
    case 'investments-side' || 'investments-tab':
      return 'Investments';
    case 'music-side' || 'music-tab':
      return 'Music';
    case 'contact-side' || 'contact-tab':
      return 'Contact';
    case 'github-side' || 'github-tab':
      return 'GitHub';
    case 'linkedin-side' || 'linkedin-tab':
      return 'LinkedIn';
  }
};

export const navigationAccessibilityClass = ''; //' focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-600';

export const NavigationBrandLink = () => (
  <Link href={APP_HOME_URL} passHref scroll>
    <a
      className={`flex flex-col flex-wrap uppercase text-lg md:text-base tracking-wide rounded-md font-medium px-2 break-words ${navigationAccessibilityClass}`}
    >
      Niklas Rydkvist
      <span className="block md:hidden text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear().toString()}
      </span>
    </a>
  </Link>
);
