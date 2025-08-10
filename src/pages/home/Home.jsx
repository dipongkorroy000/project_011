import { Typewriter } from "react-simple-typewriter";
import AllPhoto from "./AllPhoto";
import TopArtifacts from "./FeatureArtifacts.jsx/topArtifacts/TopArtifacts";
import { Link } from "react-router";
import Section from "./section/Section";
import Views from "./views/Views";
import { Helmet } from "react-helmet-async";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Artifact | Historical Artifacts Tracker</title>
      </Helmet>

      {/* banner  */}
      <section className="w-5/6 mx-auto my-20 hero rounded-2xl max-md:h-60 h-96 bg-[url(https://i.ibb.co/BVQ40GjL/fantasy-scene-with-futuristic-human-character.jpg)]">
        <div className="hero-overlay rounded-2xl"></div>
        <div className=" text-center">
          <div className="max-w-xl">
            <div className="text-3xl max-md:text-2xl mb-3 font-bold text-white">
              <Typewriter
                loop={Infinity}
                cursor
                words={["Artifacts Histories", "Discover stories behind the world","Every place tells a story"]}
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </div>
            <p className="mb-5 text-white font-semibold text-lg max-md:text-sm max-md:mx-10">
              Discover stories behind the world’s most thought-provoking landmarks.Where history meets philosophy—share what matters to you.
            </p>
          </div>
        </div>
      </section>

     <section className="w-5/6 mx-auto my-20">
        <Slider></Slider>
      </section>

      <section className="w-5/6 mx-auto my-20">
        <h2 className="text-2xl font-bold max-md:text-xl text-center my-5">Most Popular Artifacts</h2>
        <TopArtifacts></TopArtifacts>
      </section>

      <section className="w-fit mx-auto my-20 flex items-center justify-center">
        <Link to={"/allArtifact"} className="btn btn-soft">
          See All
        </Link>
      </section>

      {/* all History */}
      <section className="my-5">
        <h1 className="text-2xl font-bold max-md:text-xl text-center my-5">All History</h1>

        <div className="w-5/6 mx-auto mb-10 mt-5">
          <AllPhoto></AllPhoto>
        </div>
      </section>

      {/* section accordion */}
      <section className="w-5/6 mx-auto my-10">
        <Section></Section>
      </section>

      {/* Page view section */}
      <section className="w-5/6 mx-auto my-10 flex items-center justify-center">
        <Views></Views>
      </section>
    </>
  );
};

export default Home;
