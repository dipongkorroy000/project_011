import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const TopArtifacts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://assignment-011-server-side.vercel.app/top-artifacts")
      .then((artifacts) => setData(artifacts.data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto w-fit xl:gap-8 lg:gap-4 gap-3">
      {data.map((item) => (
        <div key={item._id} className="flex flex-col p-5 justify-between shadow-lg">
          <div>
            {item?.image && <img src={`${item?.image}`} alt="Shoes" className="rounded-xl w-56" />}
            <div className="p-3">
              <h2 className="card-title text-blue-600">Liked: {item?.liked}</h2>
              <h2 className="card-title">{item?.name}</h2>
            </div>
          </div>

          <div className="card-actions">
            <Link to={`/artifactDetails/${item._id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopArtifacts;
