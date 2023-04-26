import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/Dropdown';

import './Navbar.css';

const Navbar = () => {

    return (
        <>
            <div className='subNav'>
                <div className='subNav1'>
                    <Link className='link-style'>
                        <li><Dropdown/></li>
                    </Link>
                    <Link className='link-style'>
                        <li>Pedals and Amplifiers</li>
                    </Link>
                    <Link className='link-style'>
                        <li>Keyboards and Synths</li>
                    </Link>
                    <Link className='link-style'>
                        <li>Recording Gear</li>
                    </Link >
                    <Link className='link-style'>
                        <li>Drums</li>
                    </Link>
                    <Link className='link-style'>
                        <li>DJ and Audio Gear</li>
                    </Link>
                    <Link className='link-style'>
                        <li>More Categories</li>
                    </Link>

                </div>
                <div className='subNav2'>
                    <Link className='link-style'>
                    <li>Brands</li>
                    </Link>
                    

                    <Link to="/News" className='link-style'>
                        <li>News</li>
                    </Link>

                    <Link to="/Shops" className='link-style'>
                        <li>Explore</li>
                    </Link>
                    
                    <Link to="/Shops" className='link-style'>
                        <li>Shops</li>
                    </Link>

                    <Link to="/ReverbGives" className='link-style'>
                        <li>Reverb Gives</li>
                    </Link>

                    <Link to="/HelpCenter" className='link-style'>
                        <li>Help Center</li>
                    </Link>


                </div>
            </div>
        </>
    )
}

export default Navbar