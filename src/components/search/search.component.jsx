import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUser, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState("");

  const handleOnChangeText = e => setText(e.target.value);

  const handleOnSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a username", "light");
    } else {
      searchUser(text);
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
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};
export default Search;
