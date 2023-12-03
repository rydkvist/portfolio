import Image from 'next/image';
import { Myself } from '../components/About/Myself';
import { MoreTech } from '../components/About/MoreTech';
import { TechStack } from '../components/About/TechStack';
import { Heading } from '../components/Heading';
import { PageWrapper } from '../components/PageWrapper';

const Landing = () => {
  return (
    <PageWrapper>
      <Heading as="h1" className="text-center">
        Hi! I&apos;m Niklas 👋🏼
      </Heading>

      <ProfilePicture />
      <Myself />
      <TechStack />
      <MoreTech />
    </PageWrapper>
  );
};

const ProfilePicture = () => {
  return (
    <div className="w-40 md:w-48 h-40 md:h-48 overflow-hidden rounded-full border-black dark:border-white border relative">
      <Image src="/images/about/Niklas.png" alt="Picture of Niklas Rydkvist" layout="fill" objectFit="cover" priority />
    </div>
  );
};

export default Landing;
