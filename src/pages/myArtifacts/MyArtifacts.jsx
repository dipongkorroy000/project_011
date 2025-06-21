import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Artifact from "./Artifact";

const MyArtifacts = () => {
  const [artifacts, setArtifacts] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://assignment-011-server-side.vercel.app/artifact?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setArtifacts(data);
      });
  }, [user]);

  return (
    <section className="my-10 w-10/12 mx-auto">
      <div className="hero bg-base-200 min-h-fit mb-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">My Submitted Cart</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 max-2xl:grid-cols-2 ">
        {artifacts?.map((n) => (
          <Artifact n={n} key={n._id}></Artifact>
        ))}
      </div>
    </section>
  );
};

export default MyArtifacts;
