import type { NextPage } from 'next';
import Image from 'next/image';

const Landing = () => (
  <div className="mx-auto mt-8 sm:mt-4">
    <div className="flex flex-col justify-center items-center px-8">
      <div className="w-32 sm:w-48 h-32 sm:h-48 border-2 overflow-hidden rounded-full relative">
        <Image
          src="/images/NiklasVaxholm.png"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition={'0% 10%'}
          priority
        />
      </div>

      <h1 className="text-3xl mt-4 text-black dark:text-white text-center font-normal">Hey there! I&apos;m Niklas.</h1>
      <h3 className="text-2xl  mt-4 sm:mt-2 w-full  text-black dark:text-white  text-center font-light leading-relaxed">
        I&apos;m a passionate and driven self-taught <span className="font-medium">software developer</span> from Sweden
        specializing in <span className="font-medium">front-end development</span> and{' '}
        <span className="font-medium">design</span>. I create professional web applications and design systems.
      </h3>
      <div style={{ paddingBottom: '300px' }} />
    </div>
  </div>
);

export default Landing;
