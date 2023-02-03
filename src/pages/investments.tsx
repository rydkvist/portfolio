import { DefaultSeo } from 'next-seo';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../config';
import { InvestmentItem } from '../components/InvestmentItem';
import { fundHoldings, stockHoldings } from '../db';

const Investments = () => (
  <PageWrapper>
    <>
      <DefaultSeo title={`Investments – ${APP_TITLE_SUFFIX}`} />
      <Heading as="h1" className="mr-auto">
        Investments
      </Heading>

      <p className="text-neutral-700 dark:text-neutral-300 mr-auto mb-4">
        This section showcases some of my current investment holdings, which may be subject to change over time.
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

export default Investments;
