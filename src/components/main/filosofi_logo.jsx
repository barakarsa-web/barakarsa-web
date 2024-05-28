import React from 'react'
import B from '../../assets/images/B_logo.png'

const FilosofiLogo = () => {
    return (
        <div className='flex flex-col items-center justify-center mb-5'>
            <h1 className='text-secondary-200 text-4xl font-["Young_serif"]'>Filosofi Logo</h1>
            <div className='flex justify-between gap-4'>
                <div >
                    <img src={B} alt="" />
                    <h1>Simbol B</h1>
                    <p className='text-secondary-400 text-base font-["Poppins"]'>Mengacu pada kata BARA yang memiliki makna bakti dan berkarya</p>
                </div>
                <div className='mt-10'>
                    <img src={B} alt="" />
                    <h1>Simbol B</h1>
                    <p className='text-secondary-400 text-base font-["Poppins"]'>Mengacu pada kata BARA yang memiliki makna bakti dan berkarya</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <img src={B} alt="" />
                    <h1>Simbol B</h1>
                    <p className='text-secondary-400 text-base font-["Poppins"]'>Mengacu pada kata BARA yang memiliki makna bakti dan berkarya</p>
                </div>
                <div className='mt-10'>
                    <img src={B} alt="" />
                    <h1>Simbol B</h1>
                    <p className='text-secondary-400 text-base font-["Poppins"]'>Mengacu pada kata BARA yang memiliki makna bakti dan berkarya</p>
                </div>
            </div>
        </div>
    )
}

export default FilosofiLogo
