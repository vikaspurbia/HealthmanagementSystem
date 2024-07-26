import React from 'react';
import logo from '../assests/images/logo.png';
import { ImProfile } from "react-icons/im";
function Navbar() {
    return (
        <div> 
            <nav>
                <ul className='border-1 border-gray-300 bg-secondary flex items-center justify-between p-2'>
                    <li className='flex items-center'>
                        <img src={logo} alt='logo' className='w-10 h-10' />
                    </li>
                    <div className='flex items-center space-x-4'>
                        <input 
                            type='text' 
                            placeholder='Search' 
                            className='text-center border-2 border-gray-300 rounded p-1' 
                        />
                        <ImProfile size={30} color='blue' />

                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
