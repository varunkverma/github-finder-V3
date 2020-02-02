import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar.component";
import Home from "./components/pages/home.component";
import UserProfile from "./components/users/user-profile/user-profile.component";
import Alert from "./components/alert/alert.component";
import About from "./components/pages/About.component";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import PageNotFound from "./components/pages/page-not-found.component";

import "./App.css";

const App = () => {
  let website =
    process.env.NODE_ENV === "production" ? "/github-finder-V3" : "";
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path={`${website}/`} component={Home} />
                <Route exact path={`${website}/about`} component={About} />
                <Route
                  exact
                  path={`${website}/user/:login`}
                  component={UserProfile}
                />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
