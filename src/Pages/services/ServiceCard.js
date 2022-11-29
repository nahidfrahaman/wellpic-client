import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Service Name</h2>
        <p>Price: </p>
        <p>Shor Details: </p>
        <p>ratting: </p>

        <div className="card-actions justify-center">
          <Link className="btn btn-primary btn-sm" to="/services/id">View details</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
