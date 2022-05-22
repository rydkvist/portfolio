import Link from 'next/link';
import { APP_HOME_URL } from '../../config';
import { SideNavigationItem } from './SideNavigationItem';
import { ThemeToggler } from './ThemeToggler';

export const sideNavigationAccessibilityClass =
  ' focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-600';

export const NavigationBrandLink = () => (
  <Link href={APP_HOME_URL} passHref>
    <a
      className={`flex flex-col flex-wrap uppercase tracking-wide rounded-md font-medium px-2 break-words ${sideNavigationAccessibilityClass}`}
    >
      Niklas Rydkvist
      <span className="block sm:hidden text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear().toString()}
      </span>
    </a>
  </Link>
);

export const SideNavigation = () => {
  return (
    <nav
      role="navigation"
      className={`flex flex-col justify-start px-4 pt-6 pb-2 w-72 overflow-scroll bg-neutral-200 text-black dark:bg-neutral-800 dark:text-white`}
    >
      <NavigationBrandLink />

      <ul className="mt-2 mb-4">
        <SideNavigationItem label="about-side" />
        <SideNavigationItem label="projects-side" isUnderMaintenance />
      </ul>

      <h3 className="px-2 text-sm text-neutral-500 font-medium dark:text-neutral-500 break-words">What I enjoy</h3>

      <ul className="mt-2 mb-4">
        <SideNavigationItem label="investments-side" isUnderMaintenance />
        <SideNavigationItem label="music-side" isUnderMaintenance />
      </ul>

      <h3 className="px-2 text-sm text-neutral-500 font-medium dark:text-neutral-500 break-words">Stay in touch</h3>

      <ul className="mt-2 mb-4">
        <SideNavigationItem label="contact-side" />
        <SideNavigationItem label="github-side" target="_blank" />
        <SideNavigationItem label="linkedin-side" target="_blank" />
        <SideNavigationItem label="twitter-side" target="_blank" />
      </ul>

      <div className="mt-auto flex items-end justify-between">
        <ThemeToggler />
        <p className="ml-2 text-sm text-neutral-600 dark:text-neutral-400">
          Niklas Rydkvist © {new Date().getFullYear().toString()}
        </p>
      </div>
    </nav>
  );
};
