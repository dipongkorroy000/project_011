import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const login = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((res) => {
        navigate("/");
        if (res.user.email) {
          toast("login successfully");
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email or password is invalid",
          });
        }
      });
  };

  const googleLoginUser = () => {
    googleLogin().then((res) => {
      navigate(location.state?.from || "/");
      if (res.user.email) {
        toast("login successfully");
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Artifact | Login</title>
      </Helmet>
      <div className="card w-full max-w-sm shrink-0 shadow-sm mx-auto my-10">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <form onSubmit={login} className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}"
              title="The password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long."
              required
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn mt-4">
              Login
            </button>
          </form>

          {/* login With google */}
          <button onClick={googleLoginUser} className="btn">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Login with Google
          </button>

          <h2>
            New to{" "}
            <Link className="text-blue-500 underline" to="/register">
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Login;
