import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSettings } from '../../context/SettingsProvider';
import {
  getNavigationTitle,
  navigationAccessibilityClass,
  NavigationIcon,
  NavigationIcons,
  NavigationLinks,
} from './NavigationIcons';

type TabNavigationItemProps = {
  label: NavigationIcon;
};

export const TabNavigationItem = ({ label }: TabNavigationItemProps) => {
  const router = useRouter();
  const { setIsContactModalOpen } = useSettings();

  const title = getNavigationTitle(label);
  const hrefNavigationLink = NavigationLinks[label];
  const isExternalLink = hrefNavigationLink.startsWith('http');

  const itemClass = `flex items-center justify-center p-3 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-lg cursor-pointer transition-colors ${
    router.asPath == hrefNavigationLink ? `bg-neutral-300 dark:bg-neutral-700` : ``
  } ${navigationAccessibilityClass}`;

  return (
    <li className="mx-1 active:scale-97 transition-transform">
      {label === 'contact-tab' ? (
        <button
          role="dialog"
          onClick={() => setIsContactModalOpen(true)}
          className={itemClass}
          title={title}
          aria-label={title}
        >
          <span>{NavigationIcons[label]}</span>
        </button>
      ) : (
        <Link legacyBehavior={true} passHref href={hrefNavigationLink} scroll>
          <a
            href={hrefNavigationLink}
            rel="noreferrer"
            target={isExternalLink ? '_blank' : '_self'}
            title={title}
            className={itemClass}
          >
            <span>{NavigationIcons[label]}</span>
          </a>
        </Link>
      )}
    </li>
  );
};
