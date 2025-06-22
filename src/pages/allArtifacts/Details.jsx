import React from "react";
import { useLoaderData } from "react-router";

const Details = () => {
  const task = useLoaderData();

  const {
    name,
    artifact_email,
    artifact_name,
    discover_at,
    discovered_by,
    historical_context,
    present_location,
    image,
    short_description,
  } = task;

  return (
    <div className="card bg-base-100 w-fit shadow-xl mx-auto border border-gray-500 my-10">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2>{name}</h2>
        <h2 className="card-title text-red-400">
          {artifact_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{short_description}</p>
        <p className="text-lg">Location : {present_location}</p>
        <p className="text-lg">Email : {artifact_email}</p>
        <p className="text-lg">Historical Context : {historical_context}</p>
        <p className="text-lg">Description : {short_description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{discover_at}</div>
          <div className="badge badge-outline">{discovered_by}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
