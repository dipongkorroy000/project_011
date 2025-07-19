import React, { useEffect, useState } from "react";
import { deleteId, getIds } from "../../saveLocalStorage/saveIdLocalStorage";
import Item from "./Item";
import Swal from "sweetalert2";
import axios from "axios";

const Liked = () => {
  const ids = getIds();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3100/artifacts").then((res) => {
      const filteredData = res.data.filter((item) => ids.includes(item._id));
      setCart(filteredData);
    });
  }, []);

  const deleteIdCart = (id) => {
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
        deleteId(id);
        const carts = cart.filter((n) => n._id !== id);
        setCart(carts);

        Swal.fire({
          title: "Remove!",
          text: "Your file has been Remove.",
          icon: "success",
        });
      }
    });
  };

  return (
    <section className=" w-10/12 mx-auto my-10">
      <div className="hero bg-base-200 min-h-fit mb-5">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold mb-2">Liked Cart</h1>
            <p>Favorite Items : {cart.length}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 max-2xl:grid-cols-2 gap-5">
        {cart?.map((n) => (
          <Item deleteIdCart={deleteIdCart} n={n} key={n._id}></Item>
        ))}
      </div>
      {cart.length === 0 && <h2 className="font-bold text-xl text-center text-yellow-400">Not Found Data</h2>}
    </section>
  );
};

export default Liked;
