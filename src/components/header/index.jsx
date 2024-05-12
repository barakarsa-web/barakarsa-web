import React from 'react'

const Header = () => {
    return (
        <header className='m-3 flex justify-between'>
            <div>
                <h1>LOGO</h1>
            </div>
            <nav>
                <ul className='flex gap-2'>
                    <li>HOME</li>
                    <li>TENTANG KAMI</li>
                    <li>PROGRAM</li>
                    <li>KONTAK</li>
                    <li>BLOG</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
