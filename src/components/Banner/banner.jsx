import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import bannerImage from '../../assets/4d4bc671-ff23-44ea-8556-f749251222c6.jpg';

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            NeonGuard VPN
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }} 
            className="text-lg md:text-2xl mb-10"
          >
            "NeonGuard VPN - ваш надежный компаньон для безопасного и анонимного пребывания в интернете."
          </motion.p>
          <Link
            to="pricing-section"
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg font-medium md:text-xl mt-4 px-12 py-3 bg-gradient-to-r from-blue-500 to-purple-700 rounded-full text-white hover:opacity-95 transform hover:scale-105 transition duration-500 ease-in-out backdrop-blur-lg opacity-85"
          >
            Тарифы
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;