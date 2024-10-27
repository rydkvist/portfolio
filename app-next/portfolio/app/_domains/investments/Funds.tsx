import { fundHoldings } from '@/_lib/config';
import { InvestmentItem } from './InvestmentItem';

export const Funds = () => (
  <>
    <h2 className="size-xl mr-auto pb-4">Funds</h2>
    <ul className="flex flex-wrap lg:justify-between">
      {fundHoldings.map(investment => (
        <InvestmentItem key={investment.name} {...investment} />
      ))}
    </ul>
  </>
);
