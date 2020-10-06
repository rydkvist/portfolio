import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { useMediaMax } from "../../utils";
import theme from "../../styles";
import MobileNavigationBar from "./MobileNavigationBar";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 1.5em 0;
  background-color: #121212;
  z-index: 1000;
`;

const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;
`;

const LogoLink = styled(NavLink)`
  text-decoration: none;
  display: inline-flex;
`;

const LogoImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const LogoText = styled.p`
  align-self: center;
  font-size: 1.25em;
  font-weight: 400;
  letter-spacing: 2.5px;
  color: ${theme.colors.white};
  text-transform: uppercase;
  margin: 0;
`;

const NavigationList = styled.ul<any>`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavigationListItem = styled.li`
  margin: 0;
  margin-right: 3em;
  display: inline-flex;
  align-items: center;
  &:last-child {
    margin-right: 0px;
  }
`;

const NavigationLink = styled(NavLink)`
  color: ${theme.colors.white};
  padding: 2px;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  &:active,
  &:focus {
    text-shadow: 0 0 1px white, 0 0 1px white;
  }
  &:hover,
  &:focus {
    border-bottom: 1px solid white;
  }
`;

const activeStyle = {
  textShadow: `0 0 1px white, 0 0 1px white`,
};

const NavigationBar = () => {
  const isMobile = useMediaMax(theme.breakpoints.md);

  return isMobile ? (
    <MobileNavigationBar />
  ) : (
    <StyledHeader>
      <StyledNavigation role="navigation">
        <LogoLink to="/home" title="Niklas Rydkvist">
          <LogoImage src="/favicon.ico" alt="Home" />
          <LogoText>Niklas Rydkvist</LogoText>
        </LogoLink>
        <NavigationList>
          <NavigationListItem>
            <NavigationLink activeStyle={activeStyle} to="/home" title="Home">
              Home
            </NavigationLink>
          </NavigationListItem>
          {/* <NavigationListItem>
            <NavigationLink
              activeStyle={activeStyle}
              to="/stocks"
              title="Stocks"
            >
              Stocks
            </NavigationLink>
          </NavigationListItem> */}
          {/* <NavigationListItem>
            <NavigationLink
              activeStyle={activeStyle}
              to="/resume"
              title="Resume"
            >
              Resume
            </NavigationLink>
          </NavigationListItem> */}
          <NavigationListItem>
            <NavigationLink
              activeStyle={activeStyle}
              to="/contact"
              title="Contact"
            >
              Contact
            </NavigationLink>
          </NavigationListItem>
        </NavigationList>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default NavigationBar;
