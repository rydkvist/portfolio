import { DefaultSeo } from 'next-seo';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX, stockHoldings, fundHoldings } from '../config';
import { InvestmentItem } from '../components/InvestmentItem';

const Investments = () => {
  return (
    <PageWrapper withTopInset className="container px-8 md:px-16 lg:px-8 xl:px-32">
      <>
        <DefaultSeo title={`Investments – ${APP_TITLE_SUFFIX}`} />
        <Heading as="h1" className="mr-auto">
          Investments
        </Heading>

        <p className="text-neutral-700 dark:text-neutral-300 mr-auto mb-4">
          Below are some of my current investment holdings – some may be outdated.
        </p>

        <Heading as="h2" className="mr-auto pb-4">
          Stocks
        </Heading>

        <ul className="flex flex-wrap lg:justify-between">
          {stockHoldings.map(investment => (
            <InvestmentItem key={investment.name} {...investment} />
          ))}
        </ul>

        <Heading as="h2" className="mr-auto pb-4">
          Funds
        </Heading>

        <ul className="flex flex-wrap lg:justify-between">
          {fundHoldings.map(investment => (
            <InvestmentItem key={investment.name} {...investment} />
          ))}
        </ul>
      </>
    </PageWrapper>
  );
};

export default Investments;
