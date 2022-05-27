import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './SocialLinks.css';

const SocialLinks = () => {
    return (
        <div className="py-5 bg-light social-links" style={{ background: '#f6f6f6' }}>
            <h2 className='text-center mb-4'>NewsLater</h2>
            <div className="container  d-flex justify-content-between">
                <div className="w-50 me-auto d-flex justify-content-start align-items-center">
                    <a className="mx-2" href="https://www.facebook.com/m0ni2/">
                        <i className="bi bi-facebook"></i></a>
                    <a className="mx-2" href="https://www.instagram.com/im_monir_/">
                        <i className="bi bi-instagram"></i></a>
                    <a className="mx-2" href="https://github.com/m0ni2/">
                        <i className="bi bi-github"></i></a>
                    <a className="mx-2" href="https://www.linkedin.com/in/m0nir/">
                        <i className="bi bi-linkedin"></i></a>
                </div>
                <div className="w-50 ms-auto d-flex justify-content-center align-items-center">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Your Email"
                            aria-label="Email"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Subscribe
                        </Button>
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;