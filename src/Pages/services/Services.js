import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
     <div className="">
        <div>
            <h2 className="text-primary text-3xl text-center font-bold m-4">All services Here</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
     </div>
     </div>
  );
};

export default Services;
