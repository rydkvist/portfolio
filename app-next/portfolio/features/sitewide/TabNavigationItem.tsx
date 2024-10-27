'use client';

import { Icon, IconName } from '@/components/Icon';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TabNavigationItem = ({ href, icon, label }: { label: string; href: string; icon: IconName }) => {
  const isExternal = href.startsWith('http');
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="flex-1 transition-transform active:scale-97">
      <Link
        className={styles.linkWrapper({ isActive })}
        target={isExternal ? '_blank' : '_self'}
        title={label}
        rel="noreferrer"
        href={href}
      >
        <span className="h-5 w-5">
          <Icon name={icon} height={20} width={20} />
        </span>
      </Link>
    </li>
  );
};

const styles = {
  linkWrapper: cva(
    'flex items-center justify-center p-3 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-lg cursor-pointer transition-colors focus:bg-neutral-300 focus:dark:bg-neutral-700',
    {
      variants: {
        isActive: {
          true: 'bg-neutral-300 dark:bg-neutral-700',
          false: '',
        },
      },
    },
  ),
};
