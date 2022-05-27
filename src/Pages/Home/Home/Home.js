import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import OurClients from '../OurClients/OurClients';
import SocialLinks from '../SocialLinks/SocialLinks';

const Home = () => {
    return (
        <div>
            <Banner />
            <InventoryItems />
            <SocialLinks />
            <OurClients />
        </div>
    );
};

export default Home;