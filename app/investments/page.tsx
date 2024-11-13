import { Funds } from '@/features/investments/components/Funds';
import { Stocks } from '@/features/investments/components/Stocks';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investments',
};

const Investments = () => {
  return (
    <>
      <h1 className="size-xxl text-center">Investments</h1>
      <p className="description">
        This section showcases some of my current investment holdings, which may change over time.
      </p>

      <Stocks />
      <Funds />
    </>
  );
};

export default Investments;
