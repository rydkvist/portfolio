import Link from 'next/link';
import { useRouter } from 'next/router';
import ExternalLinkIcon from '../../../public/images/feather/external-link.svg';
import {
  getNavigationTitle,
  navigationAccessibilityClass,
  NavigationIcon,
  NavigationIcons,
  NavigationLinks,
  underMaintenanceColorClass,
} from './NavigationIcons';
import ToolIcon from '../../../public/images/feather/tool.svg';
import { useSettings } from '../../context/SettingsProvider';

type SideNavigationItemProps = {
  label: NavigationIcon;
  target?: '_parent' | '_blank';
  rightIcon?: JSX.Element;
  isUnderMaintenance?: boolean;
};

export const SideNavigationItem = ({
  label,
  target = '_parent',
  rightIcon,
  isUnderMaintenance = false,
}: SideNavigationItemProps) => {
  const router = useRouter();
  const { setIsContactModalOpen } = useSettings();

  const title = getNavigationTitle(label);
  const hrefNavigationLink = NavigationLinks[label];

  const itemClass = `flex w-full items-center px-3 py-1.5 text-neutral-700 dark:text-neutral-300  hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-lg cursor-pointer text-sm transition ${
    router.asPath == hrefNavigationLink ? `bg-neutral-300 dark:bg-neutral-700` : ``
  } ${navigationAccessibilityClass} ${isUnderMaintenance && underMaintenanceColorClass}`;

  const innerContent = () => (
    <>
      <span className="mr-2">{NavigationIcons[label]}</span>

      {title}

      <span className={`ml-auto pl-2`}>
        {isUnderMaintenance ? <ToolIcon /> : target === '_blank' ? <ExternalLinkIcon /> : rightIcon}
      </span>
    </>
  );

  return (
    <li className="my-1">
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
        // TODO: Add functionality to scroll to top when changing screen
        <Link passHref href={hrefNavigationLink}>
          <a href={hrefNavigationLink} target={target} title={title} className={itemClass}>
            {innerContent()}
          </a>
        </Link>
      )}
    </li>
  );
};
