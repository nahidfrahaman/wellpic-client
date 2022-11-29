import React from 'react';
import AddAReview from './AddAReview';
import AddReviewfield from './AddReviewfield';
import ProductDetailsSection from './ProductDetailsSection';
import ProductReviewSection from './ProductReviewSection';

const DetailsService = () => {
    return (
       <>
       <section>
            <ProductDetailsSection></ProductDetailsSection>
       </section>
       <section>
           <ProductReviewSection></ProductReviewSection>
       </section>
       <section className='m-8'>
            <AddAReview></AddAReview>
            <AddReviewfield></AddReviewfield>
       </section>
       
       </>
    );
};

export default DetailsService;