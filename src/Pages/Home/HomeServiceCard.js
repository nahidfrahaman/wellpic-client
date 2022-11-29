import React from "react";

const HomeServiceCard = ({data}) => {
    const {name,img}= data
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p>To working keep Our Commitment</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
