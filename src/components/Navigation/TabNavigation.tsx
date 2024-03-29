import { TabNavigationItem } from './TabNavigationItem';

export const TabNavigation = () => {
  return (
    <nav role="navigation" className="w-full max-h-32 bg-neutral-200 text-black dark:text-white dark:bg-neutral-800">
      <ul className="flex flex-row w-full p-2 pb-3 hide-scrollbar h-full overflow-x-scroll">
        <TabNavigationItem label="about-tab" />
        <TabNavigationItem label="projects-tab" />
        <TabNavigationItem label="investments-tab" />
        <TabNavigationItem label="music-tab" />
        <TabNavigationItem label="contact-tab" />
        <TabNavigationItem label="github-tab" />
        <TabNavigationItem label="linkedin-tab" />
      </ul>
    </nav>
  );
};
