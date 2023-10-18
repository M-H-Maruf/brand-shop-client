import { Helmet } from "react-helmet-async";
import Particle from "../home/Particle";

const MyCart = () => {
  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/qWNH5fN/Alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center tracking-normal text-justify">
      <Helmet>
        <title>Nexus | My Cart</title>
      </Helmet>
      <div className="py-32 p-6 z-10">
        <div className="max-w-6xl mx-auto">
          <h1
            data-aos="fade-down"
            className="text-6xl text-brand-primary font-black font-orbitron mb-20 text-center mx-auto"
          >
            MY CART
          </h1>
          <div
            data-aos="zoom-in"
            className="bg-black/50 max-w-5xl m-8 md:m-24 p-6 md:p-10"
          >

          </div>
        </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default MyCart;
