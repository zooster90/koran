import React from 'react';
import { FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="shadow-sm sticky top-0 bg-white z-20">
      <div className="container h-16 flex items-center ">
        <h1>
          <span className="text-2xl text-primary-500 font-semibold">Koran</span>
          <span className="text-gray-700">.co</span>
        </h1>
        <nav className="ml-auto text-sm text-gray-700 hidden md:inline-block">
          <a href="#" className="mx-4 lg:mx-6 hover:text-primary-500 hover:font-medium">
            Home
          </a>
          <a href="#" className="mx-4 lg:mx-6 hover:text-primary-500 hover:font-medium">
            About
          </a>
          <a href="#" className="mx-4 lg:mx-6 hover:text-primary-500 hover:font-medium">
            Support
          </a>
        </nav>
        <span className="mx-4 lg:mx-6 font-light text-gray-700 hidden md:inline-block">|</span>
        <button type="button" className="text-sm hidden md:flex items-center text-gray-700 hover:text-primary-500">
          <span className="mr-2">My Account</span>
          <FiUser size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
