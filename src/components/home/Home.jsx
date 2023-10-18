import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BannerText from "./BannerText";
import { Background, Parallax } from "react-parallax";
import Brands from "./Brands";
import Testimonials from './Testimonials';
import Deals from './Deals';

const Home = () => {
  return (
    <div>
      {/* dynamic title */}
      <Helmet>
        <title>Nexus | Home</title>
      </Helmet>

      {/* parallax banner */}
      <div
        className="relative top-0 left-0 right-0 overflow-hidden"
        id="Banner"
      >
        <Parallax strength={500} bgClassName="bg-contain bg-center">
          <Background className="custom-bg object-cover w-screen">
            <img
              className="object-cover object-center h-screen w-screen"
              src="https://i.ibb.co/k6PYJkr/Brand-banner.jpg"
              alt="fill murray"
            />
          </Background>
          <div className="relative h-screen w-full flex flex-col justify-center items-center">
            <Banner></Banner>
            <BannerText></BannerText>
          </div>
        </Parallax>
      </div>

      {/* main section */}
      <div  id="Brands" className="max-w-7xl flex flex-col justify-center items-center mx-auto">
        {/* brands */}
        <Brands></Brands>

        {/* testimonials */}
        <div
        className="relative top-0 left-0 right-0 overflow-hidden"
        id="Banner"
      >
        <Parallax strength={500} bgClassName="bg-contain bg-center">
          <Background className="custom-bg object-cover w-screen">
            <img
              className="object-cover object-center h-screen w-screen"
              src="https://i.ibb.co/k6PYJkr/Brand-banner.jpg"
              alt="fill murray"
            />
          </Background>
          <div className="relative h-fit w-full flex flex-col justify-center items-center">
        <Testimonials></Testimonials>
          </div>
        </Parallax>
      </div>
      {/* deals */}
      <Deals></Deals>
      </div>
    </div>
  );
};

export default Home;
