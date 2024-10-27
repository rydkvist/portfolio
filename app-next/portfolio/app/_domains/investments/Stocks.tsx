import { stockHoldings } from '@/_lib/config';
import { InvestmentItem } from './InvestmentItem';

export const Stocks = () => (
  <>
    <h2 className="size-xl mr-auto pb-4">Stocks</h2>
    <ul className="flex flex-wrap lg:justify-between">
      {stockHoldings.map(investment => (
        <InvestmentItem key={investment.name} {...investment} />
      ))}
    </ul>
  </>
);
