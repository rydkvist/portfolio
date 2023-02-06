import { stockHoldings } from '../../db';
import { Heading } from '../Heading';
import { InvestmentItem } from './InvestmentItem';

export const StockList = () => {
  return (
    <>
      <Heading as="h2" className="mr-auto pb-4">
        Stocks
      </Heading>

      <ul className="flex flex-wrap lg:justify-between">
        {stockHoldings.map(investment => (
          <InvestmentItem key={investment.name} {...investment} />
        ))}
      </ul>
    </>
  );
};
