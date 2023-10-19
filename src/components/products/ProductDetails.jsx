import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Particle from "../home/Particle";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { _id } = useParams();
  // retrieving brands data from database
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/product-details/${_id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = () => {
    const { image, name, brand, type, price, description, rating, details } =
      product;
    const newItem = {
      image,
      name,
      brand,
      type,
      price,
      description,
      rating,
      details,
    };

    fetch("http://localhost:5000/add-to-cart/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed To Add Product!",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/qWNH5fN/Alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center tracking-normal text-justify">
      <Helmet>
        <title>{`Nexus | Products| ${product.name}`}</title>
      </Helmet>
      <div className="py-32 p-6 z-10">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
          <h1
            data-aos="fade-down"
            className="text-6xl text-brand-primary font-black font-orbitron mb-20 text-center mx-auto"
          >
            {product.name}
          </h1>

          <div
            data-aos="zoom-in"
            className="bg-black/50 max-w-6xl m-8 md:m-24 p-6"
          >
            <div key={product._id}>
              <Tilt scale={1.05}>
                <div
                  data-aos="flip-left"
                  className="grid lg:grid-cols-2 justify-between bg-black/50 shadow-2xl rounded-lg tracking-tight cursor-pointer"
                >
                  <div className="flex justify-center items-center lg:rounded-l-lg rounded-t-lg lg:rounded-r-none rounded-b-none h-full">
                    <img
                      className="h-full lg:rounded-l-lg rounded-t-lg lg:rounded-r-none rounded-b-none object-cover object-center"
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
                    <h2 className="font-bold text-sm text-white/60 tracking-wide">
                      Details: {product.details}
                    </h2>
                    <div className="flex gap-4">
                      <Link onClick={handleAddToCart} className="font-bold">
                        <button className="btn border-2 bg-transparent font-bold my-4 border-brand-primary text-brand-primary hover:bg-brand-primary hover:border-brand-primary hover:text-white">
                          ADD TO CART
                        </button>
                      </Link>
                      <Link
                        to={`/update-product/${product._id}`}
                        className="font-bold"
                      >
                        <button className="btn border-2 bg-transparent font-bold my-4 border-brand-primary text-brand-primary hover:bg-brand-primary hover:border-brand-primary hover:text-white">
                          <AiOutlineEdit className="text-3xl"></AiOutlineEdit>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default ProductDetails;
