import React from "react";
import { BiSolidDislike } from "react-icons/bi";
import { Link } from "react-router";
import { saveId } from "../../saveLocalStorage/saveIdLocalStorage";
import Swal from "sweetalert2";

const Artifact = ({ n }) => {
  const { _id, name, image, discovered_by } =
    n;

  const addLikeTask = (id) => {
    saveId(id);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border border-gray-500">
      <figure>
        <img className="h-28" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <BiSolidDislike
            onClick={() => addLikeTask(_id)}
            className="cursor-pointer"
            size={25}
            color={"white"}
          />
        </div>
        <p>{discovered_by}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${n._id}`} className="btn btn-primary">
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Artifact;
