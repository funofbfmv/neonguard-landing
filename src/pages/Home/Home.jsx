import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Header from '../../components/Header/header';
import Banner from '../../components/Banner/banner';
import PricingSection from '../../components/PricingTag/PricingSection';
import ScrollToTopButton from '../../components/ScroolToTopButton/scrooltotopbutton';
import CountriesSection from '../../components/CountriesSection/countriessection';
import AboutSection from '../AboutUs/AboutSection';
import ContactUs from '../ContactUs/contactus';
import Footer from '../../components/Footer/footer';
import OpenVPNInfo from '../../components/OpenVPNInfo/openvpninfo';
import DownloadApps from '../../components/DownloadApps/downloadapps';
import Loader from '../../components/Loader/Loader';
import Coockies from '../../components/Coockies/coockies';
import VideoBaner from '../../components/VideoBaner/VideoBaner'

const Home = () => {
  const { scrollYProgress } = useScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Имитация задержки загрузки на 3 секунды
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <VideoBaner />
          <PricingSection />
          <OpenVPNInfo />
          <DownloadApps />
          <CountriesSection />
          <ScrollToTopButton />
          <AboutSection />
          <ContactUs />
          <Footer />
          <Coockies/>

          {/* Прогресс-дивайдер */}
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '6px',
              backgroundColor: 'purple', // Цвет прогресса
              scaleX: scrollYProgress,
              zIndex:20,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Home;