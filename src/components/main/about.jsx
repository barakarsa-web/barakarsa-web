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
                    kesatuan negara indonesia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet, illum aspernatur error quaerat suscipit saepe, repudiandae, qui ut asperiores blanditiis. Iste, corporis molestiae! Numquam nisi reiciendis, odio eum facere quod doloribus iusto eaque provident temporibus, sunt eligendi perferendis vero! Culpa exercitationem harum recusandae voluptatibus facere iste nihil laboriosam ipsam, porro ex unde dolore quam impedit sed nemo sunt modi eligendi veniam fugiat vitae nesciunt saepe ullam dolorem delectus! Ipsam, consequuntur iusto. Saepe explicabo, esse rerum, veritatis eum adipisci enim voluptate delectus nihil architecto laborum? Aspernatur facilis unde dolor ratione ea quibusdam facere omnis, magni accusantium numquam est quas eligendi.
                </div>
            </div>\
            <button>
                    <div className='bg-secondary-200 p-4 text-secondary-100 rounded-xl shadow'>
                        Join us
                    </div>
            </button>
        </div>
    )
}

export default About
