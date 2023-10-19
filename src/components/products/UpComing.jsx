import { Link } from "react-router-dom";

const UpComing = ({ brand }) => {
  return (
    <div className="z-10">
      <h1
        data-aos="fade-down"
        className="text-6xl text-brand-primary font-black font-orbitron mb-20 text-center mx-auto"
      >
        UPCOMING
      </h1>

      <div
        data-aos="zoom-in"
        className="bg-event-secondary/50 m-10 p-14 rounded shadow flex-col flex justify-center items-center"
      >
        <h2 className="text-4xl font-teko font-bold mb-2 text-left">
          PRODUCTS FROM {brand} ARE COMING SOON!!!
        </h2>
        <Link to="/" className="font-bold">
          <button className="btn border-2 bg-transparent font-bold my-4 border-brand-primary text-brand-primary hover:bg-brand-primary hover:border-brand-primary hover:text-white">
            GO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpComing;
