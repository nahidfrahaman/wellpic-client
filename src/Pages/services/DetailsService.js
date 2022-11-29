import React from 'react';
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
       
       </>
    );
};

export default DetailsService;