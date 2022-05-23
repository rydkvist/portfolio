import { DefaultSeo } from 'next-seo';
import Link from 'next/link';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX, SHOW_INVESTMENTS_SUMMARY } from '../config';

// TODO: Add companies you're investing in, followed by the icon of the company and a short brief text explaining your goal with the investment
const Investments = () => {
  return (
    <PageWrapper withTopInset>
      <>
        <DefaultSeo title={`Investments – ${APP_TITLE_SUFFIX}`} />
        {SHOW_INVESTMENTS_SUMMARY ? (
          <>
            <Heading as="h1">Investments</Heading>
            <ul className="flex flex-col w-full">
              <InvestmentItem companyName="Airbnb" description="Airbnb is g0dlike" />
              <InvestmentItem companyName="NVIDIA" description="NVIDIA is world leading in graphic cards" />
              <InvestmentItem companyName="Cloudflare" description="Been in the industry of cybersecurity for years" />
              <InvestmentItem companyName="Investor AB" description="A swedish investment company" />
            </ul>
          </>
        ) : (
          <Heading as="h1">Coming soon..</Heading>
        )}
      </>
    </PageWrapper>
  );
};

type InvestmentType = {
  companyName: string;
  description: string;
  companyHref?: string;
};

const InvestmentItem = ({ companyName, description, companyHref }: InvestmentType) => {
  const itemClass = 'w-12 h-12 bg-blue-400 mr-4 rounded-md';

  return (
    <li className="flex flex-row items-start mb-2 p-2">
      {companyHref ? (
        <Link href={companyHref} passHref>
          <a title={companyName} className={itemClass}></a>
        </Link>
      ) : (
        <span title={companyName} className={itemClass}></span>
      )}

      <div className="flex flex-col">
        <p className="text-neutral-300">{companyName}</p>
        <p className="text-white ">{description}</p>
      </div>
    </li>
  );
};

export default Investments;
