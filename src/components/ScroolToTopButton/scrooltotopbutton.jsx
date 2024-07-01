import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 shadow-lg text-white hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 transition duration-300"
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;