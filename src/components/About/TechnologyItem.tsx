import Image from 'next/image';

type TechnologyItemProps = {
  value: string;
  technologySourceImage: string;
  className?: string;
};

export const TechnologyItem = ({ value, technologySourceImage, className }: TechnologyItemProps) => {
  return (
    <li className={`flex flex-col items-center px-4 py-2`}>
      <div className={`w-16 h-16 overflow-hidden rounded-md mb-2 relative ${className}`}>
        <Image
          src={`/images/technologies/${technologySourceImage}.png`}
          alt={technologySourceImage}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <span style={{ maxWidth: '0.75rem', display: 'flex', justifyContent: 'center' }}>{value}</span>
    </li>
  );
};
