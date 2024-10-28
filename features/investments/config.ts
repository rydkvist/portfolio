export type Investment = {
  name: string;
  url: string;
  investedSince: string;
  imageSrc: string;
};

export const stockHoldings: Investment[] = [
  {
    name: 'NVIDIA',
    imageSrc: '/images/companies/NVIDIA.png',
    url: 'https://finance.yahoo.com/quote/NVDA/',
    investedSince: 'Feb 2020',
  },
  {
    name: 'Airbnb',
    imageSrc: '/images/companies/Airbnb.png',
    url: 'https://finance.yahoo.com/quote/ABNB/',
    investedSince: 'December 2020',
  },
  {
    name: 'Cloudflare',
    imageSrc: '/images/companies/Cloudflare.png',
    url: 'https://finance.yahoo.com/quote/NET',
    investedSince: 'June 2021',
  },
  {
    name: 'AstraZeneca',
    imageSrc: '/images/companies/AstraZeneca.png',
    url: 'https://finance.yahoo.com/quote/AZN',
    investedSince: 'July 2023',
  },
  {
    name: 'Microsoft',
    imageSrc: '/images/companies/Microsoft.png',
    url: 'https://finance.yahoo.com/quote/MSFT/',
    investedSince: 'January 2023',
  },
  {
    name: 'Avanza',
    imageSrc: '/images/companies/Avanza.png',
    url: 'https://www.avanza.se/aktier/om-aktien.html/5361/avanza-bank-holding',
    investedSince: 'July 2023',
  },
  {
    name: 'Volvo Cars',
    imageSrc: '/images/companies/VolvoCars.jpeg',
    url: 'https://www.avanza.se/aktier/om-aktien.html/1296604/volvo-car-b',
    investedSince: 'May 2023',
  },
  {
    name: 'Ethereum',
    imageSrc: '/images/companies/Ethereum.png',
    url: 'https://finance.yahoo.com/quote/ETH-USD',
    investedSince: 'June 2020',
  },
];

export const fundHoldings: Investment[] = [
  {
    name: 'Spiltan Aktiefond Investmentbolag',
    imageSrc: '/images/companies/Spiltan.png',
    url: 'https://www.avanza.se/fonder/om-fonden.html/325406/spiltan-aktiefond-investmentbolag',
    investedSince: 'January 2020',
  },
  {
    name: 'Swedbank Robur Technology A',
    imageSrc: '/images/companies/Swedbank.png',
    url: 'https://www.avanza.se/fonder/om-fonden.html/363/swedbank-robur-technology-a',
    investedSince: 'May 2023',
  },
  {
    name: 'Handelsbanken USA Ind Crit A1 SEK',
    imageSrc: '/images/companies/Handelsbanken.png',
    url: 'https://www.avanza.se/fonder/om-fonden.html/315115/handelsbanken-usa-ind-crit-a1-sek',
    investedSince: 'July 2023',
  },
  {
    name: 'Handelsbanken Hållbar Energi A1 SEK',
    imageSrc: '/images/companies/Handelsbanken.png',
    url: 'https://www.avanza.se/fonder/om-fonden.html/512559/handelsbanken-hallbar-energi-a1-sek',
    investedSince: 'January 2020',
  },
];
