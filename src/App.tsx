import React, { useState, Suspense, lazy } from "react";
import styled from "styled-components/macro";
import { Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./home";
import { Contact } from "./contact";
import { Stocks } from "./stocks";
import { Resume } from "./resume";
import { homeURL, contactURL } from "./config";

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
          <Route exact path={homeURL} component={() => <Home />} />
          {/* Maybe get creative, and remove contact, have one pager, but with mobile navigation that only show contacts/social media links? */}
          <Route exact path={contactURL} component={() => <Contact />} />
          <Route exact path="*" component={() => <Redirect to={homeURL} />} />
          {/* <Route exact path="/stocks" component={() => <Stocks />} /> */}
          {/* <Route exact path="/resume" component={() => <Resume />} /> */}
        </Switch>
        <Footer />
      </Main>
    </Suspense>
  );
};

export default App;
