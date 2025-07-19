import { Typewriter } from "react-simple-typewriter";
import AllPhoto from "./AllPhoto";
import Slider from "./Slider";
import TopArtifacts from "./FeatureArtifacts.jsx/topArtifacts/TopArtifacts";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      {/* banner  */}
      <section className="hero max-md:h-60 h-96 bg-[url(https://i.ibb.co/BVQ40GjL/fantasy-scene-with-futuristic-human-character.jpg)]">
        <div className="hero-overlay"></div>
        <div className=" text-center">
          <div className="max-w-xl">
            <div className="text-3xl max-md:text-2xl mb-3 font-bold">
              <Typewriter
                loop={Infinity}
                cursor
                words={["Provident cupiditate voluptatem"]}
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </div>
            <p className="mb-5 font-semibold text-lg max-md:text-sm max-md:mx-10">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </section>

      <section className="w-4/6 mx-auto my-10">
        <Slider></Slider>
      </section>

      <section className="w-5/6 mx-auto my-10">
        <TopArtifacts></TopArtifacts>
      </section>

      <section className="w-fit mx-auto my-10 flex items-center justify-center">
        <Link to={"/allArtifact"} className="btn btn-soft">
          See All
        </Link>
      </section>

      {/* all History */}
      <section className="my-5">
        <div className=" min-h-fit">
          <div className=" text-center">
            <h1 className="text-2xl font-bold max-md:text-xl">All History</h1>
          </div>
        </div>
        <div className="w-5/6 mx-auto mb-10 mt-5">
          <AllPhoto></AllPhoto>
        </div>
      </section>
    </>
  );
};

export default Home;
