import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="text-center mt-1">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    navigate("/login");
    return;
  } else {
    return children;
  }
};

export default PrivateRoute;
