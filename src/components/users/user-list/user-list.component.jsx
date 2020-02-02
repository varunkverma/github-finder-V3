import React, { Fragment, useContext } from "react";
import GithubContext from "../../../context/github/githubContext";

import UserItem from "../user-item/user-item.component";
import Spinner from "../../spinner/spinner.component";

const UserList = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div style={userListStyle}>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

const userListStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default UserList;
