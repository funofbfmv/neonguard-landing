import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">NeonGuard VPN</h2>
            <p className="text-gray-400 mt-2">Ваш надежный компаньон для безопасного и анонимного пребывания в интернете.</p>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-white transition duration-300">Главная</a>
            <a href="#pricing-section" className="hover:text-white transition duration-300">Тарифы</a>
            <a href="#about" className="hover:text-white transition duration-300">О нас</a>
            <a href="#contact" className="hover:text-white transition duration-300">Контакты</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">&copy; 2024 NeonGuard VPN. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;