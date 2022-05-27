import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img style={{ height: 'calc(100vh - 73px)' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/CPKthwJ/slider-3.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Link to='/aboutUs'>
                        <Button variant="link" className='btn-primary text-white text-decoration-none my-4 d-block mx-auto py-2'>About Us</Button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;