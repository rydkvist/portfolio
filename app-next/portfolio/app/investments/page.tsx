import { Funds } from '@/_domains/investments/Funds';
import { Stocks } from '@/_domains/investments/Stocks';

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
