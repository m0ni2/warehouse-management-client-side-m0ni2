import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./OurClients.css";

import client1 from '../../../images/our-clients/client1.png'
import client2 from '../../../images/our-clients/client2.png'
import client3 from '../../../images/our-clients/client3.png'
import client4 from '../../../images/our-clients/client4.png'
import client5 from '../../../images/our-clients/client5.png'
import client6 from '../../../images/our-clients/client6.png'

const OurClients = () => {

    return (
        <div className='container py-5'>
            <h2 className='text-center mb-4'>Our Clients</h2>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                // modules={[Autoplay, Pagination, Navigation]}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={client1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={client2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={client3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={client4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={client5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={client6} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OurClients;