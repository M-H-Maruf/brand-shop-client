import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Brands = () => {
  // retrieving brands data from database
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="tracking-tight md:py-32 space-y-10 bg-white lg:p-32 py-16 px-4 rounded-2xl my-32"
    >
      <h1
        data-aos="fade-right"
        className="font-teko font-bold text-brand-primary text-5xl aos-init aos-animate"
      >
        BRANDS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brands.map((brand) => (
          <div key={brand.id}>
            <Link to={`/products/${brand.name}`}>
              <Tilt scale={1.05}>
                <div
                  data-aos="flip-left"
                  className="max-w-[288px] pb-4 flex flex-col justify-between bg-black/10 shadow-2xl rounded-lg tracking-tight cursor-pointer"
                >
                  <div className="flex justify-center items-center p-4 rounded-t-lg bg-black/10 h-60">
                    <img
                      className="w-full rounded-t-lg object-cover object-center"
                      src={brand.image}
                      alt="service"
                    />
                  </div>
                  <div className="items-center h-fit justify-end pt-5">
                    <h2 className="font-teko tracking-tighter text-center">
                      {brand.name}
                    </h2>
                  </div>
                </div>
              </Tilt>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
