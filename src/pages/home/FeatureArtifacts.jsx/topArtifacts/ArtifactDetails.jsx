import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ArtifactDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://assignment-011-server-side.vercel.app/artifact/${id}`).then((res) => setData(res.data));
  }, []);

  return (
    <div className=" my-10 w-96 mx-auto">
      <div>
        <img className="w-72 rounded-2xl mb-3" src={`${data.image}`} alt="" />
      </div>
      <div>
        <h2 className="font-bold text-xl mb-1">{data.name}</h2>
        <h2>
          <span className="font-bold">Artifact type</span> : {data.artifact_type}
        </h2>
        <h2>
          <span className="font-bold">Created At</span> : {data.created_at}
        </h2>
        <h2>
          <span className="font-bold">Discovered by</span> : {data.discovered_by}
        </h2>
        <h2>
          <span className="font-bold">Location</span> : {data.present_location}
        </h2>
        <p>
          <span className="font-bold">Context</span> : {data.historical_context}
        </p>
        <p>
          <span className="font-bold">Description</span> : {data.short_description}
        </p>
      </div>
    </div>
  );
};

export default ArtifactDetails;
