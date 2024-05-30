import React from 'react';
import text from '../../assets/images/Barkarsa.png';
import heroVideo from '../../assets/videos/heroVideo.mp4';

const Hero = () => {
    return (
        <div className="relative overflow-hidden w-full h-screen">
            <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src={heroVideo} type="video/mp4" />
            </video>
            {/* Dark overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                <img src={text} className="md:w-[60%] m-auto md:h-full animate-backInDown" alt="Barakarsa" />
                <p className="text-lg md:mt-2 text-secondary-100 font-medium font-['Young_serif'] animate-backInTop md:text-xl">
                    Bakti dan berkarya untuk bangsa
                </p>
            </div>
        </div>
    );
};

export default Hero;
