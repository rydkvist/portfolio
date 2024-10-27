'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type TabNavigationItemProps = {
  label: string;
  href: string;
  icon: string;
};

export const TabNavigationItem = ({ href, icon, label }: TabNavigationItemProps) => {
  const isExternal = href.startsWith('http');
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="mx-1 active:scale-97 transition-transform">
      <Link
        className={styles.linkWrapper({ isActive })}
        target={isExternal ? '_blank' : '_self'}
        title={label}
        rel="noreferrer"
        href={href}
      >
        <span className="w-5 h-5">{icon}</span>
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
    }
  ),
};
