import React, { Fragment } from "react";
import Search from "../search/search.component";
import UserList from "../users/user-list/user-list.component";

const Home = () => (
  <Fragment>
    <Search />
    <UserList />
  </Fragment>
);

export default Home;
