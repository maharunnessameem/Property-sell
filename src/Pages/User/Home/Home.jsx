import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Listing from './Listing/Listing';



const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Listing />
        </div>
    );
};

export default Home;