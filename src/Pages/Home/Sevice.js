import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeServiceCard from "./HomeServiceCard";

const Sevice = () => {
  const [services, setServices]= useState('')
  useEffect(()=>{
     fetch('https://b6a11-service-review-server-side-nahidfrahaman.vercel.app/home/services')
     .then(res=> res.json())
     .then(data=> setServices(data))
  },[])
 
 
  return (
    <section className=" mx-auto mt-4 mb-8">
      <h2 className="text-center text-primary text-3xl font-bold">Our Services </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {
       services && 
       services.map(service=> <HomeServiceCard
        data={service}
        key={service._id}></HomeServiceCard>)


    }

      </div>
      <div className="text-center mt-4">
       <Link to='/services' className="btn btn-primary text-white text-lg" >See All</Link>
      </div>
    </section>
  );
};

export default Sevice;
