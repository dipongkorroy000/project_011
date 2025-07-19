import React, { Suspense, useContext, useEffect, useState } from "react";
import User from "./log/User";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logoutUser, setSearchText, loading } = useContext(AuthContext);

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      document.querySelector("html").setAttribute("data-theme", "light");
    } else {
      document.querySelector("html").setAttribute("data-theme", "dark");
    }
  }, [theme]);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    navigate("/search");
    setSearchText(search);
  };

  if (loading) {
    return (
      <div className="w-fit mx-auto">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />{" "}
          </svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allArtifact">All Artifacts</NavLink>
          </li>
          <li>
            <NavLink to={`/addArtifact/${user?.email}`}>Add Artifacts</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <a onClick={() => setTheme(!theme)} className="btn btn-ghost text-xl">
          Historical Artifacts
        </a>
      </div>

      <div className="flex gap-2 items-center">
        <form onSubmit={handleSearch} action="">
          <input
            typeof="submit"
            name="search"
            type="text"
            placeholder="Type Name & press Enter"
            className="input input-bordered w-24 md:w-auto"
          />
        </form>

        {!user ? (
          <NavLink to="/login" className="font-semibold btn-ghost btn">
            Login
          </NavLink>
        ) : (
          <User user={user} logoutUser={logoutUser}></User>
        )}
      </div>
    </div>
  );
};

export default Navbar;
