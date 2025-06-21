import React from "react";

const Cart = ({ n }) => {
  console.log(n);

  return (
    <div className="card bg-base-100 w-fit shadow-sm border">
      <div className="card-body">
        <h2 className="card-title">{n?.title}</h2>
        <p>{n?.body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
