import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
    return (
        <>
            <NavLink to='/' className='md:font-medium font-black font-["Young_serif"] hover:underline text-secondary-100 md:text-xl'>
                Home
            </NavLink>
            <NavLink to='/about' className='md:font-medium font-black font-["Young_serif"] hover:underline text-secondary-100 md:text-xl'>
                Tentang Kami
            </NavLink>
            <NavLink to='/contact' className='md:font-medium font-black font-["Young_serif"] hover:underline text-secondary-100 md:text-xl'>
                Contact
            </NavLink>
            <NavLink to='/blog' className='md:font-medium font-black font-["Young_serif"] hover:underline text-secondary-100 md:text-xl'>
                Blog
            </NavLink>
        </>
    );
};

const Nav = () => {
    const [IsOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!IsOpen);
    };

    return (
        <>
            <nav className='sticky md:w-1/3 mt-2 w-1/5 transition duration-150 ease-in-out flex-wrap flex justify-end'>
                <div className='hidden w-full justify-between md:flex'>
                    <Navlinks />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar} className='focus:outline-none'>
                        <div className="bg-secondary-100 p-2 rounded-full shadow">
                            {IsOpen ? <X size='40' color='#ffff' /> : <Menu size='40' color='#ffff' />}
                        </div>
                    </button>
                </div>
                <div
                    className={`bg-white md:bg-transparent py-4 text-xs md:text-base rounded-xl transition-all duration-300 ease-in-out flex md:hidden basis-full flex-col items-center gap-4 justify-end ${IsOpen ? 'scale-100 opacity-100 animate-backInDown' : 'scale-95 opacity-0'
                        }`}
                >
                    <Navlinks />
                </div>
            </nav>
        </>
    );
};

export default Nav;
