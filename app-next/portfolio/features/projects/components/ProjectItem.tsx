import Image from 'next/image';
import { Project } from '../config';
import { Icon } from '@/components/Icon';

export const ProjectItem = ({
  title,
  description,
  date,
  imagePath,
  videoURL,
  link,
  technologies,
  imageClassName = 'bg-neutral-300',
}: Project) => {
  const isExternalLink = link.startsWith('http');

  return (
    <li className="mb-16 flex flex-col items-start">
      <a
        href={link}
        target={isExternalLink ? '_blank' : '_self'}
        rel="noreferrer"
        className="hover:pointer group w-full flex-col overflow-hidden rounded-lg bg-neutral-100 shadow-md ring-1 ring-neutral-200 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700 hover:dark:bg-neutral-700"
      >
        <div className={`relative mx-auto h-80 w-full rounded-t-lg ${imageClassName}`}>
          {imagePath ? (
            <Image src={imagePath} alt={title} layout="fill" objectFit="contain" priority />
          ) : (
            videoURL && (
              <iframe
                width="100%"
                height="320px"
                src={videoURL}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )
          )}
        </div>

        <div className="flex-col px-4 py-3 text-neutral-600 dark:text-neutral-400">
          <div className="mb-0.5 flex flex-row items-start justify-between text-neutral-700 dark:text-neutral-300">
            <div className="flex flex-row items-center">
              <p>{title}</p>
              {isExternalLink && (
                <span className="ml-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                  <Icon name="externalLink" />
                </span>
              )}
            </div>

            <p className="pl-2 text-right text-sm">{date}</p>
          </div>
          <p className="text-sm leading-relaxed">{description}</p>
          {technologies && (
            <p className="mt-2 text-xs">
              <b>Technologies:</b> {technologies}
            </p>
          )}
        </div>
      </a>
    </li>
  );
};
