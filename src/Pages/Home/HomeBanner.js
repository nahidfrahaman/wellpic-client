import React from 'react';
import bannerImage from "../../assets/images/banner.jpg";

const HomeBanner = () => {
    return (
        <div className="hero lg:h-[540px] bg-white mb-8">
        <div className=" w-full hero-content flex-col lg:flex-row-reverse">
          <img className='rounded' src={bannerImage} alt=''/>
          <div className='w-full lg:text-left text-center'>
            <h1 className="text-3xl lg:text-5xl font-bold text-primary">WelCome WellPic</h1>
            <p className="py-6">Welcome to Your Page, We provide various service to enjoy your fulfilment </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default HomeBanner;