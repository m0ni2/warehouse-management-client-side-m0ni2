import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {

    const [user, loading, err] = useAuthState(auth);

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} style={{ width: '200px' }} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ms-5">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            {user ?
                                <>
                                    <Nav.Link as={Link} to="/inventory/manage">Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to="/inventory/add">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="/inventory/myItems">My Items</Nav.Link>

                                    <Button onClick={() => signOut(auth)} variant="link" className='p-1 text-decoration-none'>Logout</Button>
                                </>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                        <Navbar.Text>
                            <span>{user ? `${user.displayName}` : ''}</span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
};

export default Header;