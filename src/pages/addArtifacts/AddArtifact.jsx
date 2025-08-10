import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddArtifact = () => {
  const [image, setImage] = useState(null);
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddArtifact = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    axios
      .post(
        "https://assignment-011-server-side.vercel.app/artifact",
        { ...data, liked: 0, image, artifact_email: user?.email },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.insertedId) {
          toast("Successfully add Artifact");
          navigate("/myArtifact");
        }
      })
      .catch((error) => console.log(error));
  };

  const imageHandle = async (e) => {
    const image = e.target.files[0];

    const imageUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(imageUrl, formData);
      const uploadedImageUrl = await response.data.data.url;
      setImage(uploadedImageUrl);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
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
      <section className="my-14">
      <h1 className="text-2xl font-bold text-center mb-5">Add Artifact</h1>
        <form onSubmit={handleAddArtifact} className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 max-w-4xl xl:grid-cols-3 md:grid-cols-2 gap-6">
            {/* Artifact Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="label">
                Artifact Name
              </label>
              <input id="name" name="name" type="text" className="input" placeholder="Enter Artifact Name" required />
            </div>

            {/* Image */}
            <div className="flex flex-col">
              <label htmlFor="image" className="label">
                Image
              </label>
              <input id="image" type="file" accept="image/*" onChange={(e) => imageHandle(e)} className="input py-2" />
            </div>

            {/* Artifact Type */}
            <div className="flex flex-col">
              <label htmlFor="artifact_type" className="label">
                Artifact Type
              </label>
              <select
                id="artifact_type"
                name="artifact_type"
                defaultValue=""
                className="select select-primary border border-gray-600"
                required
              >
                <option value="" disabled>
                  Select Artifact Type
                </option>
                <option>Tools</option>
                <option>Documents</option>
                <option>Writings</option>
              </select>
            </div>

            {/* Historical Context */}
            <div className="flex flex-col">
              <label htmlFor="historical_context" className="label">
                Historical Context
              </label>
              <input
                id="historical_context"
                name="historical_context"
                type="text"
                className="input"
                placeholder="Historical Context"
              />
            </div>

            {/* Created At */}
            <div className="flex flex-col">
              <label htmlFor="created_at" className="label">
                Created At (Year)
              </label>
              <input
                id="created_at"
                name="created_at"
                type="number"
                min="0"
                max={new Date().getFullYear()}
                className="input"
                placeholder="Enter year"
              />
            </div>

            {/* Discovered At */}
            <div className="flex flex-col">
              <label htmlFor="discover_at" className="label">
                Discovered At
              </label>
              <input id="discover_at" name="discover_at" type="text" className="input" placeholder="Discovered At" />
            </div>

            {/* Discovered By */}
            <div className="flex flex-col">
              <label htmlFor="discovered_by" className="label">
                Discovered By
              </label>
              <input
                id="discovered_by"
                name="discovered_by"
                type="text"
                className="input"
                placeholder="Discovered By"
              />
            </div>

            {/* Present Location */}
            <div className="flex flex-col">
              <label htmlFor="present_location" className="label">
                Present Location
              </label>
              <input
                id="present_location"
                name="present_location"
                type="text"
                className="input"
                placeholder="Present Location"
              />
            </div>

            {/* Description - full width */}
            <div className="flex flex-col">
              <label htmlFor="short_description" className="label">
                Description
              </label>
              <textarea
                id="short_description"
                name="short_description"
                className="textarea"
                placeholder="Short description"
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button - full width */}
          <div className="mt-8">
            <button type="submit" className="btn btn-primary py-3 text-lg font-semibold w-fit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddArtifact;
