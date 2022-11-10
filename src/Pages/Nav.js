import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
    return (
        <nav>
            <ul>
                <Link to="/tutorial">
                    <li>Tutorial</li>
                </Link>
                <Link to="/exercise">
                    <li>Exercise</li>
                </Link>
                <Link to="/game">
                    <li>Counting Game</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
