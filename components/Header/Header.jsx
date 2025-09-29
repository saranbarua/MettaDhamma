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
      <div className="bg-primary">
        <div className="lg:w-[75%] mx-auto  flex items-center justify-between">
          <img src={images.banner} className="w-full h-auto mx-auto" />
        </div>
      </div>
      <header className="bg-primary-light shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to={"/"}>
            <h1 className="text-white font-medium">
              চট্টগ্রাম সমিতি পূর্বাঞ্চল সৌদি আরব
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
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
              to={"/photo-gallery"}
              className="hover:text-[#2A3335] text-white font-medium cursor-pointer transition-colors duration-300"
            >
              Gallery
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
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
