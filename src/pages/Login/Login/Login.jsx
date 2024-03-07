import React, { useContext, useState } from 'react';
import './Login.css'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form } from 'react-bootstrap';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const [type, setType] = useState('password');
    const handleType = () => {
        if (type === 'text') {
            setType('password')
        }
        else {
            setType('text')
        }
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                toast('Successfully Login');
            })
    }
    return (
        <div className='mx-auto card bg-info-subtle my-5 px-5 py-4' style={{ width: '35%' }}>
            <h2 className='text-center mb-4'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{ padding: '10px 10px' }} type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="position-relative mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{ padding: '10px 10px' }} type={type} name='password' placeholder="Password" />
                    <FontAwesomeIcon onClick={handleType} icon={faEye} style={{ top: '45px', right: '15px', cursor: 'pointer' }} className='position-absolute fs-5' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me?" />
                </Form.Group>
                <Button className='w-100 text-uppercase fw-medium text-white' variant="info" type="submit">
                    Login
                </Button>
                {/* <ToastContainer /> */}
                <div>
                    <p style={{ cursor: 'pointer' }} className='text-end my-2'>Forgot Password?</p>
                    <p className='text-center'>New to this website? Please <Link to='/register'>Register</Link></p>
                </div>
                <ToastContainer />
            </Form>
            <div className='position-relative mb-3'>
                <p className='mx-auto text-center mb-0 fw-medium fs-6' style={{ width: '10%', border: '2px solid #f9f9f9' }}>OR</p>
                <p className='or-hr mb-0'></p>
                <p className='or-hr-two mb-0'></p>
            </div>
            <div className='d-flex justify-content-center'>
                <span className='me-3 p-2 rounded-circle text-center bg-light' style={{ cursor: 'pointer', height: '40px', width: '40px', border: '1px solid #f9f9f9' }}>
                    <FontAwesomeIcon icon={faFacebook} className='fs-5' />
                </span>
                <span className='me-3 p-2 rounded-circle text-center bg-light' style={{ cursor: 'pointer', height: '40px', width: '40px', border: '1px solid #f9f9f9' }}>
                    <FontAwesomeIcon icon={faGoogle} className='fs-5' />
                </span>
                <span className='p-2 rounded-circle text-center bg-light' style={{ cursor: 'pointer', height: '40px', width: '40px', border: '1px solid #f9f9f9' }}>
                    <FontAwesomeIcon icon={faGithub} className='fs-5' />
                </span>
            </div>
        </div>
    );
};

export default Login;