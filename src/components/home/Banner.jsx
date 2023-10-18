
import Particle from "./Particle";


const Banner = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
        <div className="h-full w-full bg-black bg-opacity-50 -z-10"></div>
        
        {/* particle effect */}
        <Particle></Particle>
    </div>
  );
};

export default Banner;
