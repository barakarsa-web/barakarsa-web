import text from '../../assets/images/Barkarsa.png'
import React from 'react'
import photo from '../../assets/images/section.png'

const About = () => {
    return (
        <div className='w-[75%]  flex flex-col md:flex-row m-auto items-center  justify-center md:gap-11 md:mb-12  bg-white p-5 shadow rounded-xl'>
            <div className='space-y-12 flex  flex-col'>
                <div className='flex flex-col items-center'>
                    <h1 className='md:text-[40px] text- text-secondary-200 font-["Young_serif"]'>What is</h1>
                    <img src={text} className="w-52"></img>
                </div>
                <div className='text-base flex items-center justify-center text-secondary-300 font-["Young_serif"]'>
                    Bakti dan Berkarya Untuk Bangsa (BARAKARSA) adalah
                    komunitas kepemudaan Non Goverment Organization yang
                    dibangun untuk memfasilitasi pengembangan dan
                    pemberdayaan generasi muda Indonesia tentang Aspirasi,
                    Perilaku dan Dampak dari Generasi Muda untuk menjaga
                    keutuhan Bhineka Tunggal Ika (berbeda beda tetapi tetap
                    satu jua) merupakan semboyan negara indonesia yang
                    dijadikan sebagai dasar unuk mewujudkan persatuan dan
                    kesatuan negara indonesia.BARAKARSA pertama kali digagas pada tanggal 28 Oktober
                    2023 yang berfokus melaksanakan kegiatan berbasis P3M
                    (Pendidikan, Pengabdian, dan Pemberdayaan Masyarakat)
                    melalui kegiatan Cipta Karsa “Mengenal dan Mengeksplorasi
                    Keragaman Nusantara” Memiliki misi merekam dan meneliti
                    berbagai mimpi atau imajinasi Negara tentang Indonesia,
                    memaknai ulang keanekaragaman hayati dan Bhineka
                    Tunggal Ika, serta merangkai simpul-simpul komunitas yang
                    memiliki mimpi baru tentang Indonesia, berbagai
                    dokumentasi yang telah dikumpulkan diolah menjadi artikel
                    dan video dokumenter yang yang berisi tentang berbagai
                    potensi, problem, dan upaya penanganannya. Sebab
                    Keindahan Indonesia ini sangat disayangkan apabila tidak
                    dilestarikan dan didokumentasikan dengan baik.</div>
            </div>
        </div>
    )
}

export default About
