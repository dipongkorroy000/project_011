import React from "react";

const userAPI = (email) => {
  return fetch(
    `http://localhost:3100/user?email=${email}`,
    { credentials: "include", method: "GET" }
  );
};

export default userAPI;
