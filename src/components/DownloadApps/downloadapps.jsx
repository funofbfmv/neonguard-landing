import React from 'react';

const DownloadApps = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">Скачайте OpenVPN Клиент</h2>
        <p className="text-lg md:text-xl mb-6 ">
          Выберите платформу и скачайте OpenVPN клиент для удобного и безопасного использования NeonGuard VPN.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <a
            href="https://openvpn.net/vpn-client/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded ease-in-out duration-500"
          >
            Windows
          </a>
          <a
            href="https://tunnelblick.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded ease-in-out duration-500"
          >
            MacOS
          </a>
          <a
            href="https://apps.apple.com/us/app/openvpn-connect/id590379981"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded ease-in-out duration-500"
          >
            iPhone
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=net.openvpn.openvpn&hl=en&gl=US"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded ease-in-out duration-500"
          >
            Android
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApps;