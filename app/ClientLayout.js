'use client';

import { useEffect } from 'react';
import Navbar from './web_components/Navbar';
import Footer from './web_components/Footer';
import { useTheme } from './context/ThemeContex';


const ClientLayout = ({ children }) => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar />
      <div className="mt-16 md:mt-20"></div>
      {children}

      <Footer />
    </>
  );
};

export default ClientLayout;