import React, { useState, Suspense, lazy } from "react";
import styled from "styled-components/macro";
import { Switch, Route } from "react-router-dom";
import { Home } from "./home";
import { Resume } from "./resume";
import { Contact } from "./contact";
import { Error } from "./error";
import { Stocks } from "./stocks";
import { Footer } from "./components/Footer";

const NavigationBar = lazy(() =>
  import("./components/NavigationBar/NavigationBar")
);

const Main = styled.section<any>`
  display: block;
  height: 100%;
  background-color: #121212;
`;

const App = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

  return (
    <Suspense fallback={"Loading ..."}>
      <NavigationBar />
      <Main role="main">
        <Route component={scrollToTop} />
        <Switch>
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/stocks" component={() => <Stocks />} />
          <Route exact path="/resume" component={() => <Resume />} />
          <Route exact path="/contact" component={() => <Contact />} />
          <Route exact path="/404" component={() => <Error />} />
          <Route exact path="/" component={() => <Home />} />
        </Switch>
        <Footer />
      </Main>
    </Suspense>
  );
};

export default App;
