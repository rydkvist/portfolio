import { TabNavigationItem } from './TabNavigationItem';

export const TabNavigation = () => {
  return (
    <nav role="navigation" className="w-full max-h-32 bg-neutral-200 text-black dark:text-white dark:bg-neutral-800">
      <ul className="flex flex-row w-full p-2 pb-3 h-full overflow-x-scroll">
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
