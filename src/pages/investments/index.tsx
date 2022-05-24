import { DefaultSeo } from 'next-seo';
import { Heading } from '../../components/Heading';
import { PageWrapper } from '../../components/PageWrapper';
import { APP_TITLE_SUFFIX, PERSONAL_ADDRESS_WITH_GOOGLE_MAPS } from '../../config';
import HouseIcon40x40 from '../../../public/images/feather/home40x40.svg';
import { InvestmentItem } from '../../components/InvestmentItem';

// TODO: Add Image of every company
const Investments = () => {
  return (
    <PageWrapper withTopInset>
      <>
        <DefaultSeo title={`Investments – ${APP_TITLE_SUFFIX}`} />
        <Heading as="h1" className="mr-auto">
          Investments
        </Heading>

        <p>
          Below are my current investments holdings. They range from 15% of my investable asset to as small as $1K.
          Ordered by the time I started my position.
        </p>

        <ul className="flex flex-col mt-8 ">
          <InvestmentItem
            companyName="My Home"
            date="Aug 2021"
            companyHref={PERSONAL_ADDRESS_WITH_GOOGLE_MAPS}
            companyIcon={<HouseIcon40x40 />}
            description="An apartment in the heart of Stockholm, an asset that I can rent out later on in order to start my private real estate career"
          />
          <hr className="my-4 divide-neutral-800 dark:divide-neutral-200" />

          <InvestmentItem
            companyName="Cloudflare"
            date="June 2021"
            companyImageSource="Cloudflare"
            description="They have been in the industry of cybersecurity for quite a while now and I thought that the stock was undervalued, so I got in the ride."
          />
          <hr className="my-4 divide-neutral-400 dark:divide-neutral-200" />

          <InvestmentItem
            companyName="Airbnb"
            date="Feb 2021"
            companyImageSource="Airbnb"
            description="An online marketplace to travel freely to anywhere at anytime. Built the position betting on travel resurgence and remote work mobility."
            companyHref="https://www.airbnb.com"
          />
          <hr className="my-4 divide-neutral-800 dark:divide-neutral-200" />

          <InvestmentItem
            companyName="Ethereum"
            date="June 2020"
            companyImageSource="Ethereum"
            description="A decentralized blockchain with smart contract functionality. Betting on the long run where cryptocurrencies and Web 3 become mainstream in the upcoming years."
          />
          <hr className="my-4 divide-neutral-800 dark:divide-neutral-200" />

          <InvestmentItem
            companyName="NVIDIA"
            date="Feb 2020"
            companyImageSource="NVIDIA"
            description="They explore the field of quantum computers together with their vast knowledge and industry leading graphical cards. Currently undervalued with great forecast."
          />

          {/* <hr className="my-4 divide-neutral-800 dark:divide-neutral-200" />

          <InvestmentItem
            companyName="Investor AB"
            date="Jan 2020"
            description="A well-known Swedish investment fund company that's always making good value with their money."
          /> */}
        </ul>
      </>
    </PageWrapper>
  );
};

export default Investments;
