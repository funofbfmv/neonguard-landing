import React from 'react';

const OpenVPNInfo = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">Мы используем OpenVPN протокол</h2>
        <p className="text-lg md:text-xl mb-6">
          NeonGuard VPN использует надежный и безопасный протокол OpenVPN, чтобы обеспечить вашу
          анонимность и безопасность в интернете. Мы предоставляем вам все необходимые ключи и
          конфигурации для подключения.
        </p>
      </div>
    </div>
  );
};

export default OpenVPNInfo;