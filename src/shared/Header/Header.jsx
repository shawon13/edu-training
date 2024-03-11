import React, { useContext, useState } from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import userPic from '../../assets/30.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import profile from '../../assets/user.png'
import setting from '../../assets/settings.png'
import help from '../../assets/question.png'
import logout from '../../assets/log-out.png'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const handleLogOut = () => {
        logOut();
        setOpen(false);
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
                <Nav className="ms-auto align-items-center">
                    <Link to='/' className='ms-2 fs-6 fw-bold px-4 py-2'>Home</Link>
                    <Link to='/about' className='ms-2 fs-6 fw-bold px-4 py-2'>About</Link>
                    <Link to='/events' className='ms-2 fs-6 fw-bold px-4 py-2'>Events</Link>
                    <Link to='/blog' className='ms-2 fs-6 fw-bold px-4 py-2'>Blog</Link>
                    <Link to='/contact' className='ms-2 fs-6 fw-bold px-4 py-2'>Contact</Link>
                    {
                        user ? <img src={userPic} onClick={() => setOpen(!open)} className='user-pic rounded-circle' style={{ marginLeft: '30px', cursor: 'pointer' }} alt="" /> : <Link to='/login' className='ms-2 fs-6 fw-bold px-4 py-2 btn-login rounded fw-medium'>Login</Link>

                    }
                    {/* Dropdown menu Start*/}
                    <div className={`sub-menu-wrap ${open ? 'active-menu' : 'inactive-menu'}`}>
                        <div className="sub-menu p-4 rounded-1">
                            <div className="user-info d-flex align-items-center">
                                <img src={userPic} className='user-pic rounded-circle' alt="" />
                                <h3 className='fw-medium mb-0 ms-3'>Shawon</h3>
                            </div>
                            <hr />
                            <Link className='sub-menu-link d-flex align-items-center text-decoration-none m-2' style={{ color: '#525252' }}>
                                <img src={profile} className="rounded-circle p-1 me-3" style={{ width: '40px', background: '#e5e5e5' }} alt="" />
                                <p className='w-100 mb-0'>Edit Profile</p>
                                <FontAwesomeIcon className="menu-arrow" icon={faChevronRight} />
                            </Link>
                            <Link className='sub-menu-link d-flex align-items-center text-decoration-none m-2' style={{ color: '#525252' }}>
                                <img src={setting} className="rounded-circle p-1 me-3" style={{ width: '40px', background: '#e5e5e5' }} alt="" />
                                <p className='w-100 mb-0'>Setting & Privacy</p>
                                <FontAwesomeIcon className="menu-arrow" icon={faChevronRight} />
                            </Link>
                            <Link className='sub-menu-link d-flex align-items-center text-decoration-none m-2' style={{ color: '#525252' }}>
                                <img src={help} className="rounded-circle p-1 me-3" style={{ width: '40px', background: '#e5e5e5' }} alt="" />
                                <p className='w-100 mb-0'>Help & Support</p>
                                <FontAwesomeIcon className="menu-arrow" icon={faChevronRight} />
                            </Link>
                            <span onClick={handleLogOut} className='sub-menu-link d-flex align-items-center text-decoration-none m-2 fw-medium' style={{ color: '#525252' }}>
                                <img src={logout} className="rounded-circle p-1 me-3" style={{ width: '40px', background: '#e5e5e5' }} alt="" />
                                <p className='w-100 mb-0'>LogOut</p>
                                <FontAwesomeIcon className="menu-arrow" icon={faChevronRight} />
                            </span>
                        </div>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;