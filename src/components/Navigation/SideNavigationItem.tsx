import Link from 'next/link';
import { useRouter } from 'next/router';
import ExternalLinkIcon from '../../../public/images/feather/external-link.svg';
import {
  getNavigationTitle,
  navigationAccessibilityClass,
  NavigationIcon,
  NavigationIcons,
  NavigationLinks,
} from './NavigationIcons';
import { useSettings } from '../../context/SettingsProvider';

type SideNavigationItemProps = {
  label: NavigationIcon;
  target?: '_parent' | '_blank';
  rightIcon?: JSX.Element;
};

export const SideNavigationItem = ({ label, rightIcon }: SideNavigationItemProps) => {
  const router = useRouter();
  const { setIsContactModalOpen } = useSettings();

  const title = getNavigationTitle(label);
  const hrefNavigationLink = NavigationLinks[label];
  const isExternalLink = hrefNavigationLink.startsWith('http');

  const backgroundColorEffectClass =
    router.asPath == hrefNavigationLink
      ? `bg-neutral-300 dark:bg-neutral-700`
      : `hover:bg-neutral-300/50 hover:dark:bg-neutral-700/50`;

  const itemClass = `flex w-full transition-colors items-center px-3 py-1.5 text-neutral-700 dark:text-neutral-300  rounded-lg cursor-pointer text-sm ${backgroundColorEffectClass} ${navigationAccessibilityClass}`;

  const innerContent = () => (
    <>
      <span className="mr-2">{NavigationIcons[label]}</span>

      {title}

      <span className={`ml-auto pl-2`}>{isExternalLink ? <ExternalLinkIcon /> : rightIcon}</span>
    </>
  );

  return (
    <li className="my-1 active:scale-97 transition-transform">
      {label === 'contact-side' ? (
        <button
          role="dialog"
          aria-label={title}
          onClick={() => setIsContactModalOpen(true)}
          className={itemClass}
          title={title}
        >
          {innerContent()}
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
            {innerContent()}
          </a>
        </Link>
      )}
    </li>
  );
};
