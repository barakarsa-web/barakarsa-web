import React from 'react'
import Logo from './logo'
import Nav from './nav'

const Header = () => {
    return (
        <header className='sticky top-0 bg-secondary-200  z-[20] mx-auto flex flex-wrap items-center justify-between p-8'>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header
