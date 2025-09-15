import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-900 via-emerald-800 to-green-600 shadow-md p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-300 drop-shadow-md">
          Tree3Education
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold text-white">
          <li className="hover:text-yellow-300 transition cursor-pointer">
            Home
          </li>
          <li className="hover:text-yellow-300 transition cursor-pointer">
            About
          </li>
          <li className="hover:text-yellow-300 transition cursor-pointer">
            Courses
          </li>
          <li className="hover:text-yellow-300 transition cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-300 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-white text-lg font-semibold text-center">
          <li className="hover:text-yellow-300 transition cursor-pointer">
            Home
          </li>
          <li className="hover:text-yellow-300 transition cursor-pointer">
            About
          </li>
          <li className="hover:text-yellow-300 transition cursor-pointer">
            Courses
          </li>
          <li className="hover:text-yellow-300 transition cursor-pointer">
            Contact
          </li>
        </ul>
      )}
    </nav>
  );
}
