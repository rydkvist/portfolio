import { fundHoldings } from '../../db';
import { Heading } from '../Heading';
import { InvestmentItem } from './InvestmentItem';

export const FundList = () => {
  return (
    <>
      <Heading as="h2" className="mr-auto pb-4">
        Funds
      </Heading>

      <ul className="flex flex-wrap lg:justify-between">
        {fundHoldings.map(investment => (
          <InvestmentItem key={investment.name} {...investment} />
        ))}
      </ul>
    </>
  );
};
