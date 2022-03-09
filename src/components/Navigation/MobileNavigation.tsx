import React, { useState, useEffect } from 'react';
import theme from '../../styles';
import {
  APP_HOME_URL,
  APP_CONTACT_URL,
  APP_PROJECTS_URL,
  PERSONAL_EMAIL,
  PERSONAL_PHONE_NUMBER,
  GITHUB_URL,
  LINKEDIN_URL,
} from '../../config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const router = useRouter();

  const StyledNavLink = ({ href, title, iconName }: any) => (
    <li className="inline-flex align-center justify-center m-0 border-b hover:underline">
      <Link href={href} passHref>
        <a
          onClick={closeMenu}
          title={title}
          className={`flex flex-row align-center justify-center text-2xl p-0 py-6 w-full text-center`}
          style={
            router.asPath === href
              ? { color: 'white', backgroundColor: theme.colors.cyanGreen30, textDecoration: 'underline' }
              : {}
          }
        >
          {/* <i className={`${iconName} mr-4 self-center`} /> */}
          <span className="text-2xl font-light" style={{ fontFamily: 'Source Sans Pro' }}>
            {title}
          </span>
        </a>
      </Link>
    </li>
  );

  return (
    <>
      <header
        className={`sticky flex justify-around items-center top-0 py-4 px-2 z-50`}
        style={{
          background: isOpen
            ? theme.colors.white
            : `linear-gradient(
            90deg,
            rgba(66, 171, 232, 1) 0%,
            rgba(58, 168, 180, 1) 50%,
            rgba(58, 180, 151, 1) 100%
          )`,
          transition: 'all 0.5s ease',
          borderBottom: `1px solid ${isOpen ? theme.colors.customWhite : theme.colors.transparent}`,
        }}
      >
        <Link href={APP_HOME_URL} passHref>
          <a
            onClick={closeMenu}
            title="Home"
            href={APP_HOME_URL}
            className="inline-flex text-white hover:text-opacity-75"
          >
            <div
              className="w-12 h-12 border rounded-full mr-4 relative overflow-hidden"
              style={{
                borderColor: isOpen ? theme.colors.customBlack : theme.colors.white,
                transition: 'all 0.5s ease',
              }}
            >
              <Image
                src="/images/NiklasVaxholm.png"
                alt="Brand Logo – Niklas Rydkvist"
                layout="fill"
                objectFit="cover"
                objectPosition={'0% 10%'}
              />
            </div>

            <span
              className="text-xl self-center uppercase tracking-widest m-0"
              style={{
                color: isOpen ? theme.colors.customBlack : theme.colors.white,
              }}
            >
              Niklas Rydkvist
            </span>
          </a>
        </Link>
        <button
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isOpen ? true : false}
          aria-controls="navigation"
          onClick={onToggleMenu}
          className={`hamburger hamburger--spring px-1 py-2 ${isOpen ? 'is-active' : ''}`}
          style={{
            color: isOpen ? theme.colors.customBlack : theme.colors.white,
            transition: 'all 0.5s ease',
          }}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner hamburger.is-active-dark hamburger-inner-dark"></span>
          </span>
        </button>
      </header>
      <nav
        role="navigation"
        className="flex flex-col items-center z-50 fixed overflow-y-hidden pb-auto bg-white w-full z-50"
        style={{
          fontFamily: 'Source Sans Pro',
          transition: 'all 0.5s ease',
          visibility: isOpen ? 'visible' : 'hidden',
          height: isOpen ? '100%' : '0%',
          opacity: isOpen ? '100%' : '0%',
          color: isOpen ? theme.colors.customBlack : theme.colors.white,
        }}
      >
        <ul className="relative flex flex-col m-0 p-0 list-none w-full">
          <StyledNavLink href={APP_HOME_URL} title="Home" iconName="fa fa-home" />
          <StyledNavLink href={APP_PROJECTS_URL} title="Projects" iconName="fa fa-home" />
          <StyledNavLink href={APP_CONTACT_URL} title="Contact" iconName="fa fa-envelope-o" />
        </ul>

        <ul className="flex flex-row justify-center m-0 mt-8 list-none w-full p-8">
          <li className="mr-2">
            <a
              className="p-4 text-2xl hover:opacity-75"
              href={LINKEDIN_URL}
              title="LinkedIn – Niklas Rydkvist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-lg" />
            </a>
          </li>
          <li>
            <a
              className="p-4 text-2xl hover:opacity-75"
              href={GITHUB_URL}
              title="GitHub – Nojze"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-lg" />
            </a>
          </li>
        </ul>
        <ul className="flex flex-col items-center justify-center m-0 list-none w-full p-8 pt-0">
          <li className="mb-4">
            <a
              className="text-2xl p-2 font-light hover:opacity-75"
              href={`mailto:${PERSONAL_EMAIL}`}
              title={PERSONAL_EMAIL}
            >
              {PERSONAL_EMAIL}
            </a>
          </li>
          <li>
            <a
              className="text-2xl p-2 font-light hover:opacity-75"
              href={`tel:${PERSONAL_PHONE_NUMBER}`}
              title={PERSONAL_PHONE_NUMBER}
            >
              {PERSONAL_PHONE_NUMBER}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
