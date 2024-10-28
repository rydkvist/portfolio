import { SideNavigationItem } from './SideNavigationItem';
import { BrandLink } from './BrandLink';
import { common } from '@/lib/common';
import { appLinks } from '@/lib/app-links';
import { ToggleTheme } from '@/components/ToggleTheme';
import { currentYear } from '@/utils/helpers';

const { myself } = common;
const { projects, investments, about, music, contact, github, linkedin } = appLinks;

export const SideNavigation = () => {
  return (
    <div className="hide-scrollbar flex w-64 flex-col justify-start overflow-scroll px-4 pb-2 pt-6 text-black dark:text-white">
      <header>
        <BrandLink />
      </header>

      <nav>
        <ul className="mb-4 mt-2">
          <SideNavigationItem label={about.name} href={about.href} icon="user" />
          <SideNavigationItem label={projects.name} href={projects.href} icon="code" />
        </ul>

        <p className="break-words px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">What I enjoy</p>

        <ul className="mb-4 mt-2">
          <SideNavigationItem label={investments.name} href={investments.href} icon="trendingUp" />
          <SideNavigationItem label={music.name} href={music.href} icon="music" />
        </ul>

        <p className="break-words px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">Stay in touch</p>

        <ul className="mb-4 mt-2">
          <SideNavigationItem label={contact.name} href={contact.href} icon="messageCircle" />
          <SideNavigationItem label={github.name} href={github.href} icon="github" />
          <SideNavigationItem label={linkedin.name} href={linkedin.href} icon="linkedin" />
        </ul>
      </nav>

      <footer className="mt-auto flex items-end justify-between">
        <ToggleTheme />
        <p className="ml-2 text-sm text-neutral-600 dark:text-neutral-400">
          {myself.fullName} © {currentYear}
        </p>
      </footer>
    </div>
  );
};
