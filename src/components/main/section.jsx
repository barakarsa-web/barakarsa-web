import React from 'react'
import photo from '../../assets/images/section.filosofi.jpg'
import { GraduationCap, HeartHandshake, HelpingHand } from 'lucide-react';

const Section = () => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden', height: '800px' }} className='mb-11'>
            <img src={photo} className='absolute top-0 left-0 w-full h-full object-cover' alt="section background" />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.8)',
                zIndex: 1 // Ensure this is lower than the header
            }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center" style={{ zIndex: 2 }}>
                <h1 className='mb-6 font-["Young_serif"] text-white text-4xl'>3 ARAH GERAK BARAKARSA</h1>
                <hr className='border-secondary-100' />
                <div className='flex gap-24'>
                    <div>
                        <div className='flex items-center justify-center mt-6'>
                            <GraduationCap size='40' color='#997428' />
                            <p className='font-["Young_serif"] ml-[10px] text-3xl'>Pendidikan</p>
                        </div>
                        <p className='text-base font-["Poppins"] text-secondary-400 mt-2'>BARAKARSA berkomitmen untuk mengintegrasikan nilai-nilai budaya lokal dalam proses pendidikan. Kami percaya bahwa dengan memahami dan menghargai kebudayaan, para relawan dapat membantu masyarakat membangun identitas yang kuat dan berdaya saing global.</p>
                    </div>

                    <div>
                        <div className='flex items-center justify-center mt-6'>
                            <HelpingHand size='40' color='#997428' />
                            <p className='font-["Young_serif"] ml-[10px] text-3xl'>Pengabdian</p>
                        </div>
                        <p className='text-base font-["Poppins"] text-secondary-400 mt-2'>Melalui pendekatan berbasis riset, para relawan BARAKARSA bekerja untuk mengidentifikasi masalah-masalah krusial di masyarakat dan mencari solusi yang tepat. Kami menggunakan data dan penelitian untuk memastikan setiap program pengabdian yang dijalankan memiliki dampak yang nyata dan berkelanjutan.</p>
                    </div>

                    <div>
                        <div className='flex items-center justify-center mt-6'>
                            <HeartHandshake size='40' color='#997428' />
                            <p className='font-["Young_serif"] ml-[10px] text-3xl'>Pemberdayaan</p>
                        </div>
                        <p className='text-base font-["Poppins"] text-secondary-400 mt-2'>BARAKARSA memfokuskan upayanya pada pemberdayaan masyarakat dengan memanfaatkan aset dan potensi yang ada. Dengan pendekatan Asset Based Community Development (ABCD), kami membantu komunitas menemukan dan mengembangkan kekuatan mereka sendiri, sehingga menciptakan perubahan yang positif dan mandiri.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Section
