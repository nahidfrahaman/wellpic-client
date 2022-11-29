import React from 'react';
import icon from '../../assets/images/quote.svg';

const ProductReviewSection = () => {
    return (
        <div className='mb-8 mt-8'>
           <h2 className="text-4xl text-center text-primary font-bold">Rivew: section  </h2>
            <div className='flex justify-between'>
            <div className=''>
                <img className='h-12' src={icon} alt="" />
            </div>
            <div className=''>
                <img className='h-12' src={icon} alt="" />
            </div>
            </div>

            <section className='bg-base-200 rounded'>
            <div className='flex items-center justify-around'>
            <div className="avatar items-center">
               <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt='' />
                </div>
                <div className='mt-8 ml-3'>
                <h4>Name: Nahid</h4>
                <p>age: 26</p> 
                </div>
            </div>
               <div>
                 <p>this is very good product for that reason you will buy</p>
               </div>
            </div>
            
            </section>
        </div>
    );
};

export default ProductReviewSection;