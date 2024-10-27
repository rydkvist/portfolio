import { common } from '@/_lib/labels/common';
import { SideNavigationItem } from './SideNavigationItem';
import { BrandLink } from './BrandLink';
import { currentYear } from '@/_utils/helpers';
import { ToggleTheme } from '../../_components/ToggleTheme';

export const SideNavigation = () => {
  const { projects, myself, investments, about, music, contact, github, linkedin } = common;

  return (
    <div className="flex flex-col justify-start px-4 pt-6 pb-2 w-64 hide-scrollbar overflow-scroll text-black dark:text-white">
      <header>
        <BrandLink />
      </header>

      <nav>
        <ul className="mt-2 mb-4">
          <SideNavigationItem label={about.name} href={about.href} />
        </ul>

        <h3 className="px-2 text-sm text-neutral-600 font-medium dark:text-neutral-400 break-words">What I enjoy</h3>

        <ul className="mt-2 mb-4">
          <SideNavigationItem label={projects.name} href={projects.href} />
          <SideNavigationItem label={investments.name} href={investments.href} />
          <SideNavigationItem label={music.name} href={music.href} />
        </ul>

        <h3 className="px-2 text-sm text-neutral-600 font-medium dark:text-neutral-400 break-words">Stay in touch</h3>

        <ul className="mt-2 mb-4">
          <SideNavigationItem label={contact.name} href={contact.href} />
          <SideNavigationItem label={github.name} href={github.href} />
          <SideNavigationItem label={linkedin.name} href={linkedin.href} />
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
