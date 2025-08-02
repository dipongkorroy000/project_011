import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import FindArtifact from "./FindArtifact";
import { Helmet } from "react-helmet-async";
// import { getIds } from "../../saveLocalStorage/saveIdLocalStorage";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://assignment-011-server-side.vercel.app/artifacts")
      .then((res) => res.json())
      .then((data) => {
        setArtifacts(data);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="w-fit mx-auto">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Artifact | All Artifacts</title>
      </Helmet>
      <section className="my-10 w-10/12 mx-auto">
        <div></div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 max-2xl:grid-cols-2 gap-5">
          {artifacts?.map((n) => (
            <FindArtifact n={n} key={n._id}></FindArtifact>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllArtifacts;
