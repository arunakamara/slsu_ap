import React, { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Burger Button */}
      <button
        className="flex flex-col float-end hover:cursor-pointer space-y-1 p-2 rounded  sm:hidden md:hidden focus:outline-none"
        onClick={toggleButton}
      >
        <span
          className={`h1-1 w-6 bg-blue-600 transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-6 bg-blue-600 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-6 bg-blue-600 transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-md p-4 rounded-md md:hidden">
          <ul className="spacey-2">
            <li>
              <Link to="/" className="drop-down-links" onClick={toggleButton}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="drop-down-links" onClick={toggleButton}>
                About
              </Link>
            </li>
            <li>
              <Link to="/events" className="drop-down-links" onClick={toggleButton}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/news" className="drop-down-links" onClick={toggleButton}>
                News
              </Link>
            </li>
            <li>
              <Link to="/membership" className="drop-down-links" onClick={toggleButton}>
                Membership
              </Link>
            </li>
            <li>
              <Link to="/resources" className="drop-down-links" onClick={toggleButton}>
                Resources
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="drop-down-links" onClick={toggleButton}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="drop-down-links" onClick={toggleButton}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
