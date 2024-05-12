import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='w-1/3'>
            <div className='flex justify-between text-secondary-200 font-bold'>
                <NavLink to='/' className=''>Home</NavLink>
                <NavLink to='/about' className=''>Tentang Kami</NavLink>
                <NavLink to='/contact' className=''>Contact</NavLink>
            </div>
        </div>
    )
}

export default Nav
