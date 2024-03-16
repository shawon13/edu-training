import React, { useContext, useState } from 'react';
import './Register.css'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../../Provider/AuthProvider';


const Register = () => {
    const { createUser, userUpdate, emailVerify } = useContext(AuthContext);
    const [type, setType] = useState('password')
    const handleType = () => {
        if (type === 'text') {
            setType('password')
        }
        else {
            setType('text')
        }
    }
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm)
        if (password != confirm) {
            return toast("Password doesn't match");
        }
        if (!/(?=.*?[A-Z])/.test(password)) {
            return toast("don't have a capital letter")
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            return toast("don't have a special character")
        }
        else if (!/.{6}/.test(password)) {
            return toast('Password is less than 6 characters')
        }
        createUser(email, password)
            .then(result => {
                const regUser = result.user;
                toast('Successfully Register')
                console.log(regUser)
                form.reset();
                userUpdate(regUser, name, photoUrl);
                emailVerify(regUser)
                    .then(() => {
                        toast('Please Check Your Email,Email verification sent!')
                    })

            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className='mx-auto card bg-info-subtle my-5 px-5 py-4 register-width' style={{ width: '35%' }}>
            <h2 className='text-center mb-4'>Create an account</h2>
            <Form onSubmit={handleRegister}>
                <ToastContainer />
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control style={{ padding: '10px 10px' }} type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control style={{ padding: '10px 10px' }} type="url" name='url' placeholder="Enter Photo Url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{ padding: '10px 10px' }} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{ padding: '10px 10px' }} type='password' name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="position-relative mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control style={{ padding: '10px 10px' }} type={type} name='confirm' placeholder="Confirm Password" required />
                    <FontAwesomeIcon onClick={handleType} icon={faEye} style={{ top: '45px', right: '15px', cursor: 'pointer' }} className='position-absolute fs-5' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I read and agree to the terms and conditions" />
                </Form.Group>
                <Button className='w-100 text-white fw-medium' variant="info" type="submit">
                    Create an account
                </Button>
                {/* <ToastContainer /> */}
                <p className='mt-2 text-end'>Already have an account? <Link to='/login'>Login</Link></p>
            </Form>
        </div>

    );
};

export default Register;