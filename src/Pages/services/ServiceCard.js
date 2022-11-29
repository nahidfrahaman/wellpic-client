import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({data}) => {
  const {name,img,price,rating,discription,_id} = data
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-96 h-80" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Shor Details:{discription.slice(0,99)} </p>
        <p>ratting: {rating}</p>

        <div className="card-actions justify-center">
          <Link className="btn btn-primary btn-sm" to={`/service/${_id}`}>View details</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
