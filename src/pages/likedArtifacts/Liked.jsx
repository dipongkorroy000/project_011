import React, { useEffect, useState } from "react";
import { deleteId, getIds } from "../../saveLocalStorage/saveIdLocalStorage";
import { useLoaderData } from "react-router";
import Item from "./Item";
import Swal from "sweetalert2";

const Liked = () => {
  const [cart, setCart] = useState([]);

  let items = useLoaderData();
  const ids = getIds();

  useEffect(() => {
    const carts = items.filter((n) => ids.includes(n._id));
    setCart(carts);
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
          title: "Deleted!",
          text: "Your file has been deleted.",
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
            <h1 className="text-5xl font-bold">Liked Cart</h1>
            <p className="py-6">Favorite Items : {cart.length}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-1 max-2xl:grid-cols-2 gap-5">
        {cart?.map((n) => (
          <Item deleteIdCart={deleteIdCart} n={n} key={n._id}></Item>
        ))}
      </div>
    </section>
  );
};

export default Liked;
