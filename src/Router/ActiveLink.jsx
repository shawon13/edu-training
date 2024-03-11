import React from 'react';
import './ActiveLink.css'
import { Children } from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={`nav-menu ms-2 fs-6 fw-bold px-4 py-2 ${({ isActive }) => isActive ? 'active' : ''}`}>
            {children}
        </NavLink >
    );
};

export default ActiveLink;