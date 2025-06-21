import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Artifact from "./FindArtifact";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:3100/artifact")
      .then((res) => res.json())
      .then((data) => {
        setArtifacts(data);
      });
  }, [user]);

  return (
    <section className="my-10 w-10/12 mx-auto">
      <div></div>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 max-2xl:grid-cols-2 gap-5">
        {artifacts?.map((n) => (
          <Artifact n={n} key={n._id}></Artifact>
        ))}
      </div>
    </section>
  );
};

export default AllArtifacts;
