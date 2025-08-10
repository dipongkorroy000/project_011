import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { saveId } from "../../saveLocalStorage/saveIdLocalStorage";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const task = useLoaderData();

  const {
    _id,
    name,
    artifact_email,
    artifact_name,
    discover_at,
    discovered_by,
    historical_context,
    present_location,
    image,
    short_description,
    liked,
  } = task;

  const handleLike = async (id) => {
    await axios.patch(`https://assignment-011-server-side.vercel.app/artifactLiked/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        toast("You liked this artifact");
        saveId(id);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Artifact | Artifact Details</title>
      </Helmet>
      <div className="card w-3/5 max-md:w-fit shadow-lg mx-auto my-10 p-5 max-md:mx-8">
        <figure>{image && <img src={image} alt="Shoes" className="rounded-xl" />}</figure>
        <div className="card-body">
          <h2>{name}</h2>
          <h2 className="card-title text-red-400">
            {artifact_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{short_description}</p>
          <p className="text-sm">Location : {present_location}</p>
          <p className="text-ms">Email : {artifact_email}</p>
          <p className=" text-sm">
            <span className="font-bold">Historical Context</span> : {historical_context}
          </p>
          <p className="text-sm">
            <span className="font-bold">Description</span> : {short_description}
          </p>
          <div className=" flex items-center justify-between">
            <div className="flex gap-5">
              <p className="badge badge-outline">{discover_at}</p>
              <p className="badge badge-outline">{discovered_by}</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <button
                onClick={() => handleLike(_id)}
                className=" cursor-pointer text-blue-500 font-bold text-lg py-1 px-4 border-2 rounded-2xl"
              >
                Like
              </button>
              <p className="font-bold px-3 py-1.5 text-blue-500 rounded-full border-blue-500 border-2">{liked}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
