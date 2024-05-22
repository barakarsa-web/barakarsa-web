import React from 'react'
import photo from '../../assets/images/section.filosofi.jpg'
import { GraduationCap } from 'lucide-react';

const Section = () => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden', height: '800px' }} className='mb-11'>
            <img src={photo} className='w-full h-auto' alt="" style={{ objectFit: 'cover' }} />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.8)'
            }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center">
                <h1 className='mb-4 font-["Young_serif"] text-yellow-600 text-4xl'>3 ARAH GERAK BARAKARSA</h1>
                <hr style={{ borderColor: 'gold' }} className='text-secondary-00' />
                <div className='flex gap-24'>
                    <div>
                        <div className='flex items-center justify-center mt-4'>
                            <GraduationCap size='40' color='#997428' />
                            <p  className='font-["Young_serif"] ml-[10px] text-3xl'>Pendidikan</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, cum.</p>
                    </div>
                    
                    <div>
                        <div className='flex items-center justify-center mt-4'>
                            <GraduationCap size='40' color='#997428' />
                            <p  className='font-["Young_serif"] ml-[10px] text-3xl'>Pendidikan</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, cum.</p>
                    </div>

                    <div>
                        <div className='flex items-center justify-center mt-4'>
                            <GraduationCap size='40' color='#997428' />
                            <p  className='font-["Young_serif"] ml-[10px] text-4xl'>Pendidikan</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, cum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
