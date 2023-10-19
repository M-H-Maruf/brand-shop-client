import Tilt from "react-parallax-tilt";

const ProductsContainer = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product._id}>
          <Tilt scale={1.05}>
            <div
              data-aos="flip-left"
              className="max-w-[288px] pb-4 flex flex-col justify-between bg-black/10 shadow-2xl rounded-lg tracking-tight cursor-pointer"
            >
              <div className="flex justify-center items-center p-4 rounded-t-lg bg-black/10 h-60">
                <img
                  className="w-full rounded-t-lg object-cover object-center"
                  src={product.image}
                  alt="service"
                />
              </div>
              <div className="items-center h-fit justify-end pt-5">
                <h2 className="font-teko tracking-tighter text-center">
                  {product.name}
                </h2>
              </div>
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  );
};

export default ProductsContainer;
