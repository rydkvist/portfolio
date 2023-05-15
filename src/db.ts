export type InvestmentType = {
  name: string;
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
  },
  {
    name: 'NVIDIA',
    imageSrc: '/images/companies/NVIDIA.png',
    url: 'https://finance.yahoo.com/quote/NVDA/',
    investmentDate: 'Feb 2020',
  },
  {
    name: 'Microsoft',
    imageSrc: '/images/companies/Microsoft.png',
    url: 'https://finance.yahoo.com/quote/MSFT/',
    investmentDate: 'January 2023',
  },
  {
    name: 'Cloudflare',
    imageSrc: '/images/companies/Cloudflare.png',
    url: 'https://finance.yahoo.com/quote/NET',
    investmentDate: 'June 2021',
  },
  {
    name: 'SBB',
    imageSrc: '/images/companies/SBB.png',
    url: 'https://www.avanza.se/aktier/om-aktien.html/517316/samhallsbyggnadsbo--i-norden-b',
    investmentDate: 'July 2022',
  },
  {
    name: 'Ethereum',
    imageSrc: '/images/companies/Ethereum.png',
    url: 'https://finance.yahoo.com/quote/ETH-USD',
    investmentDate: 'June 2020',
  },
];

export const fundHoldings: Array<InvestmentType> = [
  {
    name: 'Spiltan Aktiefond Investmentbolag',
    imageSrc: '/images/companies/Spiltan.png',
    url: 'https://www.avanza.se/fonder/om-fonden.html/325406/spiltan-aktiefond-investmentbolag',
    investmentDate: 'January 2020',
  },
  {
    name: 'Handelsbanken Hållbar Energi A1 SEK',
    imageSrc: '/images/companies/Handelsbanken.png',
    url: 'https://www.avanza.se/fonder/om-fonden.html/512559/handelsbanken-hallbar-energi-a1-sek',
    investmentDate: 'January 2020',
  },
  {
    name: 'TIN Ny Teknik A',
    imageSrc: '/images/companies/TIN.png',
    url: 'https://www.avanza.se/fonder/om-fonden.html/927735/tin-ny-teknik-a',
    investmentDate: 'July 2021',
  },
];

export type ProjectType = {
  title: string;
  description: string;
  date: string;
  imagePath?: string;
  videoURL?: string;
  link: string;
  technologies: string;
  imageClassName?: string;
  style?: {};
};

export const projects: Array<ProjectType> = [
  {
    title: 'Börsjakten',
    description:
      'Embark on a financial journey with Börsjakten, a personal finance mobile app designed to educate and entertain. Explore the world of investing and personal finance, from the stock market to real estate and everything in between, all while playing in a stock market sandbox with virtual funds. Built with Swift and SwiftUI, Börsjakten is the perfect tool for anyone looking to take control of their financial future.',
    date: 'March 2022',
    imagePath: '/images/projects/borsjakten-showcase.png',
    link: 'https://github.com/Nojze/borsjakten',
    technologies: 'Side Project · Swift & SwiftUI',
  },
  {
    title: 'Buysimple',
    description:
      'Experience seamless online shopping with Buysimple, a user-friendly e-commerce platform designed with accessibility and functionality in mind. With an emphasis on clear information distribution and intuitive navigation, Buysimple is the perfect destination for anyone looking for a smooth and enjoyable shopping experience. Built with HTML, CSS, Bootstrap, JavaScript, and PHP.',
    date: 'May 2019',
    videoURL: 'https://www.youtube.com/embed/u7r7hiHJaS8',
    link: 'https://github.com/Nojze/buysimple',
    technologies: 'Side Project · HTML, CSS, Bootstrap, JavaScript, PHP',
    imageClassName: 'bg-neutral-50',
  },
  {
    title: 'Fractal Wonders: A Mandelbrot Set Exploration',
    description:
      'Dive into the world of mathematics with this programming project that re-creates the stunning patterns of the Mandelbrot set. Using my knowledge of discrete mathematics and complex numbers, I brought this intricate fractal to life with the help of C# and Windows Forms .NET. A true testament to the beauty and power of mathematics.',
    date: 'April 2019',
    imagePath: '/images/projects/mandelbrot-showcase.jpeg',
    link: 'https://github.com/Nojze/mandelbrot',
    technologies: 'Side Project · C#, Windows Forms .NET',
    imageClassName: 'bg-neutral-100 dark:bg-neutral-800',
    style: { backgroundColor: '#020B64' },
  },
];
