import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import OurClients from '../OurClients/OurClients';
import SocialLinks from '../SocialLinks/SocialLinks';

const Home = () => {
    return (
        <div>
            <Banner />
            <Items />
            <SocialLinks />
            <OurClients />
        </div>
    );
};

export default Home;