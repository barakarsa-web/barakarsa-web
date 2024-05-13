import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {
    return (
        <>
            <NavLink to='/' className=''>Home</NavLink>
            <NavLink to='/about' className=''>Tentang Kami</NavLink>
            <NavLink to='/contact' className=''>Contact</NavLink>
            <NavLink to='/blog' className=''>Blog</NavLink>
        </>

    )
}

export default Navlinks
