import Link from 'next/link';
import { useRouter } from 'next/router';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { NavigationIcon, NavigationIcons, NavigationLinks } from './NavigationIcons';
import { sideNavigationAccessibilityClass } from './SideNavigation';

type TabNavigationItemProps = {
  label: NavigationIcon;
  target?: '_parent' | '_blank';
  isUnderMaintenance?: boolean;
};

export const TabNavigationItem = ({ label, target, isUnderMaintenance = false }: TabNavigationItemProps) => {
  const router = useRouter();

  const labelWithCapitalizedLetter = capitalizeFirstLetter(label);
  const hrefNavigationLink = NavigationLinks[label];

  return (
    <li className="mx-1">
      <Link passHref href={hrefNavigationLink}>
        <a
          href={hrefNavigationLink}
          target={target}
          title={labelWithCapitalizedLetter}
          className={`flex items-center justify-center px-3 py-3 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-lg cursor-pointer transition ${
            router.asPath == hrefNavigationLink ? `bg-neutral-300 dark:bg-neutral-700` : ``
          } ${sideNavigationAccessibilityClass} ${isUnderMaintenance && `text-orange-400 dark:text-yellow-400`}`}
        >
          <span>{NavigationIcons[label]}</span>
        </a>
      </Link>
    </li>
  );
};
