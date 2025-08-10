
import { Link } from "react-router";

const FindArtifact = ({ n }) => {
  const { _id, name, image, discovered_by } = n;

  // Capitalize first letter of name safely
  const formattedName = name
    ? name.charAt(0).toUpperCase() + name.slice(1)
    : "";

  return (
    <div className={`card card-side px-2 shadow-sm border`}>
      <figure>
        {image ? <img className="h-28" src={image} alt="Movie" />: <></>}
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{formattedName}</h2>
        </div>
        <p>{discovered_by}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`} className="btn btn-primary">
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindArtifact;