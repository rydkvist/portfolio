import { DefaultSeo } from 'next-seo';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX } from '../config';
import { StockList } from '../components/Investments/StockList';
import { FundList } from '../components/Investments/FundList';
import { Description } from '../components/Description';

const Investments = () => {
  const pageTitle = `Investments – ${APP_TITLE_SUFFIX}`;

  return (
    <PageWrapper>
      <DefaultSeo title={pageTitle} />

      <Heading as="h1">Investments</Heading>
      <Description>
        This section showcases some of my current investment holdings, which may be subject to change over time.
      </Description>

      <StockList />
      <FundList />
    </PageWrapper>
  );
};

export default Investments;
