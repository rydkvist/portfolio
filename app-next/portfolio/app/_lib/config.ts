export type Investment = {
  name: string;
  url: string;
  investedSince: string;
  imageSrc: string;
};

export const stockHoldings: Investment[] = [
  {
    name: 'Airbnb',
    imageSrc: '/images/companies/Airbnb.png',
    url: 'https://finance.yahoo.com/quote/ABNB/',
    investedSince: 'IPO (December 2020)',
  },
  {
    name: 'NVIDIA',
    imageSrc: '/images/companies/NVIDIA.png',
    url: 'https://finance.yahoo.com/quote/NVDA/',
    investedSince: 'Feb 2020',
  },
  {
    name: 'Microsoft',
    imageSrc: '/images/companies/Microsoft.png',
    url: 'https://finance.yahoo.com/quote/MSFT/',
    investedSince: 'January 2023',
  },
  {
    name: 'Cloudflare',
    imageSrc: '/images/companies/Cloudflare.png',
    url: 'https://finance.yahoo.com/quote/NET',
    investedSince: 'June 2021',
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
    name: 'Handelsbanken Hållbar Energi A1 SEK',
    imageSrc: '/images/companies/Handelsbanken.png',
    url: 'https://www.avanza.se/fonder/om-fonden.html/512559/handelsbanken-hallbar-energi-a1-sek',
    investedSince: 'January 2020',
  },
];

export type Project = {
  title: string;
  description: string;
  date: string;
  imagePath?: string;
  videoURL?: string;
  link: string;
  technologies: string;
  imageClassName?: string;
};

export const projects: Project[] = [
  {
    title: 'TripPlanner',
    description:
      "Unveil the ease of travel with TripPlanner, an AI-powered itinerary genius that simplifies your voyage planning. Born during the AI boom, this tool harnesses the power of Next.js, React, and OpenAI to transform your travel queries into comprehensive, actionable plans. Whether you're dreaming of the beaches in Thailand, the bustling streets of Vietnam, or the majestic landscapes of South Africa, TripPlanner takes your destination and crafts a personalized journey just for you. Dive into the future of travel and let your next adventure begin with a click.",
    date: 'May 2023',
    link: 'https://trip-planner.rydkvist.com/',
    imagePath: '/images/projects/trip-planner-showcase.jpg',
    technologies: 'Next.js, React, OpenAI',
  },
  {
    title: 'Börsjakten',
    description:
      'Embark on a financial journey with Börsjakten, a personal finance mobile app designed to educate and entertain. Explore the world of investing and personal finance, from the stock market to real estate and everything in between, all while playing in a stock market sandbox with virtual funds. Built with Swift and SwiftUI, Börsjakten is the perfect tool for anyone looking to take control of their financial future.',
    date: 'March 2022',
    imagePath: '/images/projects/borsjakten-showcase.png',
    link: 'https://github.com/rydkvist/borsjakten',
    technologies: 'Swift, SwiftUI, Stock Market',
  },
  {
    title: 'Buysimple',
    description:
      'Experience seamless online shopping with Buysimple, a user-friendly e-commerce platform designed with accessibility and functionality in mind. With an emphasis on clear information distribution and intuitive navigation, Buysimple is the perfect destination for anyone looking for a smooth and enjoyable shopping experience. Built with HTML, CSS, Bootstrap, JavaScript, and PHP.',
    date: 'May 2018',
    videoURL: 'https://www.youtube.com/embed/u7r7hiHJaS8',
    link: 'https://github.com/rydkvist/buysimple',
    technologies: 'HTML, CSS, Bootstrap, JavaScript, PHP',
    imageClassName: 'bg-neutral-50',
  },
];
