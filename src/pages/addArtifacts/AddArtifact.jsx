import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";

const AddArtifact = () => {
  const userData = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleAddArtifact = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // fetch("https://assignment-011-server-side.vercel.app/").then((res) => res.json());
    axios
      .post("https://assignment-011-server-side.vercel.app/artifact", data)
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

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Add Artifact</h1>
            <form onSubmit={handleAddArtifact} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />

              {/* Image */}
              <label className="label">Image</label>
              <input
                name="image"
                type="url"
                className="input"
                placeholder="Artifact Image URL"
              />

              {/* Artifact Type */}
              <label className="label">Artifact Type</label>
              <select
                name="artifact_type"
                defaultValue="Artifact Type"
                className="select select-primary"
              >
                <option disabled={true}>Artifact Type</option>
                <option>Tools</option>
                <option>Documents</option>
                <option>Writings</option>
              </select>

              {/* Historical Context */}
              <label className="label">Historical Context</label>
              <input
                name="historical_context"
                type="text"
                className="input"
                placeholder="Historical Context"
              />

              {/* Short description */}
              <label className="label">description</label>
              <input
                name="short_description"
                type="text"
                className="input"
                placeholder="Short description"
              />

              {/* Created At */}
              <label className="label">Created At</label>
              <input
                name="created_at"
                type="text"
                className="input"
                placeholder="Created At"
              />

              {/* Discovered At */}
              <label className="label">Discovered At</label>
              <input
                name="discover_at"
                type="text"
                className="input"
                placeholder="Discovered At"
              />

              {/* Discovered By */}
              <label className="label">Discovered By</label>
              <input
                name="discovered_by"
                type="text"
                className="input"
                placeholder="Discovered By"
              />

              {/* Present Location */}
              <label className="label">Location</label>
              <input
                name="present_location"
                type="text"
                className="input"
                placeholder="Present Location"
              />

              {/* Artifact adder name */}
              <label className="label">Name</label>
              <input
                defaultValue={userData?.name}
                name="artifact_name"
                type="text"
                className="input"
                placeholder="Artifact Name"
                readOnly
              />

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

              <button type="submit" className="btn btn-neutral mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArtifact;
