import React, { useEffect, useState } from 'react';
import Logo from './logo';
import Nav from './nav';
import Hero from './hero';

const Header = () => {


    return (
        <header className='relative'>
            <Hero />
            <div className={`fixed top-0 left-0 right-0 flex justify-between md:p-10 md:px-20 py-10 px-14 mx-auto `}>
                <Logo /> 
                <Nav />
            </div>
        </header>
    );
};

export default Header;
