import React from 'react';
import BannerContainer from '../Components/Banner/BannerContainer';
import Content from '../Components/Content/Content';
import Locations from '../Components/Locations/Locations';

const Home = () => {
    return (
    <section className="container">
        <BannerContainer />
        <Content />
        <Locations />
    </section>
    );
};

export default Home;