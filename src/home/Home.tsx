import React from 'react';
import { appTitle } from '../config';

const Home = () => {
  window.document.title = `${appTitle}: Home`;
  return (
    <>
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center items-center px-8">
          <div className="mt-8 md:mt-4 z-10">
            <img
              className="w-48 md:w-64 h-48 md:h-64 rounded-full border-2"
              src="/NiklasGreenTree.png"
              alt="Niklas Rydkvist"
            />
          </div>
          <h1 className="text-3xl mt-4 text-center font-normal">Hey there! I'm Niklas.</h1>
          <h3
            className="text-2xl mt-4 md:mt-2 w-full text-center font-light leading-relaxed"
            style={{ fontFamily: 'Lato' }}
          >
            I'm a passionate and driven self-taught <span className="font-medium">software developer</span> from Sweden
            specializing in <span className="font-medium">front-end development</span> and{' '}
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
