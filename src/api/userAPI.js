import React from "react";

const userAPI = (email) => {
  return fetch(
    `https://assignment-011-server-side.vercel.app/user?email=${email}`,
    { credentials: "include" }
  );
};

export default userAPI;
