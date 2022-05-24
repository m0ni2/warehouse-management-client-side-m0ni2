import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const thisYear = today.getFullYear();

    return (
        <footer className='container d-flex justify-content-between py-5'>
            <div className='d-flex'>
                <Nav.Link as={Link} to="/termsofservice">Terms of Service</Nav.Link>
                <Nav.Link as={Link} to="/privacypolicy">Privacy Policy</Nav.Link>
            </div>
            <div>
                <span>&copy; {thisYear} Groceteria Warehouse</span>
            </div>
        </footer>
    );
};

export default Footer;