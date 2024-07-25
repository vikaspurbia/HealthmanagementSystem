import logo from '../image/logo.png';

function Navbar() {
    return (
        <div>
            <nav>
                <ul className='bg-gray-800 text-white flex items-center justify-between p-2'>
                    <li className='flex items-center'>
                        <img src={logo} alt='logo' className='w-10 h-10' />
                    </li>
                    <div className='flex space-x-9'>
                        <li className='block rounded p-2 hover:bg-gray-700'>Home</li>
                        <li className='block rounded p-2 hover:bg-gray-700'>About</li>
                        <li className='block rounded p-2 hover:bg-gray-700'>Contact</li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
