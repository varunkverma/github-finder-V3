import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar.component";
import UserList from "./components/users/user-list/user-list.component";
import UserProfile from "./components/users/user-profile/user-profile.component";
import Search from "./components/search/search.component";
import Alert from "./components/alert/alert.component";
import About from "./components/pages/About.component";
import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
  const [alert, setAlert] = useState(null);

  // set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <UserList />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={UserProfile} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
