import { Description } from '../Description';
import { Heading } from '../Heading';
import { TechStackItem } from './TechStackItem';

export type TechStackType = {
  value: string;
  imageSrc: string;
};

const webDevTechnologies: Array<TechStackType> = [
  { value: 'JavaScript', imageSrc: 'JavaScript' },
  { value: 'TypeScript', imageSrc: 'TypeScript' },
  { value: 'React', imageSrc: 'React' },
  { value: 'Next.js', imageSrc: 'Next' },
];

const appDevTechnologies: Array<TechStackType> = [
  { value: 'React Native', imageSrc: 'React' },
  { value: 'Swift', imageSrc: 'Swift' },
  { value: 'SwiftUI', imageSrc: 'SwiftUI' },
];

export const TechStack = () => {
  return (
    <>
      <Heading as="h2">My Tech Stack</Heading>

      <Description className="mt-8">Web Applications</Description>
      <ul className="flex flex-row justify-center gap-1 flex-wrap mb-8">
        {webDevTechnologies.map(technology => (
          <TechStackItem key={technology.value} {...technology} />
        ))}
      </ul>

      <Description>Mobile Applications</Description>
      <ul className="flex flex-row justify-center gap-1 flex-wrap">
        {appDevTechnologies.map(technology => (
          <TechStackItem key={technology.value} {...technology} />
        ))}
      </ul>
    </>
  );
};
