import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './SocialLinks.css';

const SocialLinks = () => {
    return (
        <div class="py-5 bg-light social-links" style={{ background: '#f6f6f6' }}>
            <div className="container  d-flex justify-content-between">
                <div class="w-50 me-auto d-flex justify-content-start align-items-center">
                    <a class="mx-2" href="https://www.facebook.com/m0ni2/">
                        <i class="bi bi-facebook"></i></a>
                    <a class="mx-2" href="https://www.instagram.com/im_monir_/">
                        <i class="bi bi-instagram"></i></a>
                    <a class="mx-2" href="https://github.com/m0ni2/">
                        <i class="bi bi-github"></i></a>
                    <a class="mx-2" href="https://www.linkedin.com/in/m0nir/">
                        <i class="bi bi-linkedin"></i></a>
                </div>
                <div class="w-50 ms-auto d-flex justify-content-center align-items-center">
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