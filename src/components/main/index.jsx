import React from 'react'
import About from './about'
import Section from './section'
import FilosofiLogo from './filosofi_logo'

const Main = () => {
    return (
        <div className='mt-11'>
            <About />
            <FilosofiLogo/>
            <Section/>
        </div>
    )
}

export default Main
