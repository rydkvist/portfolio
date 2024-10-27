import { appLinks } from '@/lib/app-links';
import { common } from '@/lib/common';
import { currentYear } from '@/utils/helpers';
import Link from 'next/link';

export const BrandLink = () => (
  <Link
    className="flex flex-col flex-wrap break-words rounded-md px-2 text-lg font-medium uppercase tracking-wide md:text-base"
    href={appLinks.about.href}
  >
    {common.myself.fullName}
    <span className="block text-sm text-neutral-600 md:hidden dark:text-neutral-400">© {currentYear}</span>
  </Link>
);
