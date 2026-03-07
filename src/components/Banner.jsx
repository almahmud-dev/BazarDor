import React, { useEffect, useRef } from 'react';
import { TbShieldCheck } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";
import { MdTrendingDown, MdTrendingUp } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import banner from '../../src/assets/Images/banner/banner.png';

/* ─────────────────────────────────────────────
   ছোট reusable পণ্য-মূল্য ট্যাগ কার্ড
───────────────────────────────────────────── */
const PriceTag = ({ label, price, change, up = false, delay = '0ms' }) => (
  <div
    className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/60"
    style={{ animation: `slideUp 0.6s ease both`, animationDelay: delay }}
  >
    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${up ? 'bg-red-50' : 'bg-emerald-50'}`}>
      {up
        ? <MdTrendingUp className="text-red-500 text-lg" />
        : <MdTrendingDown className="text-[#0e7c61] text-lg" />}
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 leading-none mb-1">{label}</p>
      <div className="flex items-baseline gap-1.5">
        <span className="text-base font-extrabold text-[#0d1b2a]">{price}</span>
        <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${up ? 'text-red-500 bg-red-50' : 'text-[#0e7c61] bg-emerald-50'}`}>
          {change}
        </span>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   ব্যাকগ্রাউন্ড ডেকোরেটিভ উপাদান
