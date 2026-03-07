import React from 'react'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { MdOutlineAccountBalance } from 'react-icons/md'
import footerLogo from '../../src/assets/Images/logo/Footer_logo.png'

// Bangladesh Government seal — official public domain image
const BD_GOV_SEAL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Emblem_of_Bangladesh.svg/200px-Emblem_of_Bangladesh.svg.png'

const quickLinks = [
  { label: 'Daily Price Chart', href: '#' },
  { label: 'Market Analysis', href: '#' },
  { label: 'Consumer Rights Act', href: '#' },
  { label: 'DNCRP Portal', href: '#' },
]

const Footer = () => {
  return (
    <footer className="bg-[#0d2b1f] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            {/* Gov seal left + Bazardor logo right */}
            <div className="flex items-center gap-3">
              <img
                src={BD_GOV_SEAL}
                alt="Bangladesh Government Seal"
                className="w-10 h-10 object-contain bg-white rounded-full p-1"
              />
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                  <MdOutlineAccountBalance size={18} className="text-white" />
                </div>
                <span className="text-xl font-extrabold tracking-tight">Bazardor</span>
              </div>
            </div>
            {/* OR if you have a footer logo image, use: */}
            {/* <img src={footerLogo} alt="Bazardor" className="h-10 w-auto" /> */}
            <p className="text-teal-200/70 text-sm leading-relaxed">
              An initiative of the Ministry of Commerce to digitalize market
              monitoring and protect consumer rights across Bangladesh.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-teal-100/80 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-sm text-teal-100/80">
                <FiPhone size={15} className="text-teal-400 flex-shrink-0" />
                Hotline: 16121 (Toll Free)
              </li>
              <li className="flex items-center gap-3 text-sm text-teal-100/80">
                <FiMail size={15} className="text-teal-400 flex-shrink-0" />
                support@bazardor.gov.bd
              </li>
              <li className="flex items-start gap-3 text-sm text-teal-100/80">
                <FiMapPin size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                Building #3, Level 5, Bangladesh Secretariat, Dhaka.
              </li>
            </ul>
          </div>

          {/* Col 4 — Gov Seals */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
              Gov Seals
            </h4>
            <div className="flex gap-3">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1.5">
                <img
                  src={BD_GOV_SEAL}
                  alt="Bangladesh Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center p-1.5">
                <img
                  src={footerLogo}
                  alt="Bazardor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-white/10 my-10" />

        {/* Bottom bar */}
        <p className="text-center text-xs text-teal-200/50">
          © 2024 Bazardor Government Price Portal. All Rights Reserved. Developed by ICT Division.
        </p>
      </div>
    </footer>
  )
}

export default Footer