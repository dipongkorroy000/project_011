import React from "react";
import { useLoaderData } from "react-router";

const ArtifactDetails = () => {
  const data = useLoaderData();

  return (
    <section className="my-20 pt-10 xl:w-6x md:w-3xl mx-auto max-xl:mx-20 max-md:mx-5">
      {data ? (
        <>
          <div className="flex gap-5">
            <img className="w-72 rounded-2xl mb-3" src={`${data.image}`} alt="" />

            <div>
              <h2 className="font-bold text-lg mb-1">{data.name}</h2>
              <h2>
                <span className="font-bold text-sm">Artifact type</span> : {data.artifact_type}
              </h2>
              <h2>
                <span className="font-bold text-sm">Created At</span> : {data.created_at}
              </h2>
              <h2>
                <span className="font-bold text-sm">Discovered by</span> : {data.discovered_by}
              </h2>
              <h2>
                <span className="font-bold text-sm">Location</span> : {data.present_location}
              </h2>
            </div>
          </div>

          <div className="">
            <p>
              <span className="font-bold">Context</span> : {data.historical_context}
            </p>
            <p>
              <span className="font-bold">Description</span> : {data.short_description}
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ArtifactDetails;
