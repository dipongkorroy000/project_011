import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Artifact from "./Artifact";

const MyArtifacts = () => {
  const [artifacts, setArtifacts] = useState();
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://assignment-011-server-side.vercel.app/artifact?email=${user?.email}`, {credentials: "include", method: "GET"})
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
    <section className="my-5 w-5/6 mx-auto">
      <div className="hero bg-base-200 min-h-fit mb-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold mb-2">My Submitted Cart</h1>
            <p className="max-md:text-sm">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 max-2xl:grid-cols-2 gap-5 w-fit mx-auto mb-10">
        {artifacts?.map((n) => (
          <Artifact n={n} key={n._id}></Artifact>
        ))}
      </div>

      {artifacts?.length === 0 && <h2 className="font-bold text-center text-xl text-yellow-400">Not Found Any Data</h2>}
    </section>
  );
};

export default MyArtifacts;
