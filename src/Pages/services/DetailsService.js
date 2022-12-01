import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../Context/AuthProvider';
import AddAReview from './AddAReview';
import AddReviewfield from './AddReviewfield';
import ProductDetailsSection from './ProductDetailsSection';
import ProductReviewSection from './ProductReviewSection';

const DetailsService = () => {
    const data = useLoaderData()
    const {user}= useContext(AuthContex)
   
    return (
       <>
       <section>
            <ProductDetailsSection data={data}></ProductDetailsSection>
       </section>
       <section>
           <ProductReviewSection data={data}></ProductReviewSection>
       </section>
       <section className='m-8'>
          {
            user?.uid ? 
            <>  <AddAReview></AddAReview>
                <AddReviewfield 
                user={user}
                data={data}></AddReviewfield>
            </>: <h2 className='text-2xl text-center text-primary'> Want add to Review <Link  to="/login" className='underline'>plz login</Link></h2>
          }
       </section>
       
       </>
    );
};

export default DetailsService;