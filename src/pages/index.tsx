import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SHOW_NEW_DESIGN } from '../config';
import { useTheme } from '../context/ThemeProvider';

const ThemeToggler = () => {
  const { setTheme } = useTheme();

  const buttonClass = `w-full rounded-lg p-1 mx-auto transition cursor-pointer bg-neutral-200 dark:bg-neutral-600`;

  return (
    <div className="flex justify-center items-center rounded-lg text-black dark:text-white bg-neutral-300 dark:bg-neutral-700 p-1 text-sm">
      <button onClick={() => setTheme('light')} className={buttonClass}>
        Light
      </button>
      <span className="px-0.5" />
      <button onClick={() => setTheme('dark')} className={buttonClass}>
        Dark
      </button>
    </div>
  );
};

const Home: NextPage = () => {
  const { theme } = useTheme();

  if (!SHOW_NEW_DESIGN) {
    return <OldHome />;
  }

  const SideBarItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link passHref href={href}>
      <li className="flex items-center px-4 py-2 text-gray-200 hover:bg-neutral-700 rounded-lg cursor-pointer text-sm sm:text-base transition">
        <a href={href} className="prone flex items-center">
          {children}
        </a>
      </li>
    </Link>
  );

  const SideBarNavigation = () => (
    <div className={`flex flex-col justify-start px-4 pt-6 pb-2 bg-neutral-800 w-72 text-white`}>
      <h1 className="uppercase font-medium pb-4 px-4 break-words">Niklas Rydkvist</h1>
      <ul>
        <SideBarItem href="/">Home</SideBarItem>
        <SideBarItem href="/about">About</SideBarItem>
        <SideBarItem href="/projects">Projects</SideBarItem>
        <SideBarItem href="/contact">Contact</SideBarItem>
      </ul>

      <div className="mt-auto">
        <ThemeToggler />
      </div>
    </div>
  );

  const MainContent = () => <div className="flex flex-col w-full bg-neutral-900"></div>;

  return (
    <div className="flex min-h-screen">
      <SideBarNavigation />
      <MainContent />
    </div>
  );
};

const OldHome: NextPage = () => {
  return (
    <>
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center items-center px-8">
          <div className="mt-8 md:mt-4 z-10">
            <div className="w-48 md:w-64 h-48 md:h-64 border-2 overflow-hidden rounded-full relative">
              <Image
                src="/images/NiklasVaxholm.png"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                objectPosition={'0% 10%'}
                priority
              />
            </div>
          </div>
          <h1 className="text-3xl mt-4 text-white text-center font-normal">Hey there! I&apos;m Niklas.</h1>
          <h3
            className="text-2xl text-white mt-4 md:mt-2 w-full text-center font-light leading-relaxed"
            style={{ fontFamily: 'Lato' }}
          >
            I&apos;m a passionate and driven self-taught <span className="font-medium">software developer</span> from
            Sweden specializing in <span className="font-medium">front-end development</span> and{' '}
            <span className="font-medium">design</span>. I create professional web applications and design systems.
            {/* <br />
            <br /> I've been into programming since I was 14 years old, where I
            started by creating my own game server with a community of over{" "}
            <span className="font-normal">10.000 users</span>. Today I develop
            and design professional web applications for large enterprises with
            over +<span className="font-normal">4 million users</span>. */}
          </h3>
          {/* <h3 className="text-2xl mt-8 w-full text-left md:text-center font-light leading-relaxed">
            I'm a person who is comfortable working in stressful environments,
            where it is vital to be transparent and to keep the moral of the
            group up by being communicative, self-propelled, and analytical.
          </h3> */}
        </div>
      </div>
    </>
  );
};

export default Home;
