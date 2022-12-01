import React from "react";
import { Link } from "react-router-dom";

const HomeServiceCard = ({data}) => {
    const {name,img,_id}= data
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p>To working keep Our Commitment</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`}  className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
