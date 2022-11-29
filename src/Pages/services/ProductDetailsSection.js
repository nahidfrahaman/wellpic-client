import React from "react";
import { Link } from "react-router-dom";

const ProductDetailsSection = () => {
  return (
    <div>
        <h2 className="text-4xl text-center text-primary mt-4 mb-4">Service Name:  </h2>
      <div className="card card-compact w-5/6 mx-auto  shadow-xl ">
        <figure>
          <img
            className="w-1/2"
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Service Name</h2>
          <p>Price: </p>
          <p>full Details: </p>
          <p>ratting: </p>

          <div className="card-actions justify-center">
            <Link className="btn btn-primary btn-sm" to="/services/id">
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
