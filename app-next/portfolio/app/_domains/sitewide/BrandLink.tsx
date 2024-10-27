import { common } from '@/_lib/labels/common';
import { currentYear } from '@/_utils/helpers';
import Link from 'next/link';

export const BrandLink = () => (
  <Link
    className="flex flex-col flex-wrap uppercase text-lg md:text-base tracking-wide rounded-md font-medium px-2 break-words"
    href={common.about.href}
    scroll
  >
    {common.myself.fullName}
    <span className="block md:hidden text-sm text-neutral-600 dark:text-neutral-400">© {currentYear}</span>
  </Link>
);