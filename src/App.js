import React, { useState, Fragment } from "react";
import axios from "axios";
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
  // const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Search github Users

  // clear users from state

  // set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // Get a single github user

  // Get users Repos
  const getUserRepos = async username => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );

      setRepos(response.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
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
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <UserProfile
                    {...props}
                    getUserRepos={getUserRepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
