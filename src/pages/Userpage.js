import React, { useState, useEffect } from "react";
import "./Userpage.css";

function Userpage() {
  const [users, setUsers] = useState([]); // To store the fetched users
  const [searchQuery, setSearchQuery] = useState(""); // To store the search query
  const [searchResults, setSearchResults] = useState([]); // To store the filtered search results

  useEffect(() => {
    fetchUsers(); // Fetch all users on page load
  }, []);

  // Function to fetch all users from the backend
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length >= 2) {
      searchUsers(query); // Call search function when query length is 2 or more
    } else {
      setSearchResults([]); // Clear search results when query length is less than 2
    }
  };

  // Function to search users based on the search query
  const searchUsers = async (query) => {
    try {
      const response = await fetch(
        `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${query}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.log("Error searching users:", error);
    }
  };

  // Function to handle reset button click
  const handleResetButtonClick = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="main-user">
      <div className="user-main">
        <h1 className="user-head">Users</h1>
        <div className="userwraper">
          <form className="userfilter-wraper">
            <input
              type="text"
              className="search-user"
              placeholder="Search By Name"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <input
              type="reset"
              className="reset-btn"
              value="Reset"
              onClick={handleResetButtonClick}
            />
          </form>
        </div>
        <div className="Userslist-head">
          <p className="userid">ID</p>
          <p className="useravtar">User Avatar</p>
          <p className="username">Full Name</p>
          <p className="userdob">DoB</p>
          <p className="usergender">Gender</p>
          <p className="c">Current Location</p>
        </div>
        {/* Render the users based on search results */}
        <div className="userlistmain"></div>
        {searchResults.length > 0
          ? searchResults.map((user) => (
              <div key={user.id} className="user-list">
                <p className="user-id">{user.id}</p>
                <img className="user-img" src={user.profilePic} alt={user.fullName} />
                <p className="full-name">{user.fullName}</p>
                <p className="user-dob">{user.dob}</p>
                <p className="user-gender">{user.gender}</p>
                <p className="user-location">{user.currentCity} {user.currentCountry}</p>

              </div>
            ))
          : users.map((user) => (
              <div key={user.id} className="user-user-list">
                <p className="user-id">{user.id}</p>
                <img className="user-img" src={user.profilePic} alt={user.fullName} />
                <p className="full-name">{user.fullName}</p>
                <p className="user-dob">{user.dob}</p>
                <p className="user-gender">{user.gender}</p>
                <p className="user-location"> {user.currentCity}{user.currentCountry}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Userpage;
