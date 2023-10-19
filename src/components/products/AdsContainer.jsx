import Tilt from "react-parallax-tilt";

const AdsContainer = () => {
  const ads = [
    "https://i.ibb.co/ByQZtp2/google-ad.jpg",
    "https://i.ibb.co/7CtxNcW/samsung-ad.jpg",
    "https://i.ibb.co/wsG0gKT/apple-ad.png",
  ];
  return (
    <div className="flex flex-col gap-6">
      {ads.map((ad, idx) => (
        <div key={idx}>
          <Tilt scale={1.05}>
              <div data-aos="flip-left" className="flex justify-center items-center p-4 rounded-t-lg bg-black/10 h-60">
                <img
                  className="w-96 rounded-lg object-cover object-center"
                  src={ad}
                  alt="service"
                />
              </div>
              
          </Tilt>
        </div>
      ))}
    </div>
  );
};

export default AdsContainer;
