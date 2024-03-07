import React, { useContext } from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }
    return (
        <Navbar bg="white" data-bs-theme="light" className='shadow-sm sticky-top'>
            <Container>
                <Navbar.Brand href="#home">
                    <div className="col d-flex align-items-start">
                        <div className="d-inline-flex align-items-center justify-content-center flex-shrink-0 me-2">
                            <img width={100} src={logo} alt="" />
                        </div>
                        <div>
                            <h4 className="fs-2 fw-bold logo-title lh-1 mb-0">EduTraining</h4>
                            <p className='logo-des mb-0 title-color'>Event & Conference</p>
                        </div>
                    </div>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Link to='/' className='ms-2 fs-6 fw-bold px-4 py-2'>Home</Link>
                    <Link to='/about' className='ms-2 fs-6 fw-bold px-4 py-2'>About</Link>
                    <Link to='/events' className='ms-2 fs-6 fw-bold px-4 py-2'>Events</Link>
                    <Link to='/blog' className='ms-2 fs-6 fw-bold px-4 py-2'>Blog</Link>
                    <Link to='/contact' className='ms-2 fs-6 fw-bold px-4 py-2'>Contact</Link>
                    {
                        user ? <div>
                            <h2>{user.displayName}</h2>
                            <img src={user.photoURL} alt="" />
                            <button onClick={handleLogOut} className='ms-2 fs-6 fw-bold px-4 py-2 btn-login rounded fw-medium'>Log Out</button>
                        </div> : <Link to='/login' className='ms-2 fs-6 fw-bold px-4 py-2 btn-login rounded fw-medium'>Login</Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;