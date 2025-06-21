import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../context/AuthContext";
const User = ({ logoutUser }) => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={userData.photo} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link to={`/profile/${userData?.email}`} className="justify-between">
            {userData.name}
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <Link to="/myArtifact">My Artifacts Route</Link>
        </li>
        <li>
          <Link to="/liked">Liked Artifacts Route</Link>
        </li>
        <li>
          <Link onClick={logoutUser} to="/">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default User;
