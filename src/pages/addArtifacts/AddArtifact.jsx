import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet-async";

const AddArtifact = () => {
  const { user, loading } = useContext(AuthContext);

  const handleAddArtifact = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    axios
      .post("https://assignment-011-server-side.vercel.app/artifact", { ...data, liked: 0 }, { withCredentials: true })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This new Job has been saved and published.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  if (loading) {
    return (
      <div className="w-fit mx-auto">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Artifact | Add Artifact</title>
      </Helmet>
      <div className="hero my-10">
        <div className="hero-content flex-col shadow-xl min-w-sm rounded-xl">
          <h1 className="text-2xl font-bold">Add Artifact</h1>
          <form onSubmit={handleAddArtifact} className="fieldset w-full">
            <label className="label">Artifact Name</label>
            <input name="name" type="text" className="input" placeholder="Enter Artifact Name" />

            {/* Image */}
            <label className="label">Image</label>
            <input name="image" type="url" className="input" placeholder="Artifact Image URL" />

            {/* Artifact Type */}
            <label className="label">Artifact Type</label>
            <select
              name="artifact_type"
              defaultValue="Artifact Type"
              className="select select-primary border border-gray-600"
            >
              <option disabled={true}>Artifact Type</option>
              <option>Tools</option>
              <option>Documents</option>
              <option>Writings</option>
            </select>

            {/* Historical Context */}
            <label className="label">Historical Context</label>
            <input name="historical_context" type="text" className="input" placeholder="Historical Context" />

            {/* Short description */}
            <label className="label">description</label>
            <input name="short_description" type="text" className="input" placeholder="Short description" />

            {/* Created At */}
            <label className="label">Created At</label>
            <input name="created_at" type="number" className="input" placeholder="Enter the year of the artwork." />

            {/* Discovered At */}
            <label className="label">Discovered At</label>
            <input name="discover_at" type="text" className="input" placeholder="Discovered At" />

            {/* Discovered By */}
            <label className="label">Discovered By</label>
            <input name="discovered_by" type="text" className="input" placeholder="Discovered By" />

            {/* Present Location */}
            <label className="label">Location</label>
            <input name="present_location" type="text" className="input" placeholder="Present Location" />

            {/* Artifact adder name */}
            {/* <label className="label">User Name</label>
            <input
              defaultValue={userData?.name}
              name="artifact_name"
              type="text"
              className="input"
              placeholder="Artifact Name"
              readOnly
            /> */}

            {/* Artifact adder email */}
            <label className="label">Email</label>
            <input
              defaultValue={user.email}
              name="artifact_email"
              type="email"
              className="input"
              placeholder="Artifact adder email"
              readOnly
            />

            <button type="submit" className="btn mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddArtifact;
