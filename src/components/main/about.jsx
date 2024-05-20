import text from '../../assets/images/Barkarsa.png'
import React from 'react'
import photo from '../../assets/images/section.png'

const About = () => {
    return (
        <div className='mx-10 flex flex-col items-center mb-72'>
            <h1 className='text-[40px] text-secondary-200 font-["Young_serif"]'>APA ITU</h1>
            <img src={text} className="w-44"></img>
            <div className='flex justify-between gap-8 mt-12'>
                <img src={photo} alt="" className='w-[500px] h-96 rounded shadow' />
                <div className='text-lg items-center text-secondary-300 font-["Young_serif"]'>
                    Bakti dan Berkarya Untuk Bangsa (BARAKARSA) adalah
                    komunitas kepemudaan Non Goverment Organization yang
                    dibangun untuk memfasilitasi pengembangan dan
                    pemberdayaan generasi muda Indonesia tentang Aspirasi,
                    Perilaku dan Dampak dari Generasi Muda untuk menjaga
                    keutuhan Bhineka Tunggal Ika (berbeda beda tetapi tetap
                    satu jua) merupakan semboyan negara indonesia yang
                    dijadikan sebagai dasar unuk mewujudkan persatuan dan
                    kesatuan negara indonesia.bl;asaknskjndjansdj
                </div>
            </div>
        </div>
    )
}

export default About
