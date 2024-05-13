import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'


const Navlinks = () => {
    return (
        <>
            <NavLink to='/' className='font-bold  text-white'>Home</NavLink>
            <NavLink to='/about' className='font-bold text-white'>Tentang Kami</NavLink>
            <NavLink to='/contact' className='font-bold text-white'>Contact</NavLink>
            <NavLink to='/blog' className='font-bold text-white'>Blog</NavLink>
        </>
    )
}

const Nav = () => {
    const [IsOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!IsOpen)
    }

    return (
        <>
            <nav className='md:w-1/3 w-1/5 transition duration-150 ease-in-out  flex-wrap flex justify-end'>
                <div className='hidden w-full  justify-between md:flex'>
                    <Navlinks />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar} className='focus:outline-none'>
                        {IsOpen ? <X size='32' color='#ffff' /> : <Menu size='32' color='#ffff' />}
                    </button>
                </div>
                <div className={`transition-all duration-300 ease-in-out flex md:hidden basis-full flex-col items-center gap-4 justify-end 
                    ${IsOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <Navlinks />
                </div>
            </nav>
        </>

    )
}

export default Nav
