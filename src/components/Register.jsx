import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Register = () => {
  const [image, setImage] = useState(null);
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.password.value;

    if (!name || !email || !pass) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Check the register data!",
      });
      return;
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const { password, ...userData } = data;
    const newUserData = { ...userData, image };

    signUp(email, password)
      .then((res) => {
        if (res.user.metadata) {
          axios
            .post("https://assignment-011-server-side.vercel.app/user", newUserData, { withCredentials: true })
            .then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Registration successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            })
            .catch((error) => console.log(error));
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


  return (
    <>
      <Helmet>
        <title>Artifact | Register</title>
      </Helmet>
      <div className="card w-full max-w-sm shrink-0 shadow-sm mx-auto my-10">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Register now!</h1>
          <form onSubmit={handleCreateUser} className="fieldset">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Enter Your Name" />

            <label className="label">Image</label>
            <input
              type="file"
              onChange={(e) => imageHandle(e)}
              className="py-2 rounded input"
            />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}"
              title="The password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long."
            />

            <button type="submit" className="btn mt-4">
              SignUp
            </button>
          </form>
          <h2>
            Already have an account ?
            <Link className="text-blue-500 hover:underline" to="/login">
              {" "}
              LogIn
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Register;
