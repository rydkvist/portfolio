import Image from 'next/image';
import { Project } from '../config';
import { Icon } from '@/components/Icon';
import { isExternalLink } from '@/utils/helpers';

export const ProjectItem = ({ title, description, date, imageSrc, videoURL, link, technologies }: Project) => {
  const isExternal = isExternalLink(link);

  return (
    <li className="flex flex-col items-start">
      <a
        href={link}
        target={isExternal ? '_blank' : '_self'}
        rel="noreferrer"
        className="hocus:pointer hocus:bg-neutral-200 hocus:dark:bg-neutral-700 group w-full flex-col overflow-hidden rounded-lg bg-neutral-100 shadow-md ring-1 ring-neutral-200 transition-colors dark:bg-neutral-800 dark:ring-neutral-700"
      >
        <div className="relative mx-auto h-80 w-full rounded-t-lg bg-neutral-300">
          {imageSrc ? (
            <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" priority />
          ) : videoURL ? (
            <iframe
              width="100%"
              height="320px"
              src={videoURL}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : null}
        </div>

        <div className="flex flex-col gap-2 p-4 md:gap-1">
          <div className="flex flex-row items-center justify-between gap-2 text-neutral-700 dark:text-neutral-300">
            <div className="flex flex-row items-center">
              <p>{title}</p>
              {isExternal && (
                <span className="ml-1.5 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100">
                  <Icon name="externalLink" />
                </span>
              )}
            </div>

            <p className="text-right text-sm">{date}</p>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400">{description}</p>

          {technologies && (
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              <b>Technologies:</b> {technologies}
            </p>
          )}
        </div>
      </a>
    </li>
  );
};
