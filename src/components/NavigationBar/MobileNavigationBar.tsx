import React, { useState } from "react";
import theme from "../../styles";
import { NavLink } from "react-router-dom";
import { homeURL, contactURL } from "../../config";

const activeStyle = {
  fontWeight: 500,
};

const MobileNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const StyledNavLink = ({ href, title, iconName }: any) => (
    <li className="inline-flex align-center justify-center m-0">
      <NavLink
        className="flex flex-row align-center justify-center text-2xl p-0 py-6 w-full text-white text-center hover:text-opacity-75"
        style={{ fontFamily: "BlinkMacSystemFont" }}
        activeStyle={activeStyle}
        to={href}
        title={title}
        onClick={closeMenu}
      >
        <i className={`${iconName} mr-4 self-center`} />
        {title}
      </NavLink>
    </li>
  );

  return (
    <>
      <header
        className="sticky flex justify-around items-center py-4 px-2 z-10"
        style={{ backgroundColor: theme.colors.customBlack }}
      >
        <NavLink className="inline-flex" to={homeURL} title="Home">
          <img
            className="w-12 h-12 border rounded-full mr-4"
            src="/favicon.ico"
            alt="Niklas Rydkvist"
          />
          <span className="text-xl self-center font-medium text-white uppercase tracking-widest m-0">
            Niklas Rydkvist
          </span>
        </NavLink>
        <button
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen ? true : false}
          aria-controls="navigation"
          onClick={onToggleMenu}
          className={`hamburger hamburger--spring p-1 ${
            isOpen ? "is-active" : ""
          }`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </header>
      <nav
        role="navigation"
        className="justify-center z-50 absolute bg-white w-full h-full"
        style={{
          backgroundColor: theme.colors.lightBlack,
          transition: "all 0.3s ease",
          visibility: isOpen ? "visible" : "hidden",
          height: isOpen ? "100%" : "0%",
          opacity: isOpen ? "1000%" : "0%",
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
      </nav>
    </>
  );
};

export default MobileNavigationBar;
