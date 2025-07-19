import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full max-h-96 rounded-lg overflow-hidden">
      {[
        {
          id: "slide1",
          img: "https://i.ibb.co/LdHM7jDF/9093890.jpg",
          alt: "Tech Slide",
          prev: "slide3",
          next: "slide2",
        },
        {
          id: "slide2",
          img: "https://i.ibb.co/xqPXQgQh/beautiful-summer-sunglasses-postcard.jpg",
          alt: "Nature Slide",
          prev: "slide1",
          next: "slide3",
        },
        {
          id: "slide3",
          img: "https://i.ibb.co/jk3DQHhn/summer-is-here-with-flamingo.jpg",
          alt: "Design Slide",
          prev: "slide2",
          next: "slide1",
        },
      ].map(({ id, img, alt, prev, next }) => (
        <div key={id} id={id} className="carousel-item relative w-full  max-md:h-52">
          <img src={img} alt={alt} className="w-full h-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#${prev}`} className="btn btn-sm bg-opacity-50 border-none">❮</a>
            <a href={`#${next}`} className="btn btn-sm bg-opacity-50 border-none">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;