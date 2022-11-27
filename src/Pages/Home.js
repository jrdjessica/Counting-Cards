import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
    return (
        <div>
            <h1>Welcome</h1>
            <h3>Start learning to count cards by clicking below</h3>
            <div>
                <Link to="/tutorial">
                    <p>Tutorial</p>
                </Link>
                <Link to="/exercise">
                    <p>Exercise</p>
                </Link>
            </div>
        </div>
    );
}

export default Home;
