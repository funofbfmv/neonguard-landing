// src/pages/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-400">404</h1>
        <p className="text-3xl text-gray-300 mt-4">Упппс... Страница не найдена</p>
        <a href="/" className="text-purple-400 hover:underline mt-6 block font-semibold text-lg">Вернуться на главную</a>
      </div>
    </div>
  );
};

export default NotFound;