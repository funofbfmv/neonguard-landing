import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import bannerVideo from '../../assets/Video/purple.mp4';

const VideoBanner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bannerVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 5, y: 15 }} 
            transition={{ duration: 1 }} 
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            NeonGuard VPN
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }} 
            className="text-lg md:text-2xl mb-10 mx-4"
          >
            "Ваш надежный компаньон для безопасного и анонимного пребывания в интернете."
          </motion.p>
          <Link
  to="pricing-section"
  smooth={true}
  duration={500}
  className="relative inline-block cursor-pointer text-lg font-medium md:text-xl mt-6 px-32 py-6 bg-transparent rounded-full text-white hover:opacity-100 transform hover:scale-105 transition duration-500 ease-in-out backdrop-blur-lg opacity-90"
>
  <span className="absolute inset-0 bg-gradient-to-r shadow-2xl hover:shadow-purple-600 transition duration-500 ease-in-out from-blue-500 to-purple-800 rounded-full p-px">
    <span className="flex items-center justify-center w-full h-full bg-black rounded-full backdrop-blur-lg opacity-80">
      Подключить
    </span>
  </span>
</Link>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;