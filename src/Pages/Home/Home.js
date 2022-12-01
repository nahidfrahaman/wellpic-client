import React from 'react';
import FeedbackSection from './FeedbackSection';
import HomeBanner from './HomeBanner';
import Sevice from './Sevice';

const Home = () => {
    
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Sevice></Sevice>
            <FeedbackSection></FeedbackSection>
        </div>
    );
};

export default Home;