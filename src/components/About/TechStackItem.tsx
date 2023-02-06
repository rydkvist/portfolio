import Image from 'next/image';
import { TechStackType } from './TechStack';

export const TechStackItem = ({ value, imageSrc }: TechStackType) => {
  return (
    <li className={`flex flex-col items-center px-4 py-2`}>
      <div className={`w-16 h-16 overflow-hidden rounded-md mb-2 relative`}>
        <Image src={`/images/technologies/${imageSrc}.png`} alt={imageSrc} layout="fill" objectFit="contain" priority />
      </div>
      <span style={{ maxWidth: '0.75rem', display: 'flex', justifyContent: 'center' }}>{value}</span>
    </li>
  );
};
