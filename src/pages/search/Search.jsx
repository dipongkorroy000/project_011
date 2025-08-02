import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import FindArtifact from "../allArtifacts/FindArtifact";
import { Helmet } from "react-helmet-async";

const Search = () => {
  const { searchText } = useContext(AuthContext);
  const data = useLoaderData();

  const artifact = data.filter((n) => n.name.toLowerCase() === searchText.toLowerCase());

  return (
    <>
      <Helmet>
        <title>Artifact | Search</title>
      </Helmet>
      <section className="my-10 w-10/12 mx-auto">
        <h2 className="text-center text-3xl mb-3">Searching Task</h2>
        <div className="text-center font-semibold text-2xl">
          {searchText === "" && <h2 className="text-yellow-300">Please type Name</h2>}
        </div>
        <div>
          {searchText && (
            <>
              {artifact.map((n) => (
                <FindArtifact key={n._id} n={n}></FindArtifact>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
