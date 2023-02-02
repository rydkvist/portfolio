import { DefaultSeo } from 'next-seo';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';
import { APP_TITLE_SUFFIX, PERSONAL_ADDRESS_WITH_GOOGLE_MAPS } from '../config';
import HouseIcon40x40 from '../../public/images/feather/home40x40.svg';
import { InvestmentItem } from '../components/InvestmentItem';

const Investments = () => {
  return (
    <PageWrapper withTopInset>
      <>
        <DefaultSeo title={`Investments – ${APP_TITLE_SUFFIX}`} />
        <Heading as="h1" className="mr-auto">
          Investments
        </Heading>

        <p className="text-neutral-600 dark:text-neutral-400">
          Below are my current investments holdings. They range from 15% of my investable asset to as small as $1K.
        </p>

        <ul className="flex flex-col mt-8">
          <InvestmentItem
            companyName="My Home"
            date="Aug 2021"
            companyHref={PERSONAL_ADDRESS_WITH_GOOGLE_MAPS}
            companyIcon={<HouseIcon40x40 />}
            description="An apartment in the center of Stockholm, an asset that I can rent out later on in order to start a form of private real estate."
          />
          <hr className="my-4 divide-neutral-800 dark:divide-neutral-200" />

          <InvestmentItem
            companyName="Cloudflare"
            date="June 2021"
            companyImageSource="/images/companies/Cloudflare.png"
            companyHref="https://www.cloudflare.com"
            description="They have been in the industry of cybersecurity for quite a while now and I thought that the stock was undervalued, so I got in the ride."
          />
          <hr className="my-4 divide-neutral-400 dark:divide-neutral-200" />

          <InvestmentItem
            companyName="Airbnb"
            date="Feb 2021"
            companyImageSource="/images/companies/Airbnb.png"
            companyHref="https://www.airbnb.com"
            description="An online marketplace to travel freely to anywhere at anytime. Built the position betting on travel resurgence and remote work mobility."
          />
          <hr className="my-4 divide-neutral-800 dark:divide-neutral-200" />

          <InvestmentItem
            companyName="Ethereum"
            date="June 2020"
            companyImageSource="/images/companies/Ethereum.png"
            companyHref="https://ethereum.org"
            description="A decentralized blockchain with smart contract functionality. Betting on the long run where cryptocurrencies and Web 3 become mainstream in the upcoming years."
          />
          <hr className="my-4 divide-neutral-800 dark:divide-neutral-200" />

          <InvestmentItem
            companyName="NVIDIA"
            date="Feb 2020"
            companyImageSource="/images/companies/NVIDIA.png"
            companyHref="https://www.nvidia.com"
            description="They explore the field of quantum computers together with their vast knowledge and industry leading graphical cards. Currently undervalued with great forecast."
          />
        </ul>
      </>
    </PageWrapper>
  );
};

export default Investments;
