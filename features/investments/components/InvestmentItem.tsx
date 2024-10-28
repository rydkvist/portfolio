import { Icon } from '@/components/Icon';
import { Investment } from '../config';
import Image from 'next/image';

export const InvestmentItem = ({ name, url, imageSrc, investedSince }: Investment) => {
  const altText = `${name} logo`;
  const urlTitle = `Visit ${name} website`;

  return (
    <li className="flex w-full flex-row items-start pb-8 pr-2 text-black md:max-w-xs dark:text-white">
      <div className="mr-4">
        <div className="relative h-12 w-12 overflow-hidden">
          <Image src={imageSrc} alt={altText} width={48} height={48} />
        </div>
      </div>

      <div className="flex h-full flex-col">
        <p className="mb-1 leading-5 text-neutral-700 dark:text-neutral-300">
          <span className="text-ellipsis text-lg font-medium">{name}</span>
          <br />
          <span className="text-xs text-neutral-600 dark:text-neutral-400">invested since @ {investedSince}</span>
        </p>

        {url && (
          <div className="inline-flex">
            <a
              title={urlTitle}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex gap-2 rounded-lg border border-blue-500 px-5 py-2 text-xs text-blue-500 shadow-md transition-all hocus:bg-blue-500 hocus:text-white"
            >
              View graph <Icon name="externalLink" />
            </a>
          </div>
        )}
      </div>
    </li>
  );
};
