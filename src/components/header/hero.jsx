import React from 'react'
import text from '../../assets/images/Barkarsa.png'
import heroVideo from '../../assets/videos/heroVideo.mp4'


const Hero = () => {
    return (
        <div className=" overflow-hidden w-full h-screen">
            <video className="w-full h-full  object-cover" autoPlay loop muted>
                <source src={heroVideo} type="video/mp4" />
            </video>
            {/* Overlay untuk membuat video gelap */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-center z-10 ">
                <img src={text} className="md:w-[60%] m-auto md:h-full  animate-backInDown"></img>
                <p className="text-lg md:mt-2 text-secondary-100 font-medium font-['Young_serif'] animate-backInTop md:text-xl ">Bakti dan berkarya untuk bangsa</p>
             
            </div>
        </div >
    );
};
export default Hero
