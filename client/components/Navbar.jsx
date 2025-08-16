import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import logo from "../Images/logo.jpg";

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <nav className="bg-green-800 text-white p-3 sticky top-0 z-10 shadow-md ">
      <div className="min-w-full flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="logo_title flex flex-col sm:flex-row md:flex-col justify-center items-center ml-3">
          <img
            src={logo}
            className="w-20 sm:w-[50px] h-auto rounded-full m-2"
          />
          <h2 className="text-[min(10wv,70px)] font-bold mt-2">SLSU-AP</h2>
        </div>

        <div className="hidden sm:flex sm:mt-2 sm:justify-around md:block mr-2 ">
          <ul className="flex space-x-3 ">
            <li>
              <Link to="/" className="links ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="links">
                About
              </Link>
            </li>
            <li>
              <Link to="/events" className="links">
                Events
              </Link>
            </li>
            
            <li>
              <Link to="/membership" className="links">
                Membership
              </Link>
            </li>
            <li>
              <Link to="/resources" className="links">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="links">
                Gallery
              </Link>
            </li>
            
            {loggedIn ? (
              <>
                <li>
                  <Link to="/profile" className="links">
                    Profile
                  </Link>
                </li>
                <li>
                  <button className="links" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="links">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="links">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <BurgerMenu />
    </nav>
  );
};

export default Navbar;
