import React, { useState, Suspense, lazy } from "react";
import styled from "styled-components/macro";
import { Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./home";
import { Contact } from "./contact";
import { Stocks } from "./stocks";
import { Resume } from "./resume";

const NavigationBar = lazy(
  () => import("./components/NavigationBar/NavigationBar")
);

const Main = styled.section<any>`
  height: 100%;
  display: block;
`;

const App = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

  return (
    <Suspense fallback={<></>}>
      <Main role="main">
        <NavigationBar />
        <Route component={scrollToTop} />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/contact" component={() => <Contact />} />
          <Route exact path="*" component={() => <Redirect to="/" />} />
          {/* <Route exact path="/stocks" component={() => <Stocks />} /> */}
          {/* <Route exact path="/resume" component={() => <Resume />} /> */}
        </Switch>
        <Footer />
      </Main>
    </Suspense>
  );
};

export default App;
