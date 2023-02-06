import { Description } from '../Description';
import { Heading } from '../Heading';
import { TechStackItem } from './TechStackItem';

export type TechStackType = {
  value: string;
  imageSrc: string;
};

const webDevTechnologies: Array<TechStackType> = [
  { value: 'TypeScript', imageSrc: 'TypeScript' },
  { value: 'JavaScript', imageSrc: 'JavaScript' },
  { value: 'React', imageSrc: 'React' },
  { value: 'HTML5', imageSrc: 'HTML5' },
  { value: 'CSS3', imageSrc: 'CSS3' },
];

const appDevTechnologies: Array<TechStackType> = [
  { value: 'Swift', imageSrc: 'Swift' },
  { value: 'SwiftUI', imageSrc: 'SwiftUI' },
  { value: 'React Native', imageSrc: 'ReactNative' },
];

export const TechStack = () => {
  return (
    <>
      <Heading as="h2">My Tech Stack</Heading>

      <Description>Web Development</Description>
      <ul className="flex flex-row justify-center flex-wrap mb-8">
        {webDevTechnologies.map(technology => (
          <TechStackItem key={technology.value} {...technology} />
        ))}
      </ul>

      <Description>App Development</Description>
      <ul className="flex flex-row justify-center flex-wrap">
        {appDevTechnologies.map(technology => (
          <TechStackItem key={technology.value} {...technology} />
        ))}
      </ul>
    </>
  );
};
