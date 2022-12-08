import React from 'react';
import logo from './logo.png'

const Navbar = () => {
    return (
        <div className='mt-5'>
            <div className="navbar bg-base-100">
                <img src={logo} alt="" className='h-14 w-36' />
            </div>
        </div>
    );
};

export default Navbar;