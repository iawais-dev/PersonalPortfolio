import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg mb-4">Connect with me</p>
        <div className="flex justify-center gap-6 mb-4">
          {/* Social Icons */}
          <Link
            href="https://github.com/iawais-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-600 transition duration-300"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/awais-tahir-6a2898333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin size={24} />
          </Link>
          <div
          className="relative cursor-pointer hover:text-black"
          >
            <FaTwitter size={24} />
          </div>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2025 Awais. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
