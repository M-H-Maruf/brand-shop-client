import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BannerText from "./BannerText";
import { Background, Parallax } from "react-parallax";

const Home = () => {
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  return (
    <div>
      {/* dynamic title */}
      <Helmet>
        <title>Nexus | Home</title>
      </Helmet>

      {/* parallax banner */}
      <div className="relative top-0 left-0 right-0 overflow-hidden">
        <Parallax strength={500} bgClassName="bg-contain bg-center">
          <Background className="custom-bg object-cover w-screen">
            <img
              className="object-cover object-center h-screen w-screen"
              src="https://i.ibb.co/k6PYJkr/Brand-banner.jpg"
              alt="fill murray"
            />
          </Background>
          <div
            id="Banner"
            className="relative h-screen w-full flex flex-col justify-center items-center"
          >
            <Banner></Banner>
            <BannerText></BannerText>
          </div>
        </Parallax>
      </div>

    </div>
  );
};

export default Home;
