import React from 'react';
import './Header.css'
import topImage from '../Assests/topimg.jpeg';
const Header = () => (
    <div className='top'>
        <div className='top-heading'>
            <h3>Wellness Retreats</h3>
        </div>
        <div className="top-card">
            <div className='top-img'>
                <img src={ topImage } alt='' className='header-img' />
            </div>
            <h2>Discover Your Inner Peace</h2>
            <p>Join us for a series of Wellness retreats designed to help you find tranquility and rejuvenation.</p>
        </div>
    </div>
);

export default Header;
