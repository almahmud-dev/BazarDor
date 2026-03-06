import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { RiGovernmentLine } from "react-icons/ri";
import { MdOutlineCampaign } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import logo from '../../src/assets/Images/logo/Navber_logo.png';

const Navber = () => {
  const [searchValue, setSearchValue] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'Market Prices', 'Categories', 'About', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo Section */}
          <div className="shrink-0">
            {/* Replace with your actual logo */}
            <img src={logo} alt="Bazardor Logo" className="h-10 w-auto" />
           
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium font-inter transition-colors ${
                  index === 0
                    ? 'text-[#0e7c61]'
                    : 'text-slate-700 hover:text-[#0e7c61]'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Search & Action Button */}
          <div className="flex items-center gap-3">

            {/* Search Bar */}
            <div className="hidden md:flex relative items-center">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search essentials..."
                className="h-10 w-48 lg:w-64 rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#0e7c61] focus:ring-2 focus:ring-[#0e7c61]/20 transition-all"
              />
            </div>

            {/* Submit Complaint Button */}
            <button
              className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#f59e0b' }}
            >
              <MdOutlineCampaign className="text-xl" />
              <span className="hidden sm:inline whitespace-nowrap">
                Submit Complaint <span className="font-normal">(অভিযোগ)</span>
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <HiOutlineMenuAlt1 className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-slate-100 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm font-semibold px-2 py-1 rounded transition-colors ${
                    index === 0
                      ? 'text-[#0e7c61]'
                      : 'text-slate-700 hover:text-[#0e7c61]'
                  }`}
                >
                  {item}
                </a>
              ))}
              {/* Mobile Search */}
              <div className="relative mt-2">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search essentials..."
                  className="w-full h-10 rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm focus:outline-none focus:border-[#0e7c61] focus:ring-2 focus:ring-[#0e7c61]/20"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navber;