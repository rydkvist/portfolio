'use client';

import { Icon, IconName } from '@/components/Icon';
import { isExternalLink } from '@/utils/helpers';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SideNavigationItem = ({ label, href, icon }: { label: string; href: string; icon: IconName }) => {
  const isExternal = isExternalLink(href);
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="my-1 transition-transform active:scale-97">
      <Link
        href={href}
        title={label}
        rel="noreferrer"
        target={isExternal ? '_blank' : '_self'}
        className={styles.linkWrapper({ isActive })}
      >
        <span className="mr-2 h-4 w-4">
          <Icon name={icon} />
        </span>

        {label}

        {isExternal && (
          <span className="ml-auto pl-2">
            <Icon name="externalLink" />
          </span>
        )}
      </Link>
    </li>
  );
};

const styles = {
  linkWrapper: cva(
    'flex w-full transition-colors items-center px-3 py-1.5 text-neutral-700 dark:text-neutral-300 rounded-lg cursor-pointer text-sm',
    {
      variants: {
        isActive: {
          true: 'bg-neutral-300 dark:bg-neutral-700',
          false: 'hocus:bg-neutral-300/50 hocus:dark:bg-neutral-700/50',
        },
      },
    },
  ),
};
