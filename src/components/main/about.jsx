import text from '../../assets/images/Barkarsa.png'
import React from 'react'
import photo from '../../assets/images/section.png'

const About = () => {
    return (
        <div className='mx-10 flex justify-between gap-11 mb-12'>
            <img src={photo} alt="kegiatan barakarsa" className='  md:w-[500px] md:h-[300px] mt-4 rounded shadow' />
            <div className='space-y-12 flex  flex-col'>
                <div className=''>
                    <h1 className='text-[40px] text-secondary-200 font-["Young_serif"]'>APA ITU</h1>
                    <img src={text} className="w-44"></img>
                </div>
                <div className='text-base  text-secondary-300 font-["Young_serif"]'>
                    Bakti dan Berkarya Untuk Bangsa (BARAKARSA) adalah
                    komunitas kepemudaan Non Goverment Organization yang
                    dibangun untuk memfasilitasi pengembangan dan
                    pemberdayaan generasi muda Indonesia tentang Aspirasi,
                    Perilaku dan Dampak dari Generasi Muda untuk menjaga
                    keutuhan Bhineka Tunggal Ika (berbeda beda tetapi tetap
                    satu jua) merupakan semboyan negara indonesia yang
                    dijadikan sebagai dasar unuk mewujudkan persatuan dan
                    kesatuan negara indonesia.
                </div>
            </div>
        </div>
    )
}

export default About
