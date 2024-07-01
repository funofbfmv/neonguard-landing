import React, { useState } from 'react';

export default function Example() {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setRejected(false);
  };

  const handleReject = () => {
    setRejected(true);
    setAccepted(false);
  };

  if (accepted || rejected) {
    return null; // Скрываем баннер, если приняли или отклонили
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 blur-none opacity-85 z-10">
      <div className="pointer-events-auto max-w-xl rounded-xl bg-gray-900 p-6 shadow-lg ring-1 ring-gray-900/10">
        <p className="text-sm leading-6 text-gray-100">
        Наш сервис использует файлы cookie для улучшения работы сайта
         и предоставления персонализированного опыта. Принятие наших cookie является
          добровольным, но рекомендуется, чтобы получить максимальную отдачу от использования
           нашего сервиса. Более подробную информацию о нашей политике использования
            файлов cookie вы можете найти в нашей
            {' '}
          <a href="#" className="font-semibold text-purple-600">
            политику использования cookie
          </a>
          .
        </p>
        <div className="mt-4 flex items-center gap-x-5">
          <button
            type="button"
            className="rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 ease-in-out duration-500"
            onClick={handleAccept}
          >
            Принять все
          </button>
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-300"
            onClick={handleReject}
          >
            Отклонить все
          </button>
        </div>
      </div>
    </div>
  );
}