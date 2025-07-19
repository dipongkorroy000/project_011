import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Artifact = ({ n }) => {
  const navigate = useNavigate();
  const { _id, name, image, short_description, artifact_name, discovered_by } = n;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/myArtifact");
        axios.delete(`http://localhost:3100/artifact/delete/${id}`, id).then((res) => console.log(res));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="flex flex-col shadow-sm border border-gray-600 rounded-2xl p-5 items-center max-w-sm">
      <figure>
        <img className="w-56 rounded-2xl" src={image} alt="Movie" />
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
