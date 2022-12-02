import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
   const datas = useLoaderData()
   console.log(datas)
   
  return (
     <div className="">
        <div>
            <h2 className="text-primary text-3xl text-center font-bold m-4">All services Here</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
         datas?.map(data=> <ServiceCard
         data={data}
         key={data._id}
         ></ServiceCard>)
        }
     </div>
     </div>
  );
};

export default Services;
