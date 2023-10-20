import { useLoaderData } from "react-router-dom";
import Particle from "../home/Particle";
import { Helmet } from 'react-helmet-async';
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();
    const {_id, image, name, brand, type, price, description, rating, details} = product;
    const handleUpdateProduct = (event) => {
        event.preventDefault();
    
        const form = event.target;
    
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const details = form.details.value;
    
        const updatedProduct = {
          image,
          name,
          brand,
          type,
          price,
          description,
          rating,
          details,
        };
    
        fetch(
          `https://brand-shop-server-m9sqkj6uc-m-h-marufs-projects.vercel.app/update-product/${_id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              form.image.value = '';
              form.name.value = '';
              form.brand.value = '';
              form.type.value = '';
              form.price.value = '';
              form.description.value = '';
              form.rating.value = '';
              form.details.value = '';
              Swal.fire({
                title: "Success!",
                text: "Product Updated Successfully!",
                icon: "success",
                confirmButtonText: "OK",
              });
            }
            else {
              Swal.fire({
                title: "Error!",
                text: "Failed To Update Product!",
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          });
      };
    
    return (
        <div className=" bg-black/80 bg-[url('https://i.ibb.co/qWNH5fN/Alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center tracking-normal text-justify">
        <Helmet>
          <title>Nexus | Update Product | {name}</title>
        </Helmet>
        <div className="py-32 p-6 z-10">
          <div className="max-w-6xl mx-auto">
            <h1
              data-aos="fade-down"
              className="text-6xl text-brand-primary font-black font-orbitron mb-20 text-center mx-auto"
            >
              UPDATE PRODUCT
            </h1>
            <div
              data-aos="zoom-in"
              className="bg-black/50 max-w-5xl m-8 md:m-24 p-6 md:p-10"
            >
              <form onSubmit={handleUpdateProduct} className="flex flex-col gap-8">
                <div className="grid justify-center grid-cols-1 lg:grid-cols-2 items-center gap-6 my-6">
                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-brand-primary w-44">Image</span>
                      <input defaultValue={image}
                        name="image"
                        type="text"
                        placeholder="Product Image URL"
                        className="input input-bordered text-brand-primary w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-brand-primary w-44">Name</span>
                      <input defaultValue={name}
                        name="name"
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered text-brand-primary w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-brand-primary w-44">Brand</span>
                      <input defaultValue={brand}
                        name="brand"
                        type="text"
                        placeholder="Product Brand Name"
                        className="input input-bordered text-brand-primary w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-brand-primary w-44">Type</span>
                      <input defaultValue={type}
                        name="type"
                        type="text"
                        placeholder="Product Type"
                        className="input input-bordered text-brand-primary w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-brand-primary w-44">Price</span>
                      <input defaultValue={price}
                        name="price"
                        type="text"
                        placeholder="Product Price In USD"
                        className="input input-bordered text-brand-primary w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-brand-primary w-44">Description</span>
                      <input defaultValue={description}
                        name="description"
                        type="text"
                        placeholder="Product Short Description"
                        className="input input-bordered text-brand-primary w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-brand-primary w-44">Rating</span>
                      <input defaultValue={rating}
                        name="rating"
                        type="text"
                        placeholder="Product Rating"
                        className="input input-bordered text-brand-primary w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="input-group">
                      <span className="bg-brand-primary w-44">Details</span>
                      <input defaultValue={details}
                        name="details"
                        type="text"
                        placeholder="Product Details"
                        className="input input-bordered text-brand-primary w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className="form-control -mt-6">
                  <button className="btn glass text-white hover:text-brand-primary">
                    Update Product
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

export default UpdateProduct;