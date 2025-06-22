import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const AllPhoto = () => {
  const [page, setPage] = useState(0);
  const [dataLength, setDataLength] = useState(0);
  const [moreBtn, setMoreBtn] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [startNum, setStartNum] = useState(1);
  const [endNum, setEndNum] = useState(4);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setDataLength(data.length);
        let countData = [];
        for (let n = startNum; n <= endNum; n++) {
          const find = data.find((i) => i.id === n);
          countData.push(find);
        }
        setPhotos(countData);
      });
  }, [endNum, startNum]);

  const handleSeeMore = () => {
    setStartNum(1);
    setEndNum(8);
    setMoreBtn(true);
  };

  const handlePrevious = () => {
    if (startNum > 1) {
      setPage(page - 1);
      setStartNum(startNum - 8);
      setEndNum(endNum - 8);
    }
  };

  const handleNext = () => {
    if (endNum <= dataLength) {
      setPage(page + 1);
      setStartNum(startNum + 8);
      setEndNum(endNum + 8);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {/* data */}
      <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
        {photos.map((n, index) => (
          <Cart n={n} key={index}></Cart>
        ))}
      </div>

      <div className="flex justify-center border border-gray-600 p-2 rounded-xl">
        {/* seemore button  */}
        <button
          onClick={handleSeeMore}
          className={`btn btn-primary ${moreBtn && "hidden"}`}
        >
          See More
        </button>

        {/* page scroll  */}
        <div className={`${moreBtn ? "" : "hidden"}`}>
          <div className="join">
            <button onClick={handlePrevious} className="join-item btn">
              «
            </button>
            <button className="join-item btn">Page {page}</button>
            <button onClick={handleNext} className="join-item btn">
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPhoto;
