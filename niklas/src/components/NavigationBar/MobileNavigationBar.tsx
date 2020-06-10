import React, { useState } from "react";
import styled from "styled-components/macro";
import { useMediaMax } from "../../utils";
import theme from "../../styles";

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

const MenuToggler = styled.button`
  cursor: pointer;
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
`;

const NavigationList = styled.ul<any>`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
  ${(props) => props.isMobile && `flex-direction: column;`}
  ${(props) =>
    props.isOpen && props.isMobile
      ? `visibility:hidden`
      : `visibility:visible;`}
`;

const NavigationListItem = styled.li`
  margin: 0;
`;

const NavigationLink = styled.a``;

const LogoLink = styled.a`
  font-size: 32px;
  font-weight: 700;
  color: white;
`;

const MobileNavigationBar = () => {
  const isMobile = useMediaMax(theme.breakpoints.md);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledNavigation role="navigation">
        <LogoLink>Niklas Rydkvist</LogoLink>
        {isMobile && (
          <MenuToggler
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen ? true : false}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <p>OPEN</p> : <p>CLOSED</p>}
          </MenuToggler>
        )}
        <NavigationList isMobile={isMobile} isOpen={isOpen}>
          <NavigationListItem>
            <NavigationLink href="/about">About Me</NavigationLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavigationLink href="/contact">Contact</NavigationLink>
          </NavigationListItem>
        </NavigationList>
      </StyledNavigation>
    </StyledHeader>
  );
};

export default MobileNavigationBar;
