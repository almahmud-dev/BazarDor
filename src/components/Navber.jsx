import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { MdOutlineCampaign } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import logo from '../../src/assets/Images/logo/Navber_logo.png';
import useLocationStore from '../store/locationStore';
import Modal from './Model';

const Navber = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showModal, setShowModal] = useState(false);
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
      {showModal && <Modal onClose={() => setShowModal(false)} />}

      <nav className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-3 lg:px-6">

          {/* ── Top Row: Logo | Location | Complaint ── */}
          <div className="flex h-14 items-center justify-between gap-2">

            {/* Logo */}
            <div className="shrink-0">
              <img src={logo} alt="Bazardor Logo" className="h-9 w-auto" />
            </div>

            {/* Desktop Search — hidden on mobile/tablet */}
            <div className="hidden lg:flex flex-1 max-w-md relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="পণ্য অনুসন্ধান করুন..."
                className="w-full h-10 rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#0e7c61] focus:ring-2 focus:ring-[#0e7c61]/20 transition-all"
              />
            </div>

            {/* Right: Location + Complaint */}
            <div className="flex items-center gap-2 shrink-0">

              {/* Location Badge */}
              {district ? (
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1.5 bg-[#0e7c61]/10 text-[#0e7c61] px-3 py-1.5 rounded-full font-semibold hover:bg-[#0e7c61]/20 transition-colors"
                >
                  <IoLocationSharp className="text-base shrink-0" />
                  {/* Desktop: Division, District */}
                  <span className="hidden lg:inline text-sm">
                    {divisionLabels[division] || division}, {district}
                  </span>
                  {/* Mobile/Tablet: district only, small */}
                  <span className="lg:hidden text-xs max-w-18 truncate">
                    {district}
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-semibold hover:bg-slate-200 transition-colors"
                >
                  <IoLocationSharp className="text-base" />
                  <span className="text-xs lg:text-sm">লোকেশন</span>
                </button>
              )}

              {/* Complaint Button */}
              <button
                className="flex items-center gap-1.5 rounded-full px-3 lg:px-4 py-2 lg:py-2.5 text-xs lg:text-sm font-bold text-white shadow-md transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: '#f59e0b' }}
              >
                <MdOutlineCampaign className="text-lg lg:text-xl" />
                <span className="whitespace-nowrap font-normal">অভিযোগ</span>
              </button>

            </div>
          </div>

          {/* ── Mobile / Tablet Search Row — hidden on lg+ ── */}
          <div className="lg:hidden pb-3">
            <div className="relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="পণ্য অনুসন্ধান করুন..."
                className="w-full h-10 rounded-full border border-slate-200 bg-slate-50 pl-10 pr-18 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#0e7c61] focus:ring-2 focus:ring-[#0e7c61]/20 transition-all"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#0e7c61] text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#0a6550] transition-colors">
                search
              </button>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navber;