import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-3xl text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
          Hi, I'm Awais<span className="text-yellow-300">!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl mb-8">
          A passionate <span className="font-semibold">Web Developer</span> dedicated to building modern, user-friendly, and scalable web applications.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            href="#projects"
            className="px-6 py-3 bg-yellow-400 text-gray-800 rounded-md font-semibold hover:bg-yellow-300 transition duration-300"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-gray-800 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
    </section>
  );
};

export default HeroSection;
