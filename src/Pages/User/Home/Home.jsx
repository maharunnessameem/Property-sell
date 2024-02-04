import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Listing from './Listing/Listing';
import Mordern from './Sections/Section1/Mordern';

import Contact from './Contact/Contact';
import HomeLoan from './Sections/Section3/HomeLoan';
import Agents from './Agents/Agents';
import PricingCard from './PricingCard/PricingCard';
import HomeReview from './HomeReview/HomeReview';
import FindProperty from './Sections/Section2/FindProperty';
import FindHome from './Sections/Section4/FindHome';
import ImageSection from './Sections/Section5/ImageSection';






const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Listing />
            <Mordern />
            <FindProperty />
            <Contact />
            <HomeLoan />
            <Agents />
            <PricingCard />
            <HomeReview />
            <FindHome />
            <ImageSection />

        </div>
    );
};

export default Home;