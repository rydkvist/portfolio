import { appLinks } from '@/lib/app-links';
import { common } from '@/lib/common';
import { currentYear } from '@/utils/helpers';
import Link from 'next/link';

export const BrandLink = () => (
  <Link
    className="flex flex-col flex-wrap uppercase text-lg md:text-base tracking-wide rounded-md font-medium px-2 break-words"
    href={appLinks.about.href}
  >
    {common.myself.fullName}
    <span className="block md:hidden text-sm text-neutral-600 dark:text-neutral-400">© {currentYear}</span>
  </Link>
);
