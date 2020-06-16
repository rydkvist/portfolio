import React, { useState } from "react";
import styled from "styled-components/macro";
import { Switch, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./home";
import { Resume } from "./resume";
import { Contact } from "./contact";
import { Error } from "./error";
import { Stocks } from "./stocks";
import { Footer } from "./components/Footer";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #121212;
`;

const Main = styled.section<any>`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const handleToggleNavigation = (isOpen: boolean) =>
    setIsMobileNavigationOpen(isOpen);

  return (
    <AppWrapper>
      <NavigationBar onToggle={handleToggleNavigation} />
      <Main role="main" visible={!isMobileNavigationOpen}>
        <Route component={scrollToTop} />
        <Switch>
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/stocks" component={() => <Stocks />} />
          <Route exact path="/resume" component={() => <Resume />} />
          <Route exact path="/contact" component={() => <Contact />} />
          <Route exact path="/404" component={() => <Error />} />
          <Route exact path="/" component={() => <Home />} />
        </Switch>
        {!isMobileNavigationOpen && <Footer />}
      </Main>
    </AppWrapper>
  );
};

export default App;
