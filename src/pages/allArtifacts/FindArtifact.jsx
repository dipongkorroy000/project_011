import { BiSolidDislike } from "react-icons/bi";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const FindArtifact = ({ n }) => {
  const { _id, name, image, discovered_by} = n;

  return (
    <div className="card card-side px-2 shadow-sm border border-gray-700">
      <figure>
        <img className="h-28" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
        </div>
        <p>{discovered_by}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${n._id}`} className="btn btn-primary">
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindArtifact;
