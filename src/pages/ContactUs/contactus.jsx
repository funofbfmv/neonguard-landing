import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const ContactUs = () => {
  const telegramLink = 'https://t.me/pay_neonvpn_bot'; // Замените на ваш телеграмм аккаунт

  return (
    <div id="contact-section" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
        <p className="text-lg mb-8">Если у вас есть вопросы или предложения, так же если вы хотите приобрести VPN, вы можете связаться с нами через Телеграм.</p>
        <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-purple-700 text-white font-semibold rounded-full hover:bg-purple-800 transition duration-500 ease-in-out">
          <FaTelegramPlane className="mr-4" /> Связаться с нами
        </a>
      </div>
    </div>
  );
};

export default ContactUs;