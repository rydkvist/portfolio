import { Investment } from '@/_lib/config';
import Image from 'next/image';

export const InvestmentItem = ({ name, url, imageSrc, investedSince }: Investment) => {
  const altText = `${name} logo`;
  const urlTitle = `Visit ${name} website`;

  return (
    <li className="flex flex-row w-full md:max-w-xs items-start pr-2 pb-8 text-black dark:text-white">
      <div className="mr-4">
        <div className="w-12 h-12 relative overflow-hidden">
          <Image src={imageSrc} alt={altText} width={48} height={48} />
        </div>
      </div>

      <div className="flex flex-col h-full">
        <p className="leading-5 mb-1 text-neutral-700 dark:text-neutral-300">
          <span className="font-medium text-ellipsis text-lg">{name}</span>
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
              className="border-blue-500 border text-blue-500 transition-all shadow-md hover:bg-blue-500 hover:text-white text-xs py-2 mt-2 px-5 rounded-lg"
            >
              View Stock Graph
            </a>
          </div>
        )}
      </div>
    </li>
  );
};
