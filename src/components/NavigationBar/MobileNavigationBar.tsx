import React, { useState, useEffect } from "react";
import theme from "../../styles";
import { NavLink } from "react-router-dom";
import {
  homeURL,
  contactURL,
  personalEmail,
  personalPhoneNumber,
  twitterURL,
  linkedInURL,
  gitHubURL,
} from "../../config";

const MobileNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const StyledNavLink = ({ href, title, iconName }: any) => (
    <li className="inline-flex align-center justify-center m-0 border-b hover:bg-gray-200 hover:underline">
      <NavLink
        className="flex flex-row align-center justify-center text-2xl p-0 py-6 w-full text-center "
        to={href}
        activeClassName="bg-gray-200 underline"
        title={title}
        onClick={closeMenu}
      >
        {/* <i className={`${iconName} mr-4 self-center`} /> */}
        <span
          className="text-2xl font-light"
          style={{ fontFamily: "Source Sans Pro" }}
        >
          {title}
        </span>
      </NavLink>
    </li>
  );

  return (
    <>
      <header
        className="sticky flex justify-around items-center top-0 py-4 px-2 z-10 border-b"
        style={{
          backgroundColor: isOpen
            ? theme.colors.white
            : theme.colors.customBlack,
          transition: "all 0.3s ease",
        }}
      >
        <NavLink
          className="inline-flex"
          to={homeURL}
          onClick={closeMenu}
          title="Home"
        >
          <img
            className="w-12 h-12 border rounded-full mr-4"
            style={{
              borderColor: isOpen
                ? theme.colors.customBlack
                : theme.colors.white,
              transition: "all 0.3s ease",
            }}
            src="/favicon.ico"
            alt="Niklas Rydkvist"
          />
          <span
            className="text-xl self-center font-medium uppercase tracking-widest m-0"
            style={{
              color: isOpen ? theme.colors.customBlack : theme.colors.white,
              transition: "all 0.3s ease",
            }}
          >
            Niklas Rydkvist
          </span>
        </NavLink>
        <button
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen ? true : false}
          aria-controls="navigation"
          onClick={onToggleMenu}
          className={`hamburger hamburger--spring px-1 py-2 ${
            isOpen ? "is-active" : ""
          }`}
          style={{
            color: isOpen ? theme.colors.customBlack : theme.colors.white,
            transition: "all 0.3s ease",
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
        className="flex flex-col items-center z-50 fixed overflow-y-hidden pb-auto bg-white w-full"
        style={{
          fontFamily: "Source Sans Pro",
          transition: "all 0.3s ease",
          visibility: isOpen ? "visible" : "hidden",
          height: isOpen ? "100%" : "0%",
          opacity: isOpen ? "100%" : "0%",
          color: isOpen ? theme.colors.customBlack : theme.colors.white,
        }}
      >
        <ul className="relative flex flex-col m-0 p-0 list-none w-full">
          <StyledNavLink href={homeURL} title="Home" iconName="fa fa-home" />
          <StyledNavLink
            href={contactURL}
            title="Contact"
            iconName="fa fa-envelope-o"
          />
        </ul>

        <ul className="flex flex-row justify-center m-0 mt-8 list-none w-full p-8">
          <li className="mr-2">
            <a
              className="p-4 text-2xl hover:opacity-75"
              href={linkedInURL}
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
              href={gitHubURL}
              title="GitHub – Nojze"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-lg" />
            </a>
          </li>
          <li className="ml-2">
            <a
              className="p-4 text-2xl hover:opacity-75"
              href={twitterURL}
              title="Twitter – @Niklaass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-lg" />
            </a>
          </li>
        </ul>
        <ul className="flex flex-col items-center justify-center m-0 list-none w-full p-8 pt-0">
          <li className="mb-4">
            <a
              className="text-2xl p-2 font-light hover:opacity-75"
              href={`mailto:${personalEmail}`}
              title={personalEmail}
            >
              {personalEmail}
            </a>
          </li>
          <li>
            <a
              className="text-2xl p-2 font-light hover:opacity-75"
              href={`tlf://${personalPhoneNumber}`}
              title={personalPhoneNumber}
            >
              {personalPhoneNumber}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavigationBar;
