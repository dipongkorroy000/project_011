import React, { useContext, useEffect, useState } from "react";
import User from "./log/User";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
    const navigate = useNavigate();

  // Detect system theme on first load OR use saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Listen for system theme changes ONLY if user hasn’t picked a theme manually
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return; // Skip if manually set

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Apply theme to HTML tag & save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Manual toggle button
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };



  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md">
      <div className="flex justify-between items-center mx-10 my-3">
        {/* Drawer menu */}
        <div className="flex items-center">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/allArtifact">All Artifacts</NavLink>
                </li>
                <li>
                  <NavLink to="/addArtifact">Add Artifacts</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <span className="btn btn-ghost text-xl" onClick={navigate("/")}>
            Historical Artifacts
          </span>
        </div>

        {/* Right side: theme toggle + user */}
        <div className="flex items-center gap-8">
          {/* Theme toggle button */}
          <span className="cursor-pointer" onClick={toggleTheme}>
            {theme === "light" ? <MdOutlineDarkMode size={26} /> : <CiLight size={26} />}
          </span>

          {!user ? (
            <NavLink to="/login" className="font-semibold btn-ghost btn">
              Login
            </NavLink>
          ) : (
            <User user={user} logoutUser={logoutUser} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
