'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SideNavigationItem = ({ label, href, icon }: { label: string; href: string; icon?: string }) => {
  const isExternal = href.startsWith('http');
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="my-1 active:scale-97 transition-transform">
      <Link
        href={href}
        title={label}
        rel="noreferrer"
        target={isExternal ? '_blank' : '_self'}
        className={styles.linkWrapper({ isActive })}
      >
        <span className="mr-2 w-4 h-4">{icon}</span>
        {label}
        <span className="ml-auto pl-2">{isExternal ? 'external' : icon}</span>
      </Link>
    </li>
  );
};

const styles = {
  linkWrapper: cva(
    'flex w-full transition-colors items-center px-3 py-1.5 text-neutral-700 dark:text-neutral-300  rounded-lg cursor-pointer text-sm',
    {
      variants: {
        isActive: {
          true: 'bg-neutral-300 dark:bg-neutral-700',
          false: 'hover:bg-neutral-300/50 hover:dark:bg-neutral-700/50',
        },
      },
    }
  ),
};
