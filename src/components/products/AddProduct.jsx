import { Helmet } from "react-helmet-async";
import Particle from "../home/Particle";

const AddProduct = () => {
  const handleAddProduct = () => {};
  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/qWNH5fN/Alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center tracking-normal text-justify">
      <Helmet>
        <title>Nexus | Add Product</title>
      </Helmet>
      <div className="py-32 p-6 z-10">
        <div className="max-w-6xl mx-auto">
          <h1
            data-aos="fade-down"
            className="text-6xl text-brand-primary font-black font-orbitron mb-20 text-center mx-auto"
          >
            ADD PRODUCT
          </h1>
          <div
            data-aos="zoom-in"
            className="bg-black/50 max-w-5xl m-8 md:m-24 p-6 md:p-10"
          >
            <form onSubmit={handleAddProduct} className="flex flex-col gap-8">
              <div className="grid justify-center grid-cols-1 lg:grid-cols-2 items-center gap-6 my-6">
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">Image</span>
                    <input
                      type="text"
                      placeholder="Product Image URL"
                      className="input input-bordered text-brand-primary w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">Name</span>
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="input input-bordered text-brand-primary w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">Brand</span>
                    <input
                      type="text"
                      placeholder="Product Brand Name"
                      className="input input-bordered text-brand-primary w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">Type</span>
                    <input
                      type="text"
                      placeholder="Product Type"
                      className="input input-bordered text-brand-primary w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">Price</span>
                    <input
                      type="text"
                      placeholder="Product Price In USD"
                      className="input input-bordered text-brand-primary w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">Description</span>
                    <input
                      type="text"
                      placeholder="Product Short Description"
                      className="input input-bordered text-brand-primary w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">Rating</span>
                    <input
                      type="text"
                      placeholder="Product Rating"
                      className="input input-bordered text-brand-primary w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">Details</span>
                    <input
                      type="text"
                      placeholder="Product Details"
                      className="input input-bordered text-brand-primary w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="form-control -mt-6">
                <button className="btn glass text-white hover:text-brand-primary">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default AddProduct;
