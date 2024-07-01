import React, { useState } from 'react';
import Modal from 'react-modal';
import image1 from "../../assets/01fb60c7-c031-4fda-8ad1-9f5a72f7accc.jpg";
import image2 from "../../assets/59acbb0b-1242-4a16-b2cb-e9cd6b274a43.jpg";
import image3 from "../../assets/436b2976-1972-4103-9f44-53478b8b9c1d.jpg";
import modalImage from "../../assets/neo-from-the-matrix-holds-a-phone-in-his-hands-and-us.jpg"; // Импортируйте ваше изображение для модального окна

const PricingCard = ({ name, description, price, frequency, features, image, onSelectPlan }) => {
  return (
    <div className="backdrop-blur-lg bg-inherit bg-opacity-10 border rounded-3xl shadow-2xl hover:shadow-purple-500 p-6 m-4 transform transition duration-500 ease-in-out hover:scale-105 flex flex-col justify-between h-full">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-12 rounded" />
      <div>
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="text-2xl font-bold mb-2">${price} <span className="text-sm text-gray-400">{frequency}</span></div>
        <ul className="list-disc list-inside space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-400">
              <span className="font-bold">{feature.split(':')[0]}:</span>
              <span> {feature.split(':')[1]}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded-full ease-in-out transition duration-500 mt-4 mb-4"
        onClick={onSelectPlan}
      >
        Выбрать план
      </button>
    </div>
  );
};

const PricingSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const pricingData = [
    {
      name: "Trinity",
      description: "Идеальный план для индивидуальных пользователей, которые хотят защитить свои данные и получить доступ к контенту без ограничений.",
      price: 4.99,
      frequency: "/месяц",
      features: [
        'Трафик: до 100 ГБ',
        'Высокая скорость соединения: Оптимизированные серверы для быстрого интернет-соединения.',
        'Защита данных: 256-битное шифрование для максимальной безопасности.'
      ],
      image: image1
    },
    {
      name: "Morpheus",
      description: "Отличный выбор для небольших команд или семей, которые хотят пользоваться безопасным интернетом без ограничений.",
      price: 8.99,
      frequency: "/месяц",
      features: [
        'Трафик: 500 ГБ',
        'Все функции тарифа "Trinity"',
        'Приоритетная поддержка: Круглосуточная поддержка с приоритетным обслуживанием.',
        'Выделенные IP-адреса: Дополнительная опция для повышения уровня безопасности и стабильности соединения.'
      ],
      image: image3
    },
    {
      name: "Neo",
      description: "Профессиональный план, которым требуется больше трафика, высочайший уровень безопасности и производительности.",
      price: 12.99,
      frequency: "/месяц",
      features: [
        'Трафик: 1 ТБ',
        'Все функции тарифа "Morpheus"',
        'Выделенные серверы: Возможность использования выделенных серверов для повышения безопасности и производительности.',
        'Премиум-поддержка: Индивидуальная поддержка и консультирование по безопасности.'
      ],
      image: image2
    }
  ];

  return (
    <div id="pricing-section" className="flex flex-col items-center justify-center md:flex-row md:flex-wrap bg-gray-900 py-14 space-y-6 md:space-y-0 md:space-x-4">
      {pricingData.map((plan, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
          <PricingCard
            name={plan.name}
            description={plan.description}
            price={plan.price}
            frequency={plan.frequency}
            features={plan.features}
            image={plan.image}
            onSelectPlan={openModal}
          />
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Select Plan Modal"
        className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-zinc-900 rounded-2xl p-6 max-w-lg mx-auto backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-4">Перейти в Telegram</h2>
          <img src={modalImage} alt="Modal Image" className="w-full h-96 object-cover mb-4 rounded" />
          <p className="text-gray-100 mb-4">Для завершения процесса выбора плана и оплаты, пожалуйста, перейдите в наш Telegram бот.</p>
        
          <div className="flex justify-end space-x-4">
          <button
            className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white px-4 py-2 rounded-full transition duration-800 ease-in-out hover:from-purple-600 hover:via-purple-700 hover:to-purple-800"
            onClick={closeModal}
          >
            Отмена
          </button>
            <a
              href="https://t.me/pay_neonvpn_bot" // Замените на ссылку на вашего Telegram бота
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:from-purple-600 hover:via-purple-700 hover:to-purple-800"
            >
              Перейти в Telegram
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PricingSection;