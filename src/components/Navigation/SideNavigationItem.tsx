import Link from 'next/link';
import { useRouter } from 'next/router';
import { sideNavigationAccessibilityClass } from './SideNavigation';
import ExternalLinkIcon from '../../../public/images/feather/external-link.svg';
import { NavigationIcon, NavigationIcons, NavigationLinks } from './NavigationIcons';
import ToolIcon from '../../../public/images/feather/tool.svg';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

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

  const labelWithCapitalizedLetter = capitalizeFirstLetter(label);
  const hrefNavigationLink = NavigationLinks[label];

  return (
    <li className="my-1">
      <Link passHref href={hrefNavigationLink}>
        <a
          href={hrefNavigationLink}
          target={target}
          title={labelWithCapitalizedLetter}
          className={`flex items-center px-3 py-1.5 text-neutral-700 dark:text-neutral-300  hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-lg cursor-pointer text-sm transition ${
            router.asPath == hrefNavigationLink ? `bg-neutral-300 dark:bg-neutral-700` : ``
          } ${sideNavigationAccessibilityClass} ${isUnderMaintenance && `text-orange-400 dark:text-yellow-400`}`}
        >
          <span className="mr-2">{NavigationIcons[label]}</span>

          {labelWithCapitalizedLetter}

          <span className={`ml-auto pl-2`}>
            {isUnderMaintenance ? <ToolIcon /> : target === '_blank' ? <ExternalLinkIcon /> : rightIcon}
          </span>
        </a>
      </Link>
    </li>
  );
};
