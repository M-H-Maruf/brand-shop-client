import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle, AiOutlineEdit } from "react-icons/ai";

const ProductsContainer = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {products.map((product) => (
        <div key={product._id}>
          <Tilt scale={1.05}>
            <div
              data-aos="flip-left"
              className="grid md:grid-cols-2 justify-between bg-black/50 shadow-2xl rounded-lg tracking-tight cursor-pointer"
            >
              <div className="flex justify-center items-center md:rounded-l-lg rounded-t-lg md:rounded-r-none rounded-b-none h-full">
                <img
                  className="h-full md:rounded-l-lg rounded-t-lg md:rounded-r-none rounded-b-none object-cover object-center"
                  src={product.image}
                  alt="service"
                />
              </div>
              <div className="items-center w-full justify-end px-5 py-2">
                <h2 className="font-teko text-xl tracking-wide text-center">
                  {product.name}
                </h2>
                <h2 className="font-bold text-sm text-white/60 tracking-wide">
                  Brand: {product.brand}
                </h2>
                <h2 className="font-bold text-sm text-white/60 tracking-wide">
                  Type: {product.type}
                </h2>
                <h2 className="font-bold text-sm text-white/60 tracking-wide">
                  Price: {product.price} USD
                </h2>
                <h2 className="font-bold text-sm text-white/60 tracking-wide">
                  Rating: {product.rating}
                </h2>
                <div className="flex gap-4">
                <Link to="/product-details" className="font-bold">
          <button className="btn border-2 bg-transparent font-bold my-4 border-brand-primary text-brand-primary hover:bg-brand-primary hover:border-brand-primary hover:text-white">
          <AiOutlineInfoCircle className="text-3xl"></AiOutlineInfoCircle>
          </button>
        </Link>
        <Link to="/update-product" className="font-bold">
          <button className="btn border-2 bg-transparent font-bold my-4 border-brand-primary text-brand-primary hover:bg-brand-primary hover:border-brand-primary hover:text-white">
          <AiOutlineEdit className="text-3xl"></AiOutlineEdit>
          </button>
        </Link>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  );
};

export default ProductsContainer;
