import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import FindArtifact from "../allArtifacts/FindArtifact";

const Search = () => {
  const { searchText } = useContext(AuthContext);
  const data = useLoaderData();

  const artifact = data.filter(
    (n) => n.artifact_name.toLowerCase() === searchText.toLowerCase()
  );

  return (
    <section className="my-10 w-10/12 mx-auto">
      <div className="text-center font-bold text-2xl">
        {searchText === "" && <h2 className="text-yellow-300">Please type Artifacts Name</h2>}
      </div>
      <div>
        {searchText && (
          <>
            {artifact.map((n) => (
              <FindArtifact n={n}></FindArtifact>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Search;
