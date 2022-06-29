import { NavigationBrandLink } from './NavigationIcons';
import { SideNavigationItem } from './SideNavigationItem';
import { ThemeToggler } from './ThemeToggler';

export const SideNavigation = () => {
  return (
    <nav
      role="navigation"
      className={`flex flex-col justify-start px-4 pt-6 pb-2 w-64 overflow-scroll text-black  dark:text-white`}
    >
      <NavigationBrandLink />

      <ul className="mt-2 mb-4">
        <SideNavigationItem label="about-side" />
        <SideNavigationItem label="projects-side" />
      </ul>

      <h3 className="px-2 text-sm text-neutral-600 font-medium dark:text-neutral-400 break-words">What I enjoy</h3>

      <ul className="mt-2 mb-4">
        <SideNavigationItem label="investments-side" />
        <SideNavigationItem label="music-side" />
      </ul>

      <h3 className="px-2 text-sm text-neutral-600 font-medium dark:text-neutral-400 break-words">Stay in touch</h3>

      <ul className="mt-2 mb-4">
        <SideNavigationItem label="contact-side" />
        <SideNavigationItem label="github-side" />
        <SideNavigationItem label="linkedin-side" />
        <SideNavigationItem label="twitter-side" />
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
