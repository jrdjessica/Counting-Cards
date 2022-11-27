import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
    return (
        <div>
            <h1>Welcome</h1>
            <h3>Start learning to count cards and learn how to beat the house by clicking below</h3>
            <div className='links'>
                <Link className='link-item' style={{ textDecoration: 'none' }} to="/tutorial">
                    <p>Tutorial</p>
                </Link>
                <Link className='link-item' style={{ textDecoration: 'none' }} to="/exercise">
                    <p>Exercise</p>
                </Link>
            </div>
            <img id='home-pic' src="https://media3.giphy.com/media/3ov9jUCYetT3GVwcy4/giphy.gif?cid=ecf05e478e1n5mg7yh0t94sst6pl34opwin33cvs7ealrd4l&rid=giphy.gif&ct=g" alt="cards"></img>
        </div>
    );
}

export default Home;
