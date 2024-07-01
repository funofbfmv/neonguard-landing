import React from 'react';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#FFFFFF" // Цвет спиннера
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeDasharray="90 60"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loader;