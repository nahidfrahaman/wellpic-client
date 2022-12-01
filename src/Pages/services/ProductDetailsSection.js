import React from "react";

const ProductDetailsSection = ({data}) => {
  const {name,img,price,rating,discription,} = data
  return (
    <div>
        <h2 className="text-4xl text-center text-primary mt-4 mb-4">Service Name:{name}  </h2>
      <div className="card card-compact w-5/6 mx-auto  shadow-xl ">
        <figure>
          <img
            className="w-1/2"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body  w-5/6 mx-auto">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="font-bold">Price:${price} </p>
          <p className=""><span className="font-bold">Details:</span> {discription}</p>
          <p className="font-bold">ratting: {rating}</p>

          <div className="card-actions justify-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
