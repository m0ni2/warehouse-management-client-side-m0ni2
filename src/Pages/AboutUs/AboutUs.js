import React from 'react';
import './AboutUs.css'

const AboutUs = () => {

    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <img src='https://i.ibb.co/BcbxxCn/aboutUs.jpg' className='w-100' alt="Monir Logo" />
                    </div>
                </div>
                <div className="col-md-6 offset-md-2">
                    <h2>Groceteria Warehouse At A Glance</h2>

                    <p className='mt-2 mb-1'>
                        We offers a host of logistic management services and supply chain solutions. We provide innovative solutions with the best people, processes, and technology to drive uncommon value for your company.

                        With over 60 years of experience, we understand what a vital role we play for our customers. We strive to work seamlessly with our customers as if we were an in-house department.
                    </p>



                </div>
            </div>
        </div>
    );
};

export default AboutUs;