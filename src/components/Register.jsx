import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const pass = e.target.password.value;

    if (!name || !email || !photo || !pass) {
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
    const newUserData = { ...userData };

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

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Register now!</h1>
        <form onSubmit={handleCreateUser} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Enter Your Name" />

          <label className="label">Photo</label>
          <input type="url" name="photo" className="input" placeholder="Enter Photo URL" />

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
