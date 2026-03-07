import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { MdOutlineCampaign } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import logo from '../../src/assets/Images/logo/Navber_logo.png';
import useLocationStore from '../store/locationStore';
import Modal from './Model';

const Navber = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false); // ✅ modal control
  const { division, district } = useLocationStore();

  const divisionLabels = {
    dhaka: "ঢাকা",
    chattogram: "চট্টগ্রাম",
    rajshahi: "রাজশাহী",
    khulna: "খুলনা",
    barishal: "বরিশাল",
    sylhet: "সিলেট",
    rangpur: "রংপুর",
    mymensingh: "ময়মনসিংহ",
  };

  return (
    <>
      {/* ✅ Navbar এর নিজস্ব Modal */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}

      <nav className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-20 items-center justify-between gap-4">

            {/* Logo */}
            <div className="shrink-0">
              <img src={logo} alt="Bazardor Logo" className="h-10 w-auto" />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search essentials..."
                className="w-full h-10 rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#0e7c61] focus:ring-2 focus:ring-[#0e7c61]/20 transition-all"
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 shrink-0">

              {/* ✅ Location Badge - সব screen এ দেখাবে, click করলে modal খুলবে */}
              {district ? (
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1.5 bg-[#0e7c61]/10 text-[#0e7c61] px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-[#0e7c61]/20 transition-colors"
                >
                  <IoLocationSharp className="text-base shrink-0" />
                  <span className="hidden sm:inline">{divisionLabels[division] || division}, {district}</span>
                  <span className="sm:hidden">{district}</span>
                </button>
              ) : (
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors"
                >
                  <IoLocationSharp className="text-base" />
                  <span>লোকেশন</span>
                </button>
              )}

              {/* Submit Complaint Button */}
              <button
                className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: '#f59e0b' }}
              >
                <MdOutlineCampaign className="text-xl" />
                <span className="hidden sm:inline whitespace-nowrap">
                  Submit Complaint <span className="font-normal">(অভিযোগ)</span>
                </span>
              </button>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navber;