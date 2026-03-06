import React from 'react';
import { TbShieldCheck } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import { MdTrendingDown } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import banner from '../../src/assets/Images/banner/banner.png';

const Banner = () => {
  return (
    <section className="bg-[#f0f4f0] min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-0 flex items-center min-h-[calc(100vh-80px)]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full">

          {/* Left Content */}
          <div className="flex-1 w-full">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#0e7c61]/40 bg-white/70 text-[#0e7c61] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <TbShieldCheck className="text-base" />
              Ministry of Commerce Approved
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0d1b2a] leading-tight mb-5">
              Check Today's{' '}
              <span className="text-[#0e7c61]">Market Prices</span>{' '}
              Easily
            </h1>

            {/* Description */}
            <p className="text-slate-500 text-base lg:text-lg leading-relaxed max-w-lg mb-8">
              Official platform for monitoring essential product prices to ensure
              fair market practices across the nation. Providing real-time updates
              directly from major wholesale hubs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-[#0e7c61] hover:bg-[#0a6350] text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-[#0e7c61]/30 transition-all active:scale-95">
                View Today's Prices
                <FiArrowRight className="text-lg" />
              </button>
              <button className="flex items-center gap-2 border-2 border-[#0d1b2a] text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-white font-bold px-7 py-3.5 rounded-full transition-all active:scale-95">
                <HiDownload className="text-lg" />
                Download Price List
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={banner}
                alt="Fresh Vegetables at Market"
                className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Price Card */}
            <div className="absolute bottom-[-16px] left-4 sm:left-8 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-4 min-w-[230px]">
              {/* Icon circle */}
              <div className="w-11 h-11 rounded-full bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
                <MdTrendingDown className="text-[#0e7c61] text-2xl" />
              </div>
              {/* Price Info */}
              <div>
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-0.5">
                  Onion Price Today
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-[#0d1b2a]">৳50.00</span>
                  <span className="text-sm font-bold text-[#0e7c61] bg-[#dcfce7] px-2 py-0.5 rounded-full">-5%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;