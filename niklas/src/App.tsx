import React from "react";
import styled from "styled-components/macro";
import { Switch, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./home";
import { Contact } from "./contact";
import { Error } from "./error";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.section<any>`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

  return (
    <AppWrapper>
      <NavigationBar />
      <Main role="main">
        <Route component={scrollToTop} />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/contact" component={() => <Contact />} />
          <Route exact path="/404" component={() => <Error />} />
        </Switch>
      </Main>
    </AppWrapper>
  );
};

export default App;
