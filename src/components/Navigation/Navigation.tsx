import React from 'react';
import Link from 'next/link';
import { APP_HOME_URL, APP_CONTACT_URL, APP_PROJECTS_URL } from '../../config';
import theme from '../../styles';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { MobileNavigation } from './MobileNavigation';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const Navigation = () => {
  const isMobile = useMediaQuery('mobile');
  const router = useRouter();

  const StyledNavLink = ({ href, title }: any) => (
    <li className="flex items-center m-0 mr-8">
      <Link href={href} passHref>
        <a
          className={`border-b border-transparent hover:border-white ${
            router.asPath == href ? 'text-white border-white' : ''
          }`}
          style={{ padding: '0rem 0.125rem', fontFamily: 'Source Sans Pro' }}
          target="_parent"
          title={title}
        >
          {title}
        </a>
      </Link>
    </li>
  );

  return isMobile ? (
    <MobileNavigation />
  ) : (
    <header
      className="m-0 py-4"
      style={{
        color: theme.colors.white,
      }}
    >
      <nav className="relative flex justify-around items-center" role="navigation">
        <Link href={APP_HOME_URL} passHref>
          <a
            className="inline-flex text-white hover:text-opacity-75"
            title="Home"
            role="img"
            aria-label="Brand Logo – Niklas Rydkvist"
          >
            <div className="w-12 h-12 border rounded-full mr-4 relative overflow-hidden">
              <Image
                src="/images/NiklasVaxholm.png"
                alt="Brand Logo – Niklas Rydkvist"
                layout="fill"
                objectFit="cover"
                objectPosition={'0% 10%'}
              />
            </div>
            <span className="text-xl self-center uppercase tracking-widest">Niklas Rydkvist</span>
          </a>
        </Link>

        <ul className="flex flex-row m-0 p-0 list-none">
          <StyledNavLink href={APP_HOME_URL} title="Home" />
          <StyledNavLink href={APP_PROJECTS_URL} title="Projects" />
          <StyledNavLink href={APP_CONTACT_URL} title="Contact" />
        </ul>
      </nav>
    </header>
  );
};