───────────────────────────────────────────── */
const BgDecor = () => (
  <>
    {/* বড় সবুজ বৃত্ত — উপরে ডানে */}
    <div className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#0e7c61]/6 blur-3xl" />
    {/* হলুদ আভা — নিচে বামে */}
    <div className="pointer-events-none absolute -bottom-20 -left-20 w-[360px] h-[360px] rounded-full bg-amber-400/8 blur-3xl" />
    {/* সূক্ষ্ম গ্রিড প্যাটার্ন */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: `linear-gradient(#0e7c61 1px, transparent 1px),
                          linear-gradient(90deg, #0e7c61 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }}
    />
  </>
);

/* ─────────────────────────────────────────────
   মূল Banner কম্পোনেন্ট
───────────────────────────────────────────── */
const Banner = () => {
  return (
    <>
      {/* CSS অ্যানিমেশন — একবারই inject হবে */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');

        .banner-font { font-family: 'Hind Siliguri', sans-serif; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(14,124,97,0.25); }
          70%  { box-shadow: 0 0 0 14px rgba(14,124,97,0); }
          100% { box-shadow: 0 0 0 0 rgba(14,124,97,0); }
        }

        .anim-1 { animation: slideUp 0.55s ease both 0.1s; }
        .anim-2 { animation: slideUp 0.55s ease both 0.25s; }
        .anim-3 { animation: slideUp 0.55s ease both 0.4s; }
        .anim-4 { animation: slideUp 0.55s ease both 0.55s; }
        .anim-5 { animation: slideUp 0.55s ease both 0.7s; }
        .anim-img { animation: fadeIn 0.8s ease both 0.3s; }

        .img-float { animation: floatY 5s ease-in-out infinite; }

        .btn-primary:hover { animation: pulse-ring 1s ease-out; }
      `}</style>

      <section className="banner-font relative overflow-hidden bg-gradient-to-br from-[#f5f9f7] via-[#eef5f1] to-[#f7f9f4] min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-80px)]">

        <BgDecor />

        <div className="relative container mx-auto px-4 lg:px-8 py-12 lg:py-0 flex items-center min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-80px)]">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 w-full">

            {/* ══════════════════════════
                বাম — টেক্সট কন্টেন্ট
            ══════════════════════════ */}
            <div className="flex-1 w-full">

              {/* ব্যাজ */}
              <div className="anim-1 inline-flex items-center gap-2 border border-[#0e7c61]/30 bg-white/80 backdrop-blur-sm text-[#0e7c61] text-xs font-bold tracking-wider px-4 py-2 rounded-full mb-6 shadow-sm">
                <TbShieldCheck className="text-sm flex-shrink-0" />
                বাণিজ্য মন্ত্রণালয় অনুমোদিত তথ্য
              </div>

              {/* শিরোনাম */}
              <h1 className="anim-2 text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-[#0d1b2a] leading-[1.15] mb-5 tracking-tight">
                আজকের বাজারের{' '}
                <span className="relative inline-block text-[#0e7c61]">
                  সঠিক দাম
                  {/* আন্ডারলাইন ডেকোর */}
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6 Q100 1 198 6" stroke="#0e7c61" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"/>
                  </svg>
                </span>{' '}
                জানুন
              </h1>

              {/* বিবরণ */}
              <p className="anim-3 text-slate-500 text-base lg:text-lg leading-relaxed max-w-lg mb-8">
                নিত্যপ্রয়োজনীয় পণ্যের সরকারি নির্ধারিত মূল্য সরাসরি আপনার হাতের মুঠোয়।
                ভোক্তা অধিকার রক্ষায় সঠিক তথ্য নিশ্চিত করুন।
              </p>

              {/* বাটন */}
              <div className="anim-4 flex flex-wrap gap-3 sm:gap-4 mb-10 lg:mb-0">
                <button className="btn-primary flex items-center gap-2 bg-[#0e7c61] hover:bg-[#0a6350] text-white font-bold px-6 sm:px-8 py-3.5 rounded-full shadow-lg shadow-[#0e7c61]/25 transition-all duration-200 active:scale-95">
                  আজকের দাম দেখুন
                  <FiArrowRight className="text-lg" />
                </button>
                <button className="flex items-center gap-2 border-2 border-[#0d1b2a]/20 bg-white/60 backdrop-blur-sm text-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-white hover:border-[#0d1b2a] font-bold px-6 sm:px-8 py-3.5 rounded-full transition-all duration-200 active:scale-95">
                  <HiDownload className="text-base" />
                  মূল্যতালিকা ডাউনলোড
                </button>
              </div>

              {/* স্ট্যাটস রো */}
              <div className="anim-5 hidden sm:flex items-center gap-6 mt-10 pt-8 border-t border-slate-200/70">
                {[
                  { num: '৫০০+', label: 'পণ্যের দাম' },
                  { num: '৬৪', label: 'জেলার তথ্য' },
                  { num: 'প্রতিদিন', label: 'আপডেট হয়' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-extrabold text-[#0e7c61]">{s.num}</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ══════════════════════════
                ডান — ছবি + ফ্লোটিং কার্ড
            ══════════════════════════ */}
            <div className="anim-img flex-1 w-full relative">

              {/* মূল ইমেজ কন্টেইনার */}
              <div className="img-float relative rounded-3xl overflow-visible">

                {/* গ্লো ব্যাকগ্রাউন্ড */}
                <div className="absolute inset-3 rounded-3xl bg-[#0e7c61]/15 blur-2xl -z-10" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
                  <img
                    src={banner}
                    alt="তাজা সবজির বাজার"
                    className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover"
                  />
                  {/* গ্রেডিয়েন্ট ওভারলে */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* ইমেজের মধ্যে badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0e7c61] text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    🟢 লাইভ আপডেট
                  </div>
                </div>
              </div>

              {/* ফ্লোটিং মূল্য কার্ড — নিচে বামে */}
              <div className="absolute -bottom-4 left-2 sm:left-6 z-10">
                <PriceTag
                  label="পেঁয়াজ আজকের দাম"
                  price="৳৫০/কেজি"
                  change="-৫%"
                  up={false}
                  delay="0.9s"
                />
              </div>

              {/* ফ্লোটিং মূল্য কার্ড — উপরে ডানে */}
              <div className="absolute -top-4 -right-2 sm:right-0 z-10">
                <PriceTag
                  label="মুরগির মাংস"
                  price="৳১৮০/কেজি"
                  change="+৩%"
                  up={true}
                  delay="1.05s"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;