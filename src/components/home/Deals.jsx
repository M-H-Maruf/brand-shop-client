/* eslint-disable react/no-unescaped-entities */

import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const Deals = () => {
  const Completionist = () => (
    <span className="font-teko tracking-tighter text-lg font-semibold">
      Too Bad! <br /> Better luck Next Time!!!
    </span>
  );

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="font-orbitron tracking-widest text-5xl font-black">
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div id="Deals" className="p-6">
      <h1
        data-aos="fade-right"
        className="aos-init w-full my-6 lg:px-32 aos-animate font-teko font-bold text-brand-primary text-5xl aos-init aos-animate mt-32 text-left"
      >
        BEST DEALS
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-6 tracking-tight lg:mx-32">
        <div data-aos="fade-up" className="flex flex-col justify-center">
          <h1 className="font-teko tracking-tighter text-xl font-semibold">
            Welcome to NEXUS.
          </h1>
          <h2 className="font-teko">Join us today to get the best deals!</h2>
          <ul className="list-disc list-inside">
            <li>Best deals on the market.</li>
            <li>People's trusted companion since 1992.</li>
            <li>Exclusive offer's for members of the community.</li>
            <li>Get 80% off on first purchase.</li>
          </ul>
          <Link to="/auth">
            <button className="btn border-2 bg-transparent font-bold my-4 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
              LOG IN / REGISTER
            </button>
          </Link>
        </div>
        <div
          data-aos="flip-down"
          className="flex flex-col justify-center py-10 pb-52 items-center md:h-full"
        >
          <h1 className="font-teko tracking-tighter text-xl font-semibold">
            Time Remaining Till Offer Ends
          </h1>
          <Countdown date={Date.now() + 86400000} renderer={renderer} />
        </div>
      </div>
    </div>
  );
};

export default Deals;
