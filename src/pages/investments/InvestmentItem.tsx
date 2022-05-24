import Link from 'next/link';
import Image from 'next/image';

type InvestmentType = {
  companyName: string;
  description: string;
  companyImageSource?: string;
  companyHref?: string;
  companyIcon?: JSX.Element;
  date?: string;
};

export const InvestmentItem = ({
  companyName,
  description,
  companyHref,
  companyImageSource,
  companyIcon,
  date,
}: InvestmentType) => {
  const imageWrapperClass = 'w-20 h-20 text-black dark:text-white overflow-hidden relative mr-4 rounded-md';

  return (
    <li className="flex flex-row p-2">
      {companyIcon && companyHref ? (
        <Link href={companyHref} passHref>
          <a title={companyName} className={imageWrapperClass}>
            {companyIcon}
          </a>
        </Link>
      ) : companyHref ? (
        <Link href={companyHref} passHref>
          <a title={companyName} className={imageWrapperClass}>
            <Image
              src={`/images/companies/${companyImageSource}.png`}
              alt={companyName}
              layout="fill"
              objectFit="contain"
              priority
            />
          </a>
        </Link>
      ) : (
        <span title={companyName} className={imageWrapperClass}>
          <Image
            src={`/images/companies/${companyImageSource}.png`}
            alt={companyName}
            layout="fill"
            objectFit="contain"
            priority
          />
        </span>
      )}

      <div className="flex flex-col">
        <p className="inline-flex items-start justify-between text-neutral-700 dark:text-neutral-300">
          <span>{companyName}</span>

          {date && <span className="text-xs">{date}</span>}
        </p>
        <p className="text-black dark:text-white">{description}</p>
      </div>
    </li>
  );
};
