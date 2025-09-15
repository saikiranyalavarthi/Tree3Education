// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-600 text-white py-8 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-green-300">Tree3 Education</h2>
          <p className="text-sm mt-1">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-6">
          <a href="#home" className="hover:text-green-200 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-green-200 transition-colors">
            About
          </a>
          <a href="#courses" className="hover:text-green-200 transition-colors">
            Courses
          </a>
          <a href="#contact" className="hover:text-green-200 transition-colors">
            Contact
          </a>
        </nav>
      </div>

      {/* Optional small note */}
    </footer>
  );
}
