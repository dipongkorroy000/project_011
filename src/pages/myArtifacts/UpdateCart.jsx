import axios from "axios";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateCart = () => {
  const navigate = useNavigate();

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
    artifact_email,
  } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());

    const data = { ...updateData, artifact_email };

    axios
      .patch(`https://assignment-011-server-side.vercel.app/artifact/${_id}`, data)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast("Updated Successfully");
          navigate("/myArtifact");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="my-10">
      <h1 className="text-2xl text-center font-semibold mb-5">Update Artifact</h1>

      <form onSubmit={handleUpdate} className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 min-w-sm max-w-4xl xl:grid-cols-3 md:grid-cols-2 gap-3 md:gap-6">
          <div className="flex flex-col">
            <label className="label">Artifact Name</label>
            <input defaultValue={name} name="name" type="text" className="input" placeholder="Artifact Name" />
          </div>

          {/* Image*/}
          <div className="flex flex-col">
            <label className="label">Image</label>
            <input defaultValue={image} name="image" type="url" className="input" placeholder="Artifact Image URL" />
          </div>

          {/* Artifact Type */}
          <div className="flex flex-col">
            <label className="label">Artifact Type</label>
            <select name="artifact_type" defaultValue={artifact_type} className="select select-primary">
              <option disabled={true}>Artifact Type</option>
              <option>Tools</option>
              <option>Documents</option>
              <option>Writings</option>
            </select>
          </div>
          {/* Historical Context */}
          <div className="flex flex-col">
            <label className="label">Historical Context</label>
            <input
              defaultValue={historical_context}
              name="historical_context"
              type="text"
              className="input"
              placeholder="Historical Context"
            />
          </div>

          {/* Created At */}
          <div className="flex flex-col">
            <label className="label">Created At</label>
            <input defaultValue={created_at} name="created_at" type="text" className="input" placeholder="Created At" />
          </div>
          {/* Discovered At */}
          <div className="flex flex-col">
            <label className="label">Discovered At</label>
            <input
              defaultValue={discover_at}
              name="discover_at"
              type="text"
              className="input"
              placeholder="Discovered At"
            />
          </div>
          {/* Discovered By */}
          <div className="flex flex-col">
            <label className="label">Discovered By</label>
            <input
              defaultValue={discovered_by}
              name="discovered_by"
              type="text"
              className="input"
              placeholder="Discovered By"
            />
          </div>
          {/* Present Location */}
          <div className="flex flex-col">
            <label className="label">Location</label>
            <input
              defaultValue={present_location}
              name="present_location"
              type="text"
              className="input"
              placeholder="Present Location"
            />
          </div>

          {/* Short description */}
          <div className="flex flex-col">
            <label className="label">Description</label>
            <input
              defaultValue={short_description}
              name="short_description"
              type="text"
              className="input textarea"
               rows={3}
             placeholder="Short description"
            />
          </div>

          <div className="flex gap-5">
            <button type="submit" className="btn mt-5 w-fit btn-primary">
            Submit
          </button>
          <button onClick={()=> navigate(-1)} className="btn mt-5 w-fit btn-error">
            Cancel
          </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UpdateCart;
