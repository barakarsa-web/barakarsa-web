import React from 'react'
import Logo from './logo'
import Nav from './nav'
import Hero from './hero'

const Header = () => {
    return (
        <header className='relative'>
            <Hero />
            <div className='absolute top-0 left-0 right-0 flex justify-between md:p-10 p-8 mx-auto'>
                <Logo />
                <Nav />
            </div>
        </header>
    )
}

export default Header
