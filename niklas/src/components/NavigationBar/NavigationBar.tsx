import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link, NavLink } from "react-router-dom";
import { useMediaMax } from "../../utils";
import theme from "../../styles";
import MobileNavigationBar from "./MobileNavigationBar";

const StyledHeader = styled.header`
  background-color: #20232a;
  position: sticky;
  top: 0;
`;

const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
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
`;

const NavigationLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.white};
  text-decoration: none;
  padding: 0 2px 1px 2px;
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

const LogoLink = styled(Link)`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1px;
  color: white;
  text-decoration: none;
`;

const NavigationBar = () => {
  const isMobile = useMediaMax(theme.breakpoints.md);
  const [isOpen, setIsOpen] = useState(false);

  return isMobile ? (
    <MobileNavigationBar />
  ) : (
    <StyledHeader>
      <StyledNavigation role="navigation">
        <LogoLink to="/">Niklas Rydkvist</LogoLink>
        <NavigationList>
          <NavigationListItem>
            <NavigationLink to="/contact">Contact</NavigationLink>
          </NavigationListItem>
        </NavigationList>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default NavigationBar;
