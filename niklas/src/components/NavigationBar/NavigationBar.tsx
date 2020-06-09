import React from "react";
import styled from "styled-components/macro";
import logo from "../../logo.svg";

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const NavigationBar = () => {
  return (
    <StyledHeader>
      <h1>Niklas Rydkvist</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </StyledHeader>
  );
};

export default NavigationBar;
