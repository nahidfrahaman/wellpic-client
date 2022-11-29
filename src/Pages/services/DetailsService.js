import React from 'react';
import AddAReview from './AddAReview';
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
       </section>
       
       </>
    );
};

export default DetailsService;