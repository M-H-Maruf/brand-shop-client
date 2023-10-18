/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from "react-type-animation";

const BannerText = () => {
  return (
    <div
      data-aos="fade-right"
      className="absolute flex flex-col justify-center items-center"
    >
      <h1 className="text-white text-4xl opacity-90 font-teko tracking-tight block">
        WE DEAL WITH PRODUCTS FROM
      </h1>
      <hr />
      <div data-aos="fade-left">
        <TypeAnimation
          sequence={[
            "APPLE",
            1000,
            "SAMSUNG",
            1000,
            "SONNY",
            1000,
            "GOOGLE",
            1000,
            "INTEL",
            1000,
            "MICROSOFT",
            1000,
          ]}
          wrapper="h1"
          className="text-brand-primary font-teko tracking-normal opacity-100"
          speed={50}
          style={{ fontSize: "48px", display: "block" }}
          repeat={Infinity}
        />
      </div>
      <p
        data-aos="fade-up-left"
        className="w-80 text-white opacity-60 font-medium text-center"
      >
       Welcome to Nexus, your destination for top-tier tech. We bring you curated products from industry giants like Google, Apple, Samsung, Sony, Intel, and Microsoft. Explore cutting-edge devices, from smartphones to smart home solutions. Experience the future with Nexus, where leading brands converge for you.
      </p>
    </div>
  );
};

export default BannerText;
