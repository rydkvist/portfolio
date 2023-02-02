import Link from 'next/link';
import Image from 'next/image';
import { InvestmentType } from '../config';

const imageWrapperClass = 'w-10 h-10 relative overflow-hidden';

export const InvestmentItem = ({ name, description, url, imageSrc, investmentDate }: InvestmentType) => {
  const imageAlternativeText = `${name} logo`;
  const urlTitle = `Visit ${name} website`;

  return (
    <li className="flex flex-row items-start pb-8 pr-2 w-full lg:max-w-sm text-black dark:text-white">
      <div className="mr-4">
        <div className={imageWrapperClass}>
          <Image src={imageSrc} alt={imageAlternativeText} layout="fill" />
        </div>
      </div>

      <div className="flex flex-col h-full">
        <p className="leading-5 mb-1 text-neutral-700 dark:text-neutral-300">
          <span className="font-medium text-ellipsis">{name}</span>
          <br />
          <span className="text-xs text-neutral-600 dark:text-neutral-400">invested since @ {investmentDate}</span>
        </p>
        <p className="text-black dark:text-white pb-4">{description}</p>

        {url && (
          <div className="inline-flex">
            <a
              title={urlTitle}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 transition-all shadow-md hover:bg-blue-400 text-white text-sm py-2 px-6 rounded-lg"
            >
              View Stock Graph
            </a>
          </div>
        )}
      </div>
    </li>
  );
};
