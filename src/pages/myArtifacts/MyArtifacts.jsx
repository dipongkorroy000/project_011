import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

const MyArtifacts = () => {
  const [load, setLoad] = useState(true);
  const [artifacts, setArtifacts] = useState();
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://assignment-011-server-side.vercel.app/artifact?email=${user?.email}`, {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setArtifacts(data);
        setLoad(false);
      });
  }, [user, setLoad]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/myArtifact");
        axios.delete(`https://assignment-011-server-side.vercel.app/artifact/delete/${id}`).then((res) => {
          if (res.status === 200) {
            setLoad(false);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (loading) {
    return (
      <div className="w-fit mx-auto">
        <span className="loading loading-bars loading-xs"></span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Artifact | My Artifacts</title>
      </Helmet>
      <section className="my-5 w-5/6 mx-auto">
        <div className="hero bg-base-200 min-h-fit mb-10">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-2">My Submitted Cart</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 max-2xl:grid-cols-2 gap-5 w-fit mx-auto mb-10">
          {load ? (
            <div className="w-fit mx-auto">
              <span className="loading loading-bars loading-xs"></span>
            </div>
          ) : (
            artifacts?.map((n) => (
              <div
                key={n._id}
                className="flex flex-col shadow-sm border border-gray-600 rounded-2xl p-5 justify-between max-w-sm"
              >
                <div className="mb-2">
                  <img className="rounded-2xl" src={n.image} alt="Artifact Image" />
                  <div className="mt-2">
                    <p className="text-lg">{n.name}</p>
                    <p>Discover By: {n.discovered_by}</p>
                    <p>Created At: {n.created_at}</p>
                    <p>Type: {n.artifact_type}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="card-actions justify-end">
                    <Link to={`/updateCart/${n._id}`} className="btn btn-primary">
                      Update
                    </Link>
                    <button onClick={() => handleDelete(n._id)} className="btn btn-warning">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {artifacts?.length === 0 && (
          <h2 className="font-bold text-center text-xl text-yellow-400">Not Found Any Data</h2>
        )}
      </section>
    </>
  );
};

export default MyArtifacts;
