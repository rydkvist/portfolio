import { common } from '@/_lib/labels/common';
import { TabNavigationItem } from './TabNavigationItem';

const { about, contact, projects, investments, github, music, linkedin } = common;

export const TabNavigation = () => (
  <nav className="w-full max-h-32 bg-neutral-200 text-black dark:text-white dark:bg-neutral-800">
    <ul className="flex flex-row w-full p-2 pb-3 hide-scrollbar h-full overflow-x-scroll">
      <TabNavigationItem label={about.name} href={about.href} icon={about.tabIcon} />
      <TabNavigationItem label={projects.name} href={projects.href} icon={projects.tabIcon} />
      <TabNavigationItem label={investments.name} href={investments.href} icon={investments.tabIcon} />
      <TabNavigationItem label={music.name} href={music.href} icon={music.tabIcon} />
      <TabNavigationItem label={contact.name} href={contact.href} icon={contact.tabIcon} />
      <TabNavigationItem label={github.name} href={github.href} icon={github.tabIcon} />
      <TabNavigationItem label={linkedin.name} href={linkedin.href} icon={linkedin.tabIcon} />
    </ul>
  </nav>
);
