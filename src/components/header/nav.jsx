import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const Navlinks = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <NavLink to='/' className={`transition-colors duration-300 md:font-medium font-black font-["Young_serif"] hover:underline text-secondary-100 md:text-xl 
            ${scrollPosition > 580 ? 'text-secondary-200' : 'text-secondary-100'}`}>
                Home
            </NavLink>
            <NavLink to='/about' className={`transition-colors duration-300 md:font-medium font-black font-["Young_serif"] hover:underline text-secondary-100 md:text-xl 
            ${scrollPosition > 580 ? 'text-secondary-200' : 'text-secondary-100'}`}>
                Tentang Kami
            </NavLink>
            <NavLink to='/contact' className={`transition-colors duration-300 md:font-medium font-black font-["Young_serif"] hover:underline text-secondary-100 md:text-xl 
            ${scrollPosition > 580 ? 'text-secondary-200' : 'text-secondary-100'}`}>
                Contact
            </NavLink>
            <NavLink to='/blog' className={`transition-colors duration-300 md:font-medium font-black font-["Young_serif"] hover:underline text-secondary-100 md:text-xl
            ${scrollPosition > 580 ? 'text-secondary-200' : 'text-secondary-100'}`}>
                Blog
            </NavLink>
        </>
    );
};

const Nav = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleNavbar = () => {
        setIsOpen(!IsOpen);
    };


    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className='sticky md:w-1/3 mt-2 w-1/5 transition duration-150 ease-in-out flex-wrap flex justify-end'>
                <div className='hidden w-full justify-between md:flex animate-backInRight'>
                    <Navlinks />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar} className='focus:outline-none transition-colors duration-100'>
                        <div className={`transition-colors duration-300 bg-secondary-100 p-2 rounded-full shadow animate-backInRight
                                        ${scrollPosition > 580 ? 'bg-white' : 'bg-transparent'}`}>
                            {IsOpen ? <X size='40' color={scrollPosition > 580 ? '#000' : '#fff'} /> : <Menu size='40' color={scrollPosition > 580 ? '#000' : '#fff'} />}
                        </div>
                    </button>
                </div>
                <div
                    className={`bg-white md:bg-transparent py-4 text-xs md:text-base rounded-xl transition-all duration-300 ease-in-out flex md:hidden basis-full flex-col items-center gap-4 justify-end ${IsOpen ? 'scale-100 opacity-100 animate-backInDown' : 'scale-95 opacity-0'}`}                >
                    <Navlinks />
                </div>
            </nav>
        </>
    );
};

export default Nav;
