import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const userData = { name, photo };

    axios
      .patch(`http://localhost:3100/userUpdate?email=${user.email}`, userData, { withCredentials: true })
      .then((res) => {
        if (res.data.modifiedCount) {
          toast("Profile Update successfully");
          navigate(`/profile/${user?.email}`);
        } else {
          Swal.fire({
            title: "The Problem?",
            text: "That thing is still around?",
            icon: "question",
          });
        }
      });
  };

  if (loading) {
    return (
      <div className="w-fit mx-auto">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Update Info</h1>
        <form onSubmit={handleUpdate} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Enter Your Name" required />

          <label className="label">Photo</label>
          <input type="url" name="photo" className="input" placeholder="Enter Photo URL" required />

          <button type="submit" className="btn btn-neutral mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
