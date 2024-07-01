// src/components/AboutSection/AboutSection.jsx

import React from 'react';

const AboutSection = () => {
  return (
    <div id="about-section" className="flex flex-col items-center justify-center bg-gray-900 py-10 px-6">
      <h2 className="text-4xl font-bold text-white mb-6">О нас</h2>
      <div className="max-w-4xl text-center text-gray-300 space-y-4">
        <p>
          Мы, NeonGuard VPN, предлагаем передовые решения для обеспечения безопасности и конфиденциальности в интернете. Наша цель - защитить ваши данные и предоставить вам полный доступ к глобальной сети без ограничений.
        </p>
        <p>
          Наши услуги включают:
        </p>
        <ul className="list-disc list-inside space-y-2 text-left">
          {/* <li>
            <span className="font-bold">Неограниченный трафик:</span> Пользуйтесь интернетом без ограничений по объему данных.
          </li> */}
          <li>
            <span className="font-bold">Высокая скорость соединения:</span> Оптимизированные серверы для стабильного и быстрого интернет-соединения.
          </li>
          <li>
            <span className="font-bold">Максимальная защита данных:</span> 256-битное шифрование для обеспечения высочайшего уровня безопасности.
          </li>
          <li>
            <span className="font-bold">Поддержка нескольких устройств:</span> Подключайте несколько устройств, но при этом нужо будет пользоваться на чем то одном, что бы не было перебоев в работе OpenVPN ключей.
          </li>
          <li>
            <span className="font-bold">Круглосуточная поддержка в Телеграм:</span> Наша команда поддержки готова помочь вам в любое время дня и ночи.
          </li>
          <li>
            <span className="font-bold">Выделенные IP-адреса:</span> Дополнительная опция для повышения уровня безопасности и стабильности соединения.
          </li>
          <li>
            <span className="font-bold">Защита от DDoS атак:</span> Многослойная защита от всех типов DDoS атак.
          </li>
        </ul>
        <p>
          Присоединяйтесь к нам сегодня и откройте для себя новый уровень свободы и безопасности в интернете с NeonGuard VPN!
        </p>
      </div>
    </div>
  );
};

export default AboutSection;