"use client";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavbarSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className={`w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Awais<span className="text-blue-500">Dev</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              <ul className="flex items-center gap-10">
                <Link href="/about">
                  <li className="block text-gray-600 hover:text-blue-500 transition duration-300">About</li>
                </Link>
                <Link href="/project">
                  <li className="block text-gray-600 hover:text-blue-500 transition duration-300">Projects</li>
                </Link>
                <Link href="/contact">
                  <li className="block text-gray-600 hover:text-blue-500 transition duration-300">Contact</li>
                </Link>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-blue-500 focus:outline-none"
              >
                {isOpen ? (
                  <IoMdClose className="h-5 w-5 text-blue-500" />
                ) : (
                  <RiMenu3Line className="h-5 w-5 text-blue-500" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`${
            isOpen ? 'absolute' : 'hidden'
          } md:hidden bg-white shadow-md fixed w-full z-10 transition-all duration-300`}
        >
          <div className="px-4 text-center pb-4">
            <ul>
              <Link href="/about">
                <li className="block text-gray-600 hover:text-blue-500 py-3">About</li>
              </Link>
              <Link href="/project">
                <li className="block text-gray-600 hover:text-blue-500 py-3">Projects</li>
              </Link>
              <Link href="/contact">
                <li className="block text-gray-600 hover:text-blue-500 py-3">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg border shadow-2xl border-white transition-all duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default NavbarSection;
