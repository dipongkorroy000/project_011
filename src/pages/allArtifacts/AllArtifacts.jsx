import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthContext";
import FindArtifact from "./FindArtifact";
import { Helmet } from "react-helmet-async";

const AllArtifacts = () => {
  const { user, loading } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: artifacts = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["artifacts", user?.email, searchTerm],
    queryFn: async () => {
      const url = searchTerm
        ? `https://assignment-011-server-side.vercel.app/artifacts/search?name=${encodeURIComponent(searchTerm)}`
        : `https://assignment-011-server-side.vercel.app/artifacts`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch artifacts");
      return res.json();
    },
    enabled: !loading, // run after auth ready
  });

  // if (loading || isLoading) {
  //   return (
  //     <div className="w-fit mx-auto">
  //       <span className="loading loading-bars loading-xs"></span>
  //     </div>
  //   );
  // }

  if (isError) {
    return <div className="text-center text-red-500">Error loading artifacts: {error.message}</div>;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value.trim();

    if (!e.target.search.value) return;

    setSearchTerm(search);
    refetch();
  };

  return (
    <>
      <Helmet>
        <title>Artifact | All Artifacts</title>
      </Helmet>
      <section className="my-10 w-10/12 mx-auto">
        <div className="w-full flex items-center justify-center my-5">
          <form onSubmit={handleSearch}>
            <input
              name="search"
              type="text"
              placeholder="Search Artifacts"
              className="input input-bordered w-24 md:w-auto"
            />
          </form>
          <button type="submit" className="btn">
            Search
          </button>
        </div>

        {loading | isLoading ? (
          <div className="w-fit mx-auto">
            <span className="loading loading-bars loading-xs"></span>
          </div>
        ) : (
          <div className="grid grid-cols-3 max-lg:grid-cols-1 max-2xl:grid-cols-2 gap-5 ">
            {artifacts.length > 0 ? (
              artifacts.map((n) => <FindArtifact n={n} key={n._id} />)
            ) : (
              <p className="col-span-3 text-center text-gray-500">No artifacts found</p>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default AllArtifacts;
