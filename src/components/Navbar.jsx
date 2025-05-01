import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

// --color-pinkish: #ef9273;
// --color-whiteish: #fef9f8;
// --color-blackish: #0d0d0d;

export default function Navbar() {
  const { user, logout } = useContext(UserContext); // Access user and logout from context
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 bg-white shadow-2xs z-50">
      {/* Logo */}
      <a href="/" className="text-xl font-bold text-[#ef9273]">
        MyApp
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-10 text-lg">
        <a href="/" className="text-b border-b border-b-transparent hover:text-[#ef9273] transform duration-300 ease-in-out hover:scale-105 hover:border-b-[#ef9273]">
          Home
        </a>
        <a href="/about" className="text-b border-b border-b-transparent hover:text-[#ef9273] transform duration-300 ease-in-out hover:scale-105 hover:border-b-[#ef9273]" >
          About
        </a>
        <a href="/Store" className="text-b border-b border-b-transparent hover:text-[#ef9273] transform duration-300 ease-in-out hover:scale-105 hover:border-b-[#ef9273]" >
          Store
        </a>
      </nav>

      {/* Profile or Login Section */}
      <div className="relative">
        {user ? (
          // Show Profile Section if user is signed in
          <div>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="hidden md:block text-gray-700 font-medium">
                {user.name}
              </span>
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  View Profile
                </a>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // Show Login Button if user is not signed in
          <a
            href="/login"
            className="px-4 py-2 bg-[#ef9273] text-[#fef9f8] rounded-lg hover:bg-[#ef9273]/80 duration-500 ease-in-out hover:scale-105"
          >
            Login
          </a>
        )}
      </div>
    </header>
  );
}