import React from "react";
import Cart from "./Cart";
import { Typewriter } from "react-simple-typewriter";
import AllPhoto from "./AllPhoto";

const Home = () => {
  return (
    <>
      {/* banner  */}
      <section
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </section>

      {/* scroll text */}
      <section className="w-full bg-blue-400 h-10">
        <div className="App text-center font-bold text-2xl align-middle text-emerald-900">
          <Typewriter
            loop={Infinity}
            cursor
            words={["Provident cupiditate voluptatem et in"]}
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </div>
      </section>

      {/* all History */}
      <section>
        <div className="hero bg-base-200 min-h-fit">
          <div className="hero-content text-center">
            <h1 className="text-5xl font-bold">All History</h1>
          </div>
        </div>
        <div className="w-10/12 mx-auto mb-10 mt-5">
          <AllPhoto></AllPhoto>
        </div>
      </section>
    </>
  );
};

export default Home;
