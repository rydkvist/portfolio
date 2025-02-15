export type Project = {
  title: string;
  description: string;
  date: string;
  imageSrc?: string;
  videoURL?: string;
  link: string;
  technologies: string;
};

export const projects: Project[] = [
  {
    title: 'TripPlanner',
    description:
      "Unveil the ease of travel with TripPlanner, an AI-powered itinerary genius that simplifies your voyage planning. Born during the AI boom, this tool harnesses the power of Next.js, React, and OpenAI to transform your travel queries into comprehensive, actionable plans. Whether you're dreaming of the beaches in Thailand, the bustling streets of Vietnam, or the majestic landscapes of South Africa, TripPlanner takes your destination and crafts a personalized journey just for you. Dive into the future of travel and let your next adventure begin with a click.",
    date: 'May 2023',
    link: 'https://trip-planner.rydkvist.com/',
    imageSrc: '/images/projects/trip-planner-showcase.jpg',
    technologies: 'Next.js, React, OpenAI',
  },
  {
    title: 'Börsjakten',
    description:
      'Embark on a financial journey with Börsjakten, a personal finance mobile app designed to educate and entertain. Explore the world of investing and personal finance, from the stock market to real estate and everything in between, all while playing in a stock market sandbox with virtual funds. Built with Swift and SwiftUI, Börsjakten is the perfect tool for anyone looking to take control of their financial future.',
    date: 'March 2022',
    imageSrc: '/images/projects/borsjakten-showcase.png',
    link: 'https://github.com/rydkvist/borsjakten',
    technologies: 'Swift, SwiftUI, Stock Market',
  },
];
