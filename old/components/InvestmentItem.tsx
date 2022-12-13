import Link from 'next/link';
import Image from 'next/image';

type InvestmentType = {
  companyName: string;
  description: string;
  companyHref: string;
  companyImageSource?: string;
  companyIcon?: JSX.Element;
  date?: string;
};

const imageWrapperClass = 'max-w-10 max-h-10 w-full h-full relative overflow-hidden';

export const InvestmentItem = ({
  companyName,
  description,
  companyHref,
  companyImageSource,
  companyIcon,
  date,
}: InvestmentType) => {
  return (
    <li className="flex flex-row items-start p-2 text-black dark:text-white">
      <div className="mr-4">
        {companyIcon && companyHref ? (
          <Link className={imageWrapperClass} href={companyHref} target="_blank">
            {companyIcon}
          </Link>
        ) : (
          <Link className={imageWrapperClass} title={companyName} href={companyHref} target="_blank">
            <Image src={companyImageSource} alt={companyName} width={40} height={40} layout="fixed" />
          </Link>
        )}
      </div>

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
