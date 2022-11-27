import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
    return (
        <nav>
            <div className='nav-links'>
                <Link style={{ textDecoration: 'none' }} to="/" >
                    <h4>Home</h4>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/tutorial">
                    <h4>Tutorial</h4>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/exercise">
                    <h4>Exercise</h4>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
