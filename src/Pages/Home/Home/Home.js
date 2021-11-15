import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Decoration from './Decoration/Decoration';
import ShowReviews from './ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services></Services>
            <ShowReviews></ShowReviews>
            <Decoration></Decoration>

        </div>
    );
};

export default Home;