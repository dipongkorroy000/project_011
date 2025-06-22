import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Artifact from "./FindArtifact";
// import { getIds } from "../../saveLocalStorage/saveIdLocalStorage";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const { user } = useContext(AuthContext);

  // const ids = getIds();

  useEffect(() => {
    fetch("https://assignment-011-server-side.vercel.app/artifact")
      .then((res) => res.json())
      .then((data) => {

        setArtifacts(data);
      });
  }, [user]);

  return (
    <section className="my-10 w-10/12 mx-auto">
      <div></div>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 max-2xl:grid-cols-2 gap-5 border-gray-700 border p-5">
        {artifacts?.map((n) => (
          <Artifact n={n} key={n._id}></Artifact>
        ))}
      </div>
    </section>
  );
};

export default AllArtifacts;
