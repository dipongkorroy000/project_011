import React from "react";
import { BiSolidDislike } from "react-icons/bi";

const Item = ({ n, deleteIdCart }) => {
  const { _id, name, image, short_description, artifact_name, discovered_by } = n;

  return (
    <div className="shadow-sm border flex flex-col items-center border-gray-600 mx-auto p-3 rounded-xl">
      <figure>
        <img className="h-50 rounded-xl" src={image} alt="Movie" />
      </figure>
      <div className="mt-2">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <button
            onClick={() => deleteIdCart(_id)}
            className="text-sm border cursor-pointer rounded px-3 py-1 text-blue-500 font-bold"
          >
            Liked
          </button>
        </div>
        <p className="text-sm">{short_description}</p>
        <p className="text-sm">{artifact_name}</p>
        <p className="text-sm">{discovered_by}</p>
      </div>
    </div>
  );
};

export default Item;
