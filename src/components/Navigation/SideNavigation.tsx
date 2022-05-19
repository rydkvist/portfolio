import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  APP_ABOUT_URL,
  APP_CONTACT_URL,
  APP_HOME_URL,
  APP_INVESTMENTS_URL,
  APP_MUSIC_URL,
  APP_PROJECTS_URL,
  TWITTER_URL,
} from '../../config';
import { ThemeToggler } from './ThemeToggler';
import ExternalLinkIcon from '../../../public/images/external-link.svg';
import UserIcon from '../../../public/images/user.svg';
import HomeIcon from '../../../public/images/home.svg';
import MessageCircleIcon from '../../../public/images/message-circle.svg';
import MusicIcon from '../../../public/images/music.svg';
import DollarSignIcon from '../../../public/images/dollar-sign.svg';
import CodeIcon from '../../../public/images/code.svg';
import TwitterIcon from '../../../public/images/twitter.svg';

export const sideNavigationAccessibilityClass =
  ' focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-600';

export const SideNavigation = () => {
  return (
    <nav
      role="navigation"
      className={`flex flex-col justify-start px-4 pt-6 pb-2 w-72 overflow-scroll bg-neutral-200 text-black dark:bg-neutral-800 dark:text-white`}
    >
      <Link href={APP_HOME_URL} passHref>
        <a
          className={`uppercase tracking-wide rounded-md font-medium px-2 break-words ${sideNavigationAccessibilityClass}`}
        >
          Niklas Rydkvist
        </a>
      </Link>

      <ul className="mt-2 mb-4">
        <SideNavigationItem href={APP_HOME_URL} leftIcon={<HomeIcon />}>
          Recents
        </SideNavigationItem>
        <SideNavigationItem href={APP_ABOUT_URL} leftIcon={<UserIcon />}>
          About
        </SideNavigationItem>
        <SideNavigationItem href={APP_PROJECTS_URL} leftIcon={<CodeIcon />}>
          Projects
        </SideNavigationItem>
      </ul>

      <h3 className="px-2 text-sm text-neutral-500 font-medium dark:text-neutral-500 break-words">What I enjoy</h3>

      <ul className="mt-2 mb-4">
        <SideNavigationItem href={APP_INVESTMENTS_URL} leftIcon={<DollarSignIcon />}>
          Investments
        </SideNavigationItem>
        <SideNavigationItem href={APP_MUSIC_URL} leftIcon={<MusicIcon />}>
          Music
        </SideNavigationItem>
      </ul>

      <h3 className="px-2 text-sm text-neutral-500 font-medium dark:text-neutral-500 break-words">Stay in touch</h3>

      <ul className="mt-2 mb-4">
        <SideNavigationItem href={APP_CONTACT_URL} leftIcon={<MessageCircleIcon />}>
          Contact
        </SideNavigationItem>
        <SideNavigationItem
          href={TWITTER_URL}
          target="_blank"
          leftIcon={<TwitterIcon />}
          rightIcon={<ExternalLinkIcon />}
        >
          Twitter
        </SideNavigationItem>
      </ul>

      <div className="mt-auto flex items-end justify-between">
        <ThemeToggler />
        <p className="ml-2 text-sm text-neutral-700 dark:text-neutral-200">Niklas Rydkvist © 2022</p>
      </div>
    </nav>
  );
};

const SideNavigationItem = ({
  href,
  target = '_parent',
  leftIcon,
  rightIcon,
  children,
}: {
  href: string;
  target?: '_parent' | '_blank';
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  children: string;
}) => {
  const router = useRouter();

  return (
    <li className="my-1">
      <Link passHref href={href}>
        <a
          href={href}
          target={target}
          title={children}
          className={`flex items-center px-3 py-1.5 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-lg cursor-pointer text-sm transition ${
            router.asPath == href ? `bg-neutral-300 dark:bg-neutral-700` : ``
          } ${sideNavigationAccessibilityClass}`}
        >
          {leftIcon && <span className="mr-2">{leftIcon}</span>}

          {children}

          {rightIcon && <span className="ml-auto pl-2">{rightIcon}</span>}
        </a>
      </Link>
    </li>
  );
};
