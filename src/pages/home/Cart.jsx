import React from "react";

const Cart = ({ n }) => {
  return (
    <div className="card bg-base-100 w-fit shadow-lg">
      <div className="card-body max-md:p-3">
        <h2 className="card-title">{n?.title}</h2>
        <p>{n?.body}</p>
        <div className="card-actions justify-end">
          <button className="btn-lg btn text-sm max-md:px-2 max-md:py-1">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
