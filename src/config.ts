export const APP_HOME_URL = '/';
export const APP_ABOUT_URL = '/about';
export const APP_PROJECTS_URL = '/projects';
export const APP_INVESTMENTS_URL = '/investments';
export const APP_MUSIC_URL = '/music';

export const APP_WEBSITE_URL = 'https://www.rydkvist.com';
export const APP_TITLE_SUFFIX = 'Niklas Rydkvist';
export const APP_SLOGAN = 'Niklas Rydkvist';
export const APP_DESCRIPTION =
  'Niklas Rydkvist is a Software Engineer based in Stockholm, Sweden. He is passionate about building software that facilitates the day-to-day life of people.';

export const GITHUB_URL = 'https://github.com/Nojze';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/niklasrydkvist/';
export const SPOTIFY_URL = 'https://open.spotify.com/user/1123710739';

export const PERSONAL_EMAIL = 'niklas@rydkvist.com';
export const PERSONAL_PHONE_NUMBER = '+46 70 377 11 04';
export const PERSONAL_ADDRESS = 'Stockholm, Sweden';
export const PERSONAL_ADDRESS_WITH_GOOGLE_MAPS = `https://maps.google.com/maps/search/${PERSONAL_ADDRESS}`;

export type InvestmentType = {
  name: string;
  description: string;
  url?: string;
  investmentDate: string;
  imageSrc: string;
};

export const stockHoldings: Array<InvestmentType> = [
  {
    name: 'Airbnb',
    imageSrc: '/images/companies/Airbnb.png',
    url: 'https://finance.yahoo.com/quote/ABNB/',
    investmentDate: 'IPO (December 2020)',
    description:
      'Airbnb is a leading online marketplace for vacation rental properties. One should invest in Airbnb due to its expanding market share in the travel and tourism industry.',
  },
  {
    name: 'NVIDIA',
    imageSrc: '/images/companies/NVIDIA.png',
    url: 'https://finance.yahoo.com/quote/NVDA/',
    investmentDate: 'Feb 2020',
    description:
      'NVIDIA is a leading technology company specializing in graphics processing units (GPUs) and artificial intelligence. Dominant position in the GPU market and increasing demand for AI technology.',
  },
  {
    name: 'Microsoft',
    imageSrc: '/images/companies/Microsoft.png',
    url: 'https://finance.yahoo.com/quote/MSFT/',
    investmentDate: 'January 2023',
    description:
      'Microsoft is a multinational technology company and a leading provider of software and hardware products. Growing market and portfolio in cloud-based services & AI.',
  },
  {
    name: 'Cloudflare',
    imageSrc: '/images/companies/Cloudflare.png',
    url: 'https://finance.yahoo.com/quote/NET',
    investmentDate: 'June 2021',
    description:
      'Cloudflare is a cloud-based security and performance optimization platform. Growing market demand for cloud-based services and strong financial performance.',
  },
  {
    name: 'SBB',
    imageSrc: '/images/companies/SBB.png',
    url: 'https://www.avanza.se/aktier/om-aktien.html/517316/samhallsbyggnadsbo--i-norden-b',
    investmentDate: 'July 2022',
    description:
      "SBB is a real estate investment company in Sweden. Stable performance of the real estate market in Sweden and the company's strong portfolio of properties.",
  },
  {
    name: 'Ethereum',
    imageSrc: '/images/companies/Ethereum.png',
    url: 'https://finance.yahoo.com/quote/ETH-USD',
    investmentDate: 'June 2020',
    description:
      'Ethereum is a decentralized platform for building and running decentralized applications (dapps). Long-term investment for Web 3 and more.',
  },
];

export const fundHoldings: Array<InvestmentType> = [
  {
    name: 'Spiltan Aktiefond Investmentbolag',
    imageSrc: '/images/companies/Spiltan.png',
    url: 'https://www.avanza.se/fonder/om-fonden.html/325406/spiltan-aktiefond-investmentbolag',
    investmentDate: 'January 2020',
    description:
      'A low-fee Swedish stock fund that invests in a concentrated portfolio of investment companies and related businesses, with a goal of providing better returns over time compared to the Stockholm stock exchange.',
  },
  {
    name: 'Handelsbanken Hållbar Energi A1 SEK',
    imageSrc: '/images/companies/Handelsbanken.png',
    url: 'https://www.avanza.se/fonder/om-fonden.html/512559/handelsbanken-hallbar-energi-a1-sek',
    investmentDate: 'January 2020',
    description:
      'An equity fund that invests globally in companies that develop or use technologies and methods to limit global warming.',
  },
  {
    name: 'TIN Ny Teknik A',
    imageSrc: '/images/companies/TIN.png',
    url: 'https://www.avanza.se/fonder/om-fonden.html/927735/tin-ny-teknik-a',
    investmentDate: 'July 2021',
    description:
      'An equity fund with a focus on Nordic companies whose products and/or services are characterized by high technology',
  },
];
