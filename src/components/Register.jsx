import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const [passError, setPassError] = useState();
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { email, password, ...userData } = data;
    const newUserData = { ...userData, email };

    console.log(newUserData);

    if (password.length < 6) {
      return setPassError("pass must be minimum 6 character");
    } else {
      setPassError("");
      signUp(email, password)
        .then((res) => {
          if (res.user.metadata) {
            axios
              .post("http://localhost:3000/user", newUserData)
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
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleCreateUser} className="fieldset">
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
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />

          <h2 className="text-red-400">{passError}</h2>

          <button type="submit" className="btn btn-neutral mt-4">
            SignUp
          </button>
        </form>
        <h2>
          Already have an account ?
          <Link className="text-blue-500" to="/login">
            {" "}
            LogIn
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Register;
