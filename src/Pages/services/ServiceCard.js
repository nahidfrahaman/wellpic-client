import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ data }) => {
  const { name, img, price, rating, discription, _id } = data;
  return (
    <div className="card card-compact bg-base-100 shadow-xl mb-8">
      <div>
        <PhotoProvider>
          <div className="foo">
            <PhotoView src={img}>
              <img className="h-80" src={img} style={{ objectFit: "cover" }} alt="" />
            </PhotoView>
          </div>
        </PhotoProvider>
      </div>
      
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Shor Details:{discription.slice(0, 99)} </p>
        <p>ratting: {rating}</p>

        <div className="card-actions justify-center">
          <Link className="btn btn-primary btn-sm" to={`/service/${_id}`}>
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
