import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const UpdateProfile = () => {
  // const [allUser, setAllUser] = useState();
  const navigate = useNavigate();
  // const [findingUser, setFindingUser] = useState({});
  // const allUser = useLoaderData();
  const { user, loading } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = user.email;

    const userData = { email, name, photo };

    axios
      .put(`http://localhost:3100/user/${user.email}`, userData, { withCredentials: true })
      .then(() => navigate(`/profile/${email}`));
  };

  if (loading) {
    return (
      <div className="w-fit mx-auto">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Update Info</h1>
        <form onSubmit={handleUpdate} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Enter Your Name" required />

          <label className="label">Photo</label>
          <input type="url" name="photo" className="input" placeholder="Enter Photo URL" required />

          <button type="submit" className="btn btn-neutral mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
