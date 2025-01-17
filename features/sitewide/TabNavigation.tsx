import { appLinks } from '@/lib/app-links';
import { TabNavigationItem } from './TabNavigationItem';

const { about, contact, projects, investments, github, music, linkedin } = appLinks;

export const TabNavigation = () => (
  <nav className="max-h-32 w-full bg-neutral-200 text-black dark:bg-neutral-800 dark:text-white">
    <ul className="hide-scrollbar flex h-full w-full flex-row gap-0.5 overflow-x-scroll p-2 pb-3">
      <TabNavigationItem label={about.name} href={about.href} icon="user" />
      <TabNavigationItem label={projects.name} href={projects.href} icon="code" />
      <TabNavigationItem label={investments.name} href={investments.href} icon="trendingUp" />
      <TabNavigationItem label={music.name} href={music.href} icon="music" />
      <TabNavigationItem label={contact.name} href={contact.href} icon="messageCircle" />
      <TabNavigationItem label={github.name} href={github.href} icon="github" />
      <TabNavigationItem label={linkedin.name} href={linkedin.href} icon="linkedin" />
    </ul>
  </nav>
);
