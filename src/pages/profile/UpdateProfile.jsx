import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [findingUser, setFindingUser] = useState({});
  const allUser = useLoaderData();
  const { user } = useContext(AuthContext);

  console.log('allUser',allUser)
  useEffect(() => {
    const findUser = allUser.find((n) => n.email === user.email);
    setFindingUser(findUser);
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = user.email;

    const userData = { email, name, photo };
    console.log(userData);

    if (!findingUser) {
      console.log("post data");
      axios
        .post("https://assignment-011-server-side.vercel.app/user", userData)
        .then(() => navigate(`/profile/${email}`));
    } else {
      console.log("update data", findingUser);

      axios
        .put(
          `https://assignment-011-server-side.vercel.app/user/${findingUser._id}`,
          userData
        )
        .then((res) => console.log(res), navigate(`/profile/${email}`));
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Update Info</h1>
        <form onSubmit={handleUpdate} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter Your Name"
            required
          />

          <label className="label">Photo</label>
          <input
            type="url"
            name="photo"
            className="input"
            placeholder="Enter Photo URL"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
