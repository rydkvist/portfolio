import React, { useState } from "react";
import styled from "styled-components/macro";
import theme from "../../styles";
import { NavLink } from "react-router-dom";
import clearerNiklas from "../../assets/images/clearerNiklas.jpg";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 1em 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #121212;
  z-index: 1000;
`;

const MenuBurger = styled.button``;

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

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  z-index: 1;
  background-color: #121212;
  position: sticky;
  min-height: 90vh;
  top: 114px;
`;

const NavigationList = styled.ul<any>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavigationListItem = styled.li`
  margin: 0;
  margin-bottom: 3em;
  display: inline-flex;
  align-items: center;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const NavigationLink = styled(NavLink)`
  color: ${theme.colors.white};
  padding: 2px;
  text-decoration: none;
  font-size: 1.5em;
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

const MobileNavigationBar = ({ onToggle }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledHeader>
        <LogoLink to="/home" title="Home">
          <LogoImage src={clearerNiklas} alt="Niklas Rydkvist" />
          <LogoText>Niklas Rydkvist</LogoText>
        </LogoLink>
        <MenuBurger
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen ? true : false}
          aria-controls="navigation"
          onClick={() => {
            setIsOpen(!isOpen);
            onToggle(!isOpen);
          }}
          className={`hamburger hamburger--spring ${isOpen ? "is-active" : ""}`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </MenuBurger>
      </StyledHeader>
      {isOpen && (
        <StyledNavigation role="navigation">
          <NavigationList>
            <NavigationListItem>
              <NavigationLink
                activeStyle={activeStyle}
                to="/home"
                title="Home"
                onClick={() => {
                  setIsOpen(false);
                  onToggle(false);
                }}
              >
                Home
              </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationLink
                activeStyle={activeStyle}
                to="/stocks"
                title="Stocks"
                onClick={() => {
                  setIsOpen(false);
                  onToggle(false);
                }}
              >
                Stocks
              </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationLink
                activeStyle={activeStyle}
                to="/resume"
                title="Resume"
                onClick={() => {
                  setIsOpen(false);
                  onToggle(false);
                }}
              >
                Resume
              </NavigationLink>
            </NavigationListItem>
            <NavigationListItem>
              <NavigationLink
                activeStyle={activeStyle}
                to="/contact"
                title="Contact"
                onClick={() => {
                  setIsOpen(false);
                  onToggle(false);
                }}
              >
                Contact
              </NavigationLink>
            </NavigationListItem>
          </NavigationList>
        </StyledNavigation>
      )}
    </>
  );
};

export default MobileNavigationBar;
