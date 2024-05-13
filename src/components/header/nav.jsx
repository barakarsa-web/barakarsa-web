import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Navlinks from './navlinks'

const Nav = () => {
    const [IsOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!IsOpen)
    }

    return (
        <>
            <div className='w-1/3 flex justify-end'>
                <div></div>
                <div className='hidden w-full justify-between md:flex'>
                    <Navlinks />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar} className='focus:outline-none'>
                        {IsOpen ? <X size='24' /> : <Menu size='24' />}
                    </button>
                </div>
                {IsOpen && (
                    <div className='flex  basis-full flex-col items-center'>
                        <Navlinks />
                    </div>
                )}
            </div>
        </>

    )
}

export default Nav
