import { Link } from "react-router-dom";
import Particle from "../home/Particle";
import { useEffect } from "react";
import Aos from "aos";

const ErrorPage = () => {
    useEffect(() => {
        Aos.init({
          easing: "ease-out-quart",
          delay: 0,
          duration: 750,
        });
      }, []);
  return (
    <div data-aos="fade-down" className=" bg-black/80 w-screen min-h-screen bg-[url('https://i.ibb.co/qWNH5fN/Alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center pt-28 tracking-normal text-justify">
      <div className="z-10"><h1
        data-aos="fade-down"
        className="text-9xl text-event-primary font-black font-orbitron mb-20 text-center"
      >
        404
      </h1>

      <div data-aos="zoom-in" className="bg-black/50 m-10 md:p-24 p-14 rounded shadow flex-col flex justify-center items-center">
        <h2 className="text-4xl font-teko font-bold mb-2 text-left">PAGE NOT FOUND</h2>
        <Link to="/" className="font-bold">
          <button className="btn border-2 bg-transparent font-bold my-4 border-brand-primary text-brand-primary hover:bg-brand-primary hover:border-brand-primary hover:text-white">
            GO HOME
          </button>
        </Link>
      </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default ErrorPage;
