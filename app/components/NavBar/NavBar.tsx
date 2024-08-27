"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="px-4 md:px-10 pt-5">
      <div className="flex items-center justify-between">
        <img src="/images/header-logo.svg" alt="Logo" className="w-32" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-[#565656] font-semibold">
          <a href="#">Home</a>
          <a href="#">Teams</a>
          <a href="#">Success Stories</a>
          <a href="#">About Us</a>
          <a href="#">Blogs</a>
          <a href="#">Get Involved</a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-5 text-[#3C3C3C] font-bold">
          <a href="#">Login</a>
          <button className="bg-[#264FAD] text-white py-2 px-5 rounded">
            Donate
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleNav} className="text-2xl text-[#3C3C3C]">
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white border-t border-[#EAEAEA] z-50 transition-transform transform ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center pt-5 space-y-4">
          <a
            href="#"
            className="text-[#565656] font-semibold"
            onClick={toggleNav}
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#565656] font-semibold"
            onClick={toggleNav}
          >
            Teams
          </a>
          <a
            href="#"
            className="text-[#565656] font-semibold"
            onClick={toggleNav}
          >
            Success Stories
          </a>
          <a
            href="#"
            className="text-[#565656] font-semibold"
            onClick={toggleNav}
          >
            About Us
          </a>
          <a
            href="#"
            className="text-[#565656] font-semibold"
            onClick={toggleNav}
          >
            Blogs
          </a>
          <a
            href="#"
            className="text-[#565656] font-semibold"
            onClick={toggleNav}
          >
            Get Involved
          </a>
          <a href="#" className="text-[#3C3C3C] font-bold" onClick={toggleNav}>
            Login
          </a>
          <button
            className="bg-[#264FAD] text-white py-2 px-5 rounded mb-5"
            onClick={toggleNav}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
