import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Profile = () => {
  const navigate = useNavigate();
  const userData = useLoaderData();
  const { userDelete } = useContext(AuthContext);

  const handleDelete = () => {
    console.log("handleDelete");

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
        userDelete()
          .then(() => {
            navigate("/");
          })
          .catch((error) => console.log(error));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <section className="w-3/5 mx-auto my-10">
      <div className="shadow-2xl w-full border rounded-2xl p-5">
        <div className="flex justify-between">
          <h2 className="text-blue-500 my-auto ">Profile</h2>
        </div>
        <div className="space-y-2">
          <h2>{userData.name}</h2>
          <h2>{userData.email}</h2>
          <img src={userData?.photo} alt="Your Photo" />
        </div>
        <button onClick={handleDelete} className="btn btn-warning my-5">
          Delete Profile
        </button>
      </div>
    </section>
  );
};

export default Profile;
