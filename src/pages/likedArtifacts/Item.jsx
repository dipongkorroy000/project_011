import React from "react";
import { BiSolidDislike } from "react-icons/bi";

const Item = ({ n, deleteIdCart }) => {
  const { _id, name, image, short_description, artifact_name, discovered_by } =
    n;

  return (
    <div className="card card-side bg-base-100 shadow-sm border">
      <figure>
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <BiSolidDislike
            onClick={() => deleteIdCart(_id)}
            className="cursor-pointer"
            size={25}
            color={"red"}
          />
        </div>
        <p>{short_description}</p>
        <p>{artifact_name}</p>
        <p>{discovered_by}</p>
      </div>
    </div>
  );
};

export default Item;
