import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const AllPhoto = () => {
  const [num, setNum] = useState(4);
  const [photos, setPhotos] = useState([]);
  const [moreBtn, setMoreBtn] = useState(false);

  //   let num = 8;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, [setNum]);

  let countPhoto = [];

  for (let n = 0; n < num; n++) {
    countPhoto.push(photos[n]);
  }

  const handleSeeMore = () => {
    setNum(8);
    setMoreBtn(true);
  };

    // cart task not complete 
  return (
    <div>
      <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
        {countPhoto.map((n, index) => (
          <Cart n={n} key={index}></Cart>
        ))}
      </div>
      <div className="flex justify-center border border-gray-600 p-2 rounded-xl">
        <button
          onClick={handleSeeMore}
          className={`btn btn-primary ${moreBtn && "hidden"}`}
        >
          See More
        </button>
        <div className={`join grid grid-cols-2 ${moreBtn ? "" : "hidden"}`}>
          <button className="join-item btn btn-outline">Previous page</button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
      </div>
    </div>
  );
};

export default AllPhoto;
