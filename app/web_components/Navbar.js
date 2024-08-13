'use client';

import Link from 'next/link';
import { useTheme } from '../context/ThemeContex';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navbarRef = useRef(null);
  const router = useRouter(); // For navigation

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search/${encodeURIComponent(query)}`); // Navigate to search page with query
    }
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false); // Hide mobile menu
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    // Apply the theme on component mount
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 p-4 border-b-2 border-gray-300 transition-transform duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex items-center w-full md:w-auto justify-between md:justify-start">
          <div className="text-2xl font-bold">
            <Link href="/" onClick={handleLinkClick}>Satyam Blogs</Link>
          </div>

          <div className='flex'>
            <button
              onClick={toggleTheme}
              className={`md:hidden mx-3 text-xl ${isDarkMode ? 'text-white' : 'text-black'} hover:text-gray-400`}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className="md:hidden flex items-center text-2xl"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        <div className={`w-full md:w-auto flex-grow md:flex md:items-center md:justify-center ${isMobileMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4 mt-4 md:mb-0">
            <li>
              <Link href="/" onClick={handleLinkClick} className="hover:text-gray-400 font-bold">
                Home
              </Link>
            </li>
           
            <li>
              <Link href="/category/Updates" onClick={handleLinkClick} className="hover:text-gray-400 font-bold">
                Updates
              </Link>
            </li>
            <li>
              <Link href="/category/Technology" onClick={handleLinkClick} className="hover:text-gray-400 font-bold">
                Technology
              </Link>
            </li>
            {/* <li>
              <Link href="/category/Gadgets" onClick={handleLinkClick} className="hover:text-gray-400 font-bold">
                Gadgets
              </Link>
            </li> */}
            <li>
              <Link href="/category/FunFacts" onClick={handleLinkClick} className="hover:text-gray-400 font-bold">
                Fun Facts
              </Link>
            </li>
            {/* <li>
              <Link href="/category/Mobiles" onClick={handleLinkClick} className="hover:text-gray-400 font-bold">
                Mobile
              </Link>
            </li> */}
             <li>
              <Link href="https://satyamregmi.com.np" onClick={handleLinkClick} className="hover:text-gray-400 font-bold" target="_blank" >
                Main
              </Link>
            </li>
          </ul>

          {isMobileMenuOpen && (
            <form onSubmit={handleSearch} className="flex items-center mt-4 md:hidden">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className={`p-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
              />
              <button
                type="submit"
                className={`ml-2 p-2 rounded-lg ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'} hover:bg-gray-400`}
              >
                Search
              </button>
            </form>
          )}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className={`p-2 rounded-lg border ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
            />
            <button
              type="submit"
              className={`ml-2 p-2 rounded-lg ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'} hover:bg-gray-400`}
            >
              Search
            </button>
          </form>

          <button
            onClick={toggleTheme}
            className={`text-xl ${isDarkMode ? 'text-white' : 'text-black'} hover:text-gray-400`}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;