import React, { useState, useRef, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";
import { MdOutlineCampaign } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import logo from '../../src/assets/Images/logo/Navber_logo.png';
import useLocationStore from '../store/locationStore';
import Modal from './Model';
import useSearchStore from '../store/searchStore';

// ── Items data (শুধু নাম আর category দরকার suggestion এর জন্য)
import চালImg    from '../assets/Images/Items/চাল.png'
import আটাImg    from '../assets/Images/Items/আটা.png'
import তেলImg    from '../assets/Images/Items/ভোজ্য তেল.png'
import চিনিImg   from '../assets/Images/Items/চিনি.png'
import লবনImg    from '../assets/Images/Items/লবন.png'
import ডালImg    from '../assets/Images/Items/ডাল.png'
import আলুImg    from '../assets/Images/Items/আলু.png'
import মসলাImg   from '../assets/Images/Items/মসলা.png'
import মাছImg    from '../assets/Images/Items/মাছ ও গোশত.png'
import দুধImg    from '../assets/Images/Items/দুধ.png'
import ডিমImg    from '../assets/Images/Items/ডিম.png'
import শাকImg    from '../assets/Images/Items/শাক ও সবজি.png'
import ফলImg     from '../assets/Images/Items/ফল.png'
import জ্বালানিImg from '../assets/Images/Items/জ্বালানি.png'

const allItems = [
  { id: 101, name: 'চাল সরু - নাজির/মিনিকেট', category: 'চাল', image: চালImg },
  { id: 102, name: 'চাল মাঝারি - পাইজাম/আটাশ', category: 'চাল', image: চালImg },
  { id: 103, name: 'চাল মোটা - স্বর্ণা/চায়না ইরি', category: 'চাল', image: চালImg },
  { id: 104, name: 'সুগন্ধি চাল', category: 'চাল', image: চালImg },
  { id: 105, name: 'কাটারিভোগ', category: 'চাল', image: চালImg },
  { id: 201, name: 'আটা সাদা (খোলা)', category: 'আটা/ময়দা', image: আটাImg },
  { id: 202, name: 'আটা (প্যাকেট)', category: 'আটা/ময়দা', image: আটাImg },
  { id: 203, name: 'ময়দা (খোলা)', category: 'আটা/ময়দা', image: আটাImg },
  { id: 204, name: 'ময়দা (প্যাকেট)', category: 'আটা/ময়দা', image: আটাImg },
  { id: 205, name: 'সুজি (প্যাকেট)', category: 'আটা/ময়দা', image: আটাImg },
  { id: 301, name: 'সয়াবিন তেল (লুজ)', category: 'ভোজ্য তেল', image: তেলImg },
  { id: 302, name: 'সয়াবিন তেল (৫ লি. বোতল)', category: 'ভোজ্য তেল', image: তেলImg },
  { id: 303, name: 'সয়াবিন তেল (২ লি. বোতল)', category: 'ভোজ্য তেল', image: তেলImg },
  { id: 304, name: 'সয়াবিন তেল (১ লি. বোতল)', category: 'ভোজ্য তেল', image: তেলImg },
  { id: 305, name: 'পাম অয়েল (লুজ)', category: 'ভোজ্য তেল', image: তেলImg },
  { id: 306, name: 'সুপার পাম অয়েল (লুজ)', category: 'ভোজ্য তেল', image: তেলImg },
  { id: 307, name: 'রাইস ব্রান তেল (৫ লি.)', category: 'ভোজ্য তেল', image: তেলImg },
  { id: 308, name: 'রাইস ব্রান তেল (১ লি.)', category: 'ভোজ্য তেল', image: তেলImg },
  { id: 309, name: 'সরিষার তেল (লুজ)', category: 'ভোজ্য তেল', image: তেলImg },
  { id: 401, name: 'চিনি খোলা (লাল)', category: 'চিনি', image: চিনিImg },
  { id: 402, name: 'চিনি খোলা (সাদা)', category: 'চিনি', image: চিনিImg },
  { id: 403, name: 'চিনি (প্যাকেট)', category: 'চিনি', image: চিনিImg },
  { id: 501, name: 'লবণ (খোলা)', category: 'লবণ', image: লবনImg },
  { id: 502, name: 'লবণ (প্যাকেট)', category: 'লবণ', image: লবনImg },
  { id: 601, name: 'মশুর ডাল (বড় দানা)', category: 'ডাল', image: ডালImg },
  { id: 602, name: 'মশুর ডাল (মাঝারি দানা)', category: 'ডাল', image: ডালImg },
  { id: 603, name: 'মশুর ডাল (ছোট দানা)', category: 'ডাল', image: ডালImg },
  { id: 604, name: 'মুগ ডাল (সরু)', category: 'ডাল', image: ডালImg },
  { id: 605, name: 'মুগ ডাল (মোটা)', category: 'ডাল', image: ডালImg },
  { id: 606, name: 'এ্যাংকর ডাল', category: 'ডাল', image: ডালImg },
  { id: 607, name: 'খেসারি ডাল', category: 'ডাল', image: ডালImg },
  { id: 608, name: 'মাশ কলাই ডাল', category: 'ডাল', image: ডালImg },
  { id: 609, name: 'ছোলা (মানভেদে)', category: 'ডাল', image: ডালImg },
  { id: 701, name: 'আলু (ডায়মন্ড)', category: 'আলু', image: আলুImg },
  { id: 702, name: 'আলু (লাল)', category: 'আলু', image: আলুImg },
  { id: 703, name: 'আলু (হল্যান্ড)', category: 'আলু', image: আলুImg },
  { id: 801, name: 'পেঁয়াজ (দেশি)', category: 'মসলা', image: মসলাImg },
  { id: 802, name: 'রসুন (দেশি)', category: 'মসলা', image: মসলাImg },
  { id: 803, name: 'রসুন (আমদানি)', category: 'মসলা', image: মসলাImg },
  { id: 804, name: 'কাঁচা মরিচ', category: 'মসলা', image: মসলাImg },
  { id: 805, name: 'শুকনা মরিচ (দেশি)', category: 'মসলা', image: মসলাImg },
  { id: 806, name: 'শুকনা মরিচ (আমদানি)', category: 'মসলা', image: মসলাImg },
  { id: 807, name: 'হলুদ (দেশি)', category: 'মসলা', image: মসলাImg },
  { id: 808, name: 'আদা (দেশি)', category: 'মসলা', image: মসলাImg },
  { id: 809, name: 'আদা (আমদানি)', category: 'মসলা', image: মসলাImg },
  { id: 810, name: 'জিরা', category: 'মসলা', image: মসলাImg },
  { id: 811, name: 'দারুচিনি', category: 'মসলা', image: মসলাImg },
  { id: 812, name: 'লবঙ্গ', category: 'মসলা', image: মসলাImg },
  { id: 813, name: 'এলাচ (ছোট)', category: 'মসলা', image: মসলাImg },
  { id: 814, name: 'ধনিয়া', category: 'মসলা', image: মসলাImg },
  { id: 815, name: 'তেজপাতা', category: 'মসলা', image: মসলাImg },
  { id: 901, name: 'রুই', category: 'মাছ ও গোশত', image: মাছImg },
  { id: 902, name: 'কাতল', category: 'মাছ ও গোশত', image: মাছImg },
  { id: 903, name: 'চিতল', category: 'মাছ ও গোশত', image: মাছImg },
  { id: 904, name: 'বোয়াল', category: 'মাছ ও গোশত', image: মাছImg },
  { id: 905, name: 'আইড়', category: 'মাছ ও গোশত', image: মাছImg },
  { id: 906, name: 'সিলভার কার্প', category: 'মাছ ও গোশত', image: মাছImg },
  { id: 907, name: 'গোল্ড কার্প', category: 'মাছ ও গোশত', image: মাছImg },
  { id: 1001, name: 'দুধ (তরল)', category: 'দুধ', image: দুধImg },
  { id: 1101, name: 'মুরগির ডিম (লাল)', category: 'ডিম', image: ডিমImg },
  { id: 1102, name: 'মুরগির ডিম (সাদা)', category: 'ডিম', image: ডিমImg },
  { id: 1103, name: 'মুরগির ডিম (দেশি)', category: 'ডিম', image: ডিমImg },
  { id: 1104, name: 'হাঁসের ডিম', category: 'ডিম', image: ডিমImg },
  { id: 1105, name: 'কোয়েল পাখির ডিম', category: 'ডিম', image: ডিমImg },
  { id: 1201, name: 'পুঁইশাক', category: 'শাক ও সবজি', image: শাকImg },
  { id: 1202, name: 'লাল শাক', category: 'শাক ও সবজি', image: শাকImg },
  { id: 1203, name: 'কলমি শাক', category: 'শাক ও সবজি', image: শাকImg },
  { id: 1204, name: 'পালং শাক', category: 'শাক ও সবজি', image: শাকImg },
  { id: 1205, name: 'পাট শাক', category: 'শাক ও সবজি', image: শাকImg },
  { id: 1206, name: 'পটল', category: 'শাক ও সবজি', image: শাকImg },
  { id: 1207, name: 'কচু শাক', category: 'শাক ও সবজি', image: শাকImg },
  { id: 1301, name: 'পেঁয়ারা (কাজি)', category: 'ফল', image: ফলImg },
  { id: 1302, name: 'পেঁয়ারা (দেশি)', category: 'ফল', image: ফলImg },
  { id: 1303, name: 'আনারস', category: 'ফল', image: ফলImg },
  { id: 1304, name: 'জাম্বুরা', category: 'ফল', image: ফলImg },
  { id: 1305, name: 'বড়ই', category: 'ফল', image: ফলImg },
  { id: 1306, name: 'আপেল (সবুজ)', category: 'ফল', image: ফলImg },
  { id: 1307, name: 'আপেল (ফুজি)', category: 'ফল', image: ফলImg },
  { id: 1401, name: 'এলপিজি গ্যাস (১২ কেজি)', category: 'জ্বালানি', image: জ্বালানিImg },
  { id: 1402, name: 'এলপিজি গ্যাস (১২.৫ কেজি)', category: 'জ্বালানি', image: জ্বালানিImg },
  { id: 1403, name: 'এলপিজি গ্যাস (৩০ কেজি)', category: 'জ্বালানি', image: জ্বালানিImg },
  { id: 1404, name: 'এলপিজি গ্যাস (৩৫ কেজি)', category: 'জ্বালানি', image: জ্বালানিImg },
  { id: 1405, name: 'ডিজেল', category: 'জ্বালানি', image: জ্বালানিImg },
  { id: 1406, name: 'কেরোসিন', category: 'জ্বালানি', image: জ্বালানিImg },
  { id: 1407, name: 'অকটেন', category: 'জ্বালানি', image: জ্বালানিImg },
  { id: 1408, name: 'পেট্রোল', category: 'জ্বালানি', image: জ্বালানিImg },
]

// ── SearchBox Component ────────────────────────────────────────────────────────
const SearchBox = ({ isMobile = false }) => {
  const { searchQuery, setSearchQuery } = useSearchStore()
  const [inputValue, setInputValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const wrapperRef = useRef(null)

  // suggestions filter
  const suggestions = inputValue.trim()
    ? allItems.filter(i => i.name.toLowerCase().includes(inputValue.trim().toLowerCase())).slice(0, 6)
    : []

  // outside click এ dropdown বন্ধ
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (name) => {
    setInputValue(name)
    setSearchQuery(name)
    setShowDropdown(false)
    document.getElementById('items-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchQuery(inputValue)
      setShowDropdown(false)
      document.getElementById('items-section')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
    setShowDropdown(true)
    if (!e.target.value.trim()) {
      setSearchQuery('')
    }
  }

  return (
    <div ref={wrapperRef} className={`relative ${isMobile ? 'w-full' : 'flex-1 max-w-md'}`}>
      <FiSearch className={`absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 ${isMobile ? 'text-base left-3.5' : 'text-lg'}`} />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => inputValue.trim() && setShowDropdown(true)}
        placeholder="পণ্য অনুসন্ধান করুন..."
        className={`w-full border border-slate-200 bg-slate-50 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#0e7c61] focus:ring-2 focus:ring-[#0e7c61]/20 transition-all
          ${isMobile ? 'h-10 rounded-full pl-10 pr-18' : 'h-10 rounded-full pl-10 pr-4'}`}
      />
      {isMobile && (
        <button
          onClick={() => handleSelect(inputValue)}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#0e7c61] text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#0a6550] transition-colors"
        >
          খুঁজুন
        </button>
      )}

      {/* Dropdown */}
      {showDropdown && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 overflow-hidden">
          {suggestions.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelect(item.name)}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#f0f7f4] cursor-pointer transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#f0f7f4] flex items-center justify-center flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-6 h-6 object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#0d1b2a] truncate">{item.name}</p>
                <p className="text-xs text-slate-400">{item.category}</p>
              </div>
              <FiSearch size={13} className="text-slate-300 flex-shrink-0" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const Navber = () => {
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

          <div className="flex h-14 items-center justify-between gap-2">

            <div className="shrink-0">
              <img src={logo} alt="Bazardor Logo" className="h-9 w-auto" />
            </div>

            {/* Desktop Search */}
            <div className="hidden lg:flex flex-1 max-w-md">
              <SearchBox />
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {district ? (
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1.5 bg-[#0e7c61]/10 text-[#0e7c61] px-3 py-1.5 rounded-full font-semibold hover:bg-[#0e7c61]/20 transition-colors"
                >
                  <IoLocationSharp className="text-base shrink-0" />
                  <span className="hidden lg:inline text-sm">
                    {divisionLabels[division] || division}, {district}
                  </span>
                  <span className="lg:hidden text-xs max-w-18 truncate">{district}</span>
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

              <button
                className="flex items-center gap-1.5 rounded-full px-3 lg:px-4 py-2 lg:py-2.5 text-xs lg:text-sm font-bold text-white shadow-md transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: '#f59e0b' }}
              >
                <MdOutlineCampaign className="text-lg lg:text-xl" />
                <span className="whitespace-nowrap font-normal">অভিযোগ</span>
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden pb-3">
            <SearchBox isMobile={true} />
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navber;