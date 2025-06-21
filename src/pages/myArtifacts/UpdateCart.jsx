import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router";

const UpdateCart = () => {
  const data = useLoaderData();
  const {
    _id,
    name,
    image,
    artifact_type,
    historical_context,
    short_description,
    created_at,
    discover_at,
    discovered_by,
    present_location,
    artifact_name,
    artifact_email,
  } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    axios
      .put(`https://assignment-011-server-side.vercel.app/artifact/${_id}`, data)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-semibold">Update Artifact</h1>
            <form onSubmit={handleUpdate} className="fieldset">
              <label className="label">Name</label>
              <input
                defaultValue={name}
                name="name"
                type="text"
                className="input"
                placeholder="Artifact Name"
              />

              {/* Image */}
              <label className="label">Image</label>
              <input
                defaultValue={image}
                name="image"
                type="url"
                className="input"
                placeholder="Artifact Image URL"
              />

              {/* Artifact Type */}
              <label className="label">Artifact Type</label>
              <select
                name="artifact_type"
                defaultValue={artifact_type}
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
                defaultValue={historical_context}
                name="historical_context"
                type="text"
                className="input"
                placeholder="Historical Context"
              />

              {/* Short description */}
              <label className="label">description</label>
              <input
                defaultValue={short_description}
                name="short_description"
                type="text"
                className="input"
                placeholder="Short description"
              />

              {/* Created At */}
              <label className="label">Created At</label>
              <input
                defaultValue={created_at}
                name="created_at"
                type="text"
                className="input"
                placeholder="Created At"
              />

              {/* Discovered At */}
              <label className="label">Discovered At</label>
              <input
                defaultValue={discover_at}
                name="discover_at"
                type="text"
                className="input"
                placeholder="Discovered At"
              />

              {/* Discovered By */}
              <label className="label">Discovered By</label>
              <input
                defaultValue={discovered_by}
                name="discovered_by"
                type="text"
                className="input"
                placeholder="Discovered By"
              />

              {/* Present Location */}
              <label className="label">Location</label>
              <input
                defaultValue={present_location}
                name="present_location"
                type="text"
                className="input"
                placeholder="Present Location"
              />

              {/* Artifact adder name */}
              <label className="label">Name</label>
              <input
                defaultValue={artifact_name}
                name="artifact_name"
                type="text"
                className="input"
                placeholder="Artifact adder name"
                readOnly
              />

              {/* Artifact adder email */}
              <label className="label">Email</label>
              <input
                defaultValue={artifact_email}
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

export default UpdateCart;
