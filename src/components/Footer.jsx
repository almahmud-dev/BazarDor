import React from "react";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { TbShieldCheck } from "react-icons/tb";
import footerLogo    from "../../src/assets/Images/logo/Footer_logo.png";
import bdgovt        from "../../src/assets/Images/Footer/bd-govt.png";
import voktaodhikar  from "../../src/assets/Images/Footer/vokta-odhikar.png";

const quickLinks = [
  { label: "দৈনিক মূল্য তালিকা",       href: "#" },
  { label: "বাজার বিশ্লেষণ",            href: "#" },
  { label: "ভোক্তা অধিকার আইন",         href: "#" },
  { label: "DNCRP পোর্টাল",             href: "https://dncrp.gov.bd/", external: true },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .footer-font { font-family: 'Hind Siliguri', sans-serif; }
        .footer-link-hover { position: relative; }
        .footer-link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #5eead4;
          transition: width .25s ease;
        }
        .footer-link-hover:hover::after { width: 100%; }
      `}</style>

      <footer className="footer-font bg-[#071a13] text-white relative overflow-hidden">

        {/* ── ব্যাকগ্রাউন্ড ডেকোর ── */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0e7c61]/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-teal-900/30 blur-3xl" />
        {/* সূক্ষ্ম গ্রিড */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* ── টপ ব্যানার স্ট্রিপ ── */}
        <div className="relative border-b border-white/5 bg-[#0e7c61]/10">
          <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-teal-300 text-sm font-medium">
              <TbShieldCheck size={16} />
              <span>বাংলাদেশ সরকার অনুমোদিত ডিজিটাল মূল্য পর্যবেক্ষণ পোর্টাল</span>
            </div>
            <a
              href="https://dncrp.gov.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              DNCRP পোর্টালে যান <FiExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* ── মূল কন্টেন্ট ── */}
        <div className="relative container mx-auto px-4 lg:px-8 pt-14 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

            {/* Col 1 — ব্র্যান্ড (৪ কলাম) */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              {/* লোগো + সিল */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg shadow-black/20 flex-shrink-0">
                  <img src={bdgovt} alt="বাংলাদেশ সরকার" className="w-full h-full object-contain" />
                </div>
                <img src={footerLogo} alt="বাজারদর" className="h-9 w-auto" />
              </div>

              <p className="text-teal-200/60 text-sm leading-relaxed">
                ভোক্তা অধিকার রক্ষায় ও ন্যায্য বাজার নিশ্চিত করতে বাণিজ্য মন্ত্রণালয়ের
                ডিজিটাল উদ্যোগ। সারা বাংলাদেশে বাজার পর্যবেক্ষণ ও মূল্য তদারকি।
              </p>

              {/* হটলাইন কার্ড */}
              <div className="flex items-center gap-3 bg-[#0e7c61]/15 border border-[#0e7c61]/25 rounded-2xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-[#0e7c61]/30 flex items-center justify-center flex-shrink-0">
                  <FiPhone size={15} className="text-teal-300" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-teal-400/70 tracking-wider uppercase">ভোক্তা হটলাইন</p>
                  <p className="text-white font-extrabold text-base leading-none mt-0.5">১৬১২১</p>
                  <p className="text-teal-300/50 text-[10px]">টোল ফ্রি · সপ্তাহের ৭ দিন</p>
                </div>
              </div>
            </div>

            {/* Col 2 — দ্রুত লিংক (৩ কলাম) */}
            <div className="lg:col-span-3 lg:pl-4">
              <h4 className="text-[10px] font-bold tracking-[0.15em] text-teal-500/70 uppercase mb-6">
                দ্রুত লিংক
              </h4>
              <ul className="flex flex-col gap-3.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="footer-link-hover flex items-center gap-1.5 text-sm text-teal-100/70 hover:text-white transition-colors duration-200"
                    >
                      <FiArrowUpRight size={13} className="text-[#0e7c61] flex-shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — যোগাযোগ (৩ কলাম) */}
            <div className="lg:col-span-3">
              <h4 className="text-[10px] font-bold tracking-[0.15em] text-teal-500/70 uppercase mb-6">
                যোগাযোগ করুন
              </h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <FiMail size={13} className="text-teal-400" />
                  </div>
                  <a href="mailto:support@bazardor.gov.bd" className="text-sm text-teal-100/70 hover:text-white transition-colors">
                    support@bazardor.gov.bd
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiMapPin size={13} className="text-teal-400" />
                  </div>
                  <p className="text-sm text-teal-100/70 leading-relaxed">
                    ভবন নং-৩, লেভেল-৫,<br />
                    বাংলাদেশ সচিবালয়, ঢাকা।
                  </p>
                </li>
              </ul>
            </div>

            {/* Col 4 — সরকারি সিল (২ কলাম) */}
            <div className="lg:col-span-2">
              <h4 className="text-[10px] font-bold tracking-[0.15em] text-teal-500/70 uppercase mb-6">
                অনুমোদনকারী
              </h4>
              <div className="flex lg:flex-col gap-3">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg shadow-black/20">
                  <img src={bdgovt} alt="বাংলাদেশ সরকার" className="w-full h-full object-contain" />
                </div>
                <a
                  href="https://dncrp.gov.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg shadow-black/20 hover:scale-105 transition-transform"
                >
                  <img src={voktaodhikar} alt="ভোক্তা অধিকার" className="w-full h-full object-contain" />
                </a>
              </div>
            </div>

          </div>

          {/* ── ডিভাইডার ── */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* ── বটম বার ── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-teal-200/35 text-center sm:text-left">
              © {currentYear} বাজারদর সরকারি মূল্য পোর্টাল। সর্বস্বত্ব সংরক্ষিত।
              তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ কর্তৃক নির্মিত।
            </p>
            <div className="flex items-center gap-1.5 text-xs text-teal-200/35">
              <TbShieldCheck size={13} className="text-[#0e7c61]" />
              সরকার যাচাইকৃত তথ্য
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;