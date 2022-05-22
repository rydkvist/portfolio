import { TabNavigationItem } from './TabNavigationItem';

export const TabNavigation = () => {
  return (
    <nav role="navigation" className="w-full max-h-64 bg-neutral-200 text-black dark:bg-neutral-800 dark:text-white">
      <ul className="inline-flex w-full mb-4 mx-2">
        <TabNavigationItem label="about-tab" />
        <TabNavigationItem label="projects-tab" isUnderMaintenance />
        <TabNavigationItem label="investments-tab" isUnderMaintenance />
        <TabNavigationItem label="music-tab" isUnderMaintenance />
        <TabNavigationItem label="contact-tab" />
        <TabNavigationItem label="github-tab" target="_blank" />
        <TabNavigationItem label="linkedin-tab" target="_blank" />
        <TabNavigationItem label="twitter-tab" target="_blank" />
      </ul>
    </nav>
  );
};
