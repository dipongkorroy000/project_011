import axios from "axios";
import React from "react";
import { Link } from "react-router";

const Artifact = ({ n }) => {
  const { _id, name, image, short_description, artifact_name, discovered_by } =
    n;

  const handleDelete = (id) => {
    axios
      .delete(
        `https://assignment-011-server-side.vercel.app/artifact/delete/${id}`,
        id
      )
      .then((res) => console.log(res));
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border">
      <figure>
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{short_description}</p>
        <p>{artifact_name}</p>
        <p>{discovered_by}</p>
        <div className="card-actions justify-end">
          <Link to={`/updateCart/${_id}`} className="btn btn-primary">
            Update
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-warning">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Artifact;
