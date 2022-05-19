import { TabNavigationItem } from './TabNavigationItem';
import { ThemeToggler } from './ThemeToggler';

export const TabNavigation = () => {
  return (
    <nav
      role="navigation"
      className="w-full max-h-64 px-2 pt-1 pb-2 bg-neutral-200 text-black dark:bg-neutral-800 dark:text-white"
    >
      <ul className="inline-flex w-full">
        <TabNavigationItem label="about" />
        <TabNavigationItem label="projects" isUnderMaintenance />
        <TabNavigationItem label="investments" isUnderMaintenance />
        <TabNavigationItem label="music" isUnderMaintenance />
        <TabNavigationItem label="contact" />
        <TabNavigationItem label="twitter" target="_blank" />

        <div className="ml-auto pr-2">
          <ThemeToggler />
        </div>
      </ul>
    </nav>
  );
};
