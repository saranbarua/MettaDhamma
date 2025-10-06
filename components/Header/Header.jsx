import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import images from "../../src/assets/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-primary-light shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link to={"/"}>
              <img src={images.logo} className="w-12 mx-auto" />
            </Link>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 lg:text-4xl text-2xl font-extrabold tracking-wide drop-shadow-lg">
              Mettha Dhamma
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-lg">
            <Link
              to={"/events"}
              className="hover:text-[#2A3335] text-white font-medium cursor-pointer transition-colors duration-300"
            >
              Events
            </Link>
            <Link
              to={"/news"}
              className="hover:text-[#2A3335] text-white font-medium cursor-pointer transition-colors duration-300"
            >
              News
            </Link>
            <Link
              to={"/All-blogs"}
              className="hover:text-[#2A3335] text-white font-medium cursor-pointer transition-colors duration-300"
            >
              BLogs
            </Link>
            <Link
              to={"/photo-gallery"}
              className="hover:text-[#2A3335] text-white font-medium cursor-pointer transition-colors duration-300"
            >
              Gallery
            </Link>
            <Link
              to={"/videos"}
              className="hover:text-[#2A3335] text-white font-medium cursor-pointer transition-colors duration-300"
            >
              Videos
            </Link>
            <Link
              to={"/executive-committee"}
              className="hover:text-[#2A3335] text-white font-medium cursor-pointer transition-colors duration-300"
            >
              Committee
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              size="lg"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 px-4 py-4">
              <li>
                <Link
                  to={"/events"}
                  className="text-gray-800 font-medium hover:text-[#2A3335] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to={"/photo-gallery"}
                  className="text-gray-800 font-medium hover:text-[#2A3335]  transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  to={"/executive-committee"}
                  className="text-gray-800 font-medium hover:text-[#2A3335] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Executive Committee
                </Link>
              </li>
              <li>
                <Link
                  to={"/All-blogs"}
                  className="text-gray-800 font-medium hover:text-[#2A3335] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BLogs
                </Link>
              </li>
              <li>
                <Link
                  to={"/news"}
                  className="text-gray-800 font-medium hover:text-[#2A3335] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to={"/videos"}
                  className="text-gray-800 font-medium hover:text-[#2A3335] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Videos
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
