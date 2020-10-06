import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaMax } from "../../utils";
import theme from "../../styles";
import { homeURL, contactURL } from "../../config";
import MobileNavigationBar from "./MobileNavigationBar";

const activeStyle = {
  fontWeight: 600,
};

const StyledNavLink = ({ href, title }: any) => (
  <li className="flex items-center m-0 mr-8">
    <NavLink
      className="text-white border-b border-transparent hover:border-white"
      style={{ padding: "0.125rem", fontFamily: "BlinkMacSystemFont" }}
      activeStyle={activeStyle}
      to={href}
      title={title}
    >
      {title}
    </NavLink>
  </li>
);

const NavigationBar = () => {
  const isMobile = useMediaMax(theme.breakpoints.md);

  return isMobile ? (
    <MobileNavigationBar />
  ) : (
    <header
      className="sticky py-4 z-50"
      style={{ backgroundColor: theme.colors.customBlack }}
    >
      <nav
        className="relative flex justify-around items-center"
        role="navigation"
      >
        <NavLink className="inline-flex" to={homeURL} title="Home">
          <img
            className="w-12 h-12 border rounded-full mr-4"
            src="/favicon.ico"
            alt="Brand Logo – Niklas Rydkvist"
          />
          <span className="text-xl self-center font-medium text-white uppercase tracking-widest">
            Niklas Rydkvist
          </span>
        </NavLink>

        <ul className="flex flex-row m-0 p-0 list-none">
          <StyledNavLink href={homeURL} title="Home" />
          <StyledNavLink href={contactURL} title="Contact" />
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
