import { Helmet } from "react-helmet-async";
import Particle from "../home/Particle";
import { useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
  const [items, setItems] = useState(useLoaderData());
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += parseFloat(items[i].price);
  }

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-m9sqkj6uc-m-h-marufs-projects.vercel.app/delete-item/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Item Deleted Successfully!",
                icon: "success",
                confirmButtonText: "OK",
              });

              const remaining = items.filter((item) => item._id !== _id);
              setItems(remaining);
              total = 0;
              for (let i = 0; i < remaining.length; i++) {
                total += remaining[i].price;
              }
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed To Delete Item!",
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          });
      }
    });
  };
  return (
    <div className=" bg-black/80 bg-[url('https://i.ibb.co/qWNH5fN/Alexandre-debieve-FO7-JIlwj-Ot-U-unsplash.jpg')] bg-cover bg-center bg-blend-darken text-white flex flex-col justify-center items-center tracking-normal text-justify">
      <Helmet>
        <title>Nexus | My Cart</title>
      </Helmet>
      <div className="py-32 md:px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <h1
            data-aos="fade-down"
            className="text-6xl text-brand-primary font-black font-orbitron mb-20 text-center mx-auto"
          >
            MY CART
          </h1>
          <div
            data-aos="zoom-in"
            className="bg-black/50 max-w-5xl m-8 md:m-24 p-6 md:p-10"
          >
            <div className="overflow-x-auto">
              <table className="table lg:text-3xl">
                <thead className="text-brand-primary lg:text-4xl text-xl">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => (
                    <tr key={item._id}>
                      <th>{idx + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td
                        onClick={()=>handleDelete(item._id)}
                        className="flex justify-center hover:text-brand-primary cursor-pointer items-center text-3xl"
                      >
                        <MdDeleteForever></MdDeleteForever>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <th></th>
                    <td>Total</td>
                    <td>{total.toFixed(2)}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="divider after:bg-white before:bg-white"></div>
            <button className="btn w-full border-2 bg-transparent font-bold my-4 border-brand-primary text-brand-primary hover:bg-brand-primary hover:border-brand-primary hover:text-white">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
      <Particle></Particle>
    </div>
  );
};

export default MyCart;
