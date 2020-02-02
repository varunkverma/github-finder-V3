import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  // initializing context, using hook
  const githubContext = useContext(GithubContext);
  const { users, clearUsers } = githubContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState("");

  const handleOnChangeText = e => setText(e.target.value);

  const handleOnSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a username", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="form">
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleOnChangeText}
          placeholder="Search User..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
