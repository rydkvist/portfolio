import type { NextPage } from 'next';
import Image from 'next/image';

const Landing = () => (
  <div className="mx-auto mt-8 md:mt-4">
    <div className="flex flex-col justify-center items-center px-8">
      <div className="w-32 md:w-48 h-32 md:h-48 border-2 overflow-hidden rounded-full relative">
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
      <h3 className="text-2xl  mt-4 md:mt-2 w-full  text-black dark:text-white text-center text-center font-light leading-relaxed">
        I&apos;m a passionate and driven self-taught <span className="font-medium">software developer</span> from Sweden
        specializing in <span className="font-medium">front-end development</span> and{' '}
        <span className="font-medium">design</span>. I create professional web applications and design systems.
      </h3>
    </div>
  </div>
);

export default Landing;

const Home: NextPage = () => {
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
