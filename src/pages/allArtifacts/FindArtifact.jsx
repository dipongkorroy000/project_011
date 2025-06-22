import React, { useContext } from "react";
import { BiSolidDislike } from "react-icons/bi";
import { Link, useNavigate } from "react-router";
import { saveId } from "../../saveLocalStorage/saveIdLocalStorage";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const FindArtifact = ({ n }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { _id, name, image, discovered_by } = n;

  const addLikeTask = (id) => {
    if (!user) {
      navigate("/login");
      return;
    }
    saveId(id);
    toast("Add this task your favorite page!");
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
            color={"blue"}
          />
        </div>
        <p>{discovered_by}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${n._id}`} className="btn btn-primary">
            Watch
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FindArtifact;
