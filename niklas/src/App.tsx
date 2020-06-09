import React from "react";
import "./App.css";
import styled from "styled-components/macro";
import { NavigationBar } from "./components/NavigationBar";

const StyledWrapper = styled.div``;

const App = () => {
  return (
    <StyledWrapper>
      <NavigationBar />
    </StyledWrapper>
  );
};

export default App;
