import React, { useEffect, useState } from 'react';

const ProductReviewSection = ({data}) => {
    const [reviews, setReviews]= useState([])
    

    useEffect(()=>{
        fetch(`https://b6a11-service-review-server-side-nahidfrahaman.vercel.app/reviews/${data._id}`)
        .then(res=> res.json())
        .then(data=> {
            setReviews(data)})
    },[data._id])

    return (
        <>
        <div>
        <h2 className="text-4xl text-center text-primary font-bold">Rivew: section </h2>
        </div>
        {
          reviews?.map((review , i)=> <div key={i} className='mb-8 mt-8'>
           <div className='flex justify-between'>
           {/* <div className=''>
               <img className='h-12'  alt="" />
           </div> */}
           </div>
           <section className='bg-base-200 rounded'>
           <div className='flex items-center justify-around'>
           <div className="avatar w-1/3  flex items-center justify-center">
              <div className="w-24 rounded-full">
               <img src={review?.photo} alt='' />
               </div>
               <div className='mt-12 ml-3'>
               <h4>Name: {review.nameOfReivewer}</h4>
               <p className='text-sm mt-4'>location : california uk</p> 
               </div>
           </div>
              <div>
                <p>"{review.reviews}"</p>
              </div>
           </div>
           </section>
       </div>)      
        }
        
        </>
    );
};

export default ProductReviewSection;