import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const thisYear = today.getFullYear();

    return (
        <footer className='container d-md-flex justify-content-between align-items-center py-5'>
            <div className='d-flex justify-content-center justify-content-md-start'>
                <Nav.Link as={Link} to="/termsofservice">Terms of Service</Nav.Link>
                <Nav.Link as={Link} to="/privacyPolicy">Privacy Policy</Nav.Link>
            </div>
            <div className='text-md-right text-center'>
                <span>&copy; {thisYear} Groceteria Warehouse</span>
            </div>
        </footer>
    );
};

export default Footer;