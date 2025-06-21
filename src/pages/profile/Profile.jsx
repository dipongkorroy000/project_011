import React from "react";
import { useLoaderData } from "react-router";

const Profile = () => {
  const userData = useLoaderData();

  return (
    <section className="w-3/5 mx-auto my-10">
      <div className="shadow-2xl w-full border rounded-2xl p-5">
        <div className="flex justify-between">
          <h2 className="text-blue-500 my-auto ">Profile</h2>
          <button className="btn btn-primary">Update Profile</button>
        </div>
        <div className="space-y-2">
          <h2>{userData.name}</h2>
          <h2>{userData.email}</h2>
          <img src={userData?.photo} alt="Your Photo" />
        </div>
        {/* <button onClick={handleDelete} className="btn btn-warning my-5">
          Delete Profile
        </button> */}
      </div>
    </section>
  );
};

export default Profile;
