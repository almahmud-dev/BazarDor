import React, { useState } from "react";
import { FaRegCheckCircle, FaRegMap } from "react-icons/fa";
import { IoClose, IoLocationSharp } from "react-icons/io5";
import { RiPinDistanceLine } from "react-icons/ri";
import useLocationStore from '../store/locationStore' // ✅ এই line add করুন
const Modal = ({ onClose }) => {
    const setLocation = useLocationStore((state) => state.setLocation)
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");

  const handleSubmit = () => {
    setLocation(division, district)
    onClose();
  };
  

  const divisions = [
    { value: "dhaka", label: "ঢাকা" },
    { value: "chattogram", label: "চট্টগ্রাম" },
    { value: "rajshahi", label: "রাজশাহী" },
    { value: "khulna", label: "খুলনা" },
    { value: "barishal", label: "বরিশাল" },
    { value: "sylhet", label: "সিলেট" },
    { value: "rangpur", label: "রংপুর" },
    { value: "mymensingh", label: "ময়মনসিংহ" },
  ];

  const districts = [
    { value: "ঢাকা সদর", label: "ঢাকা সদর" },
    { value: "গাজীপুর", label: "গাজীপুর" },
    { value: "নারায়ণগঞ্জ", label: "নারায়ণগঞ্জ" },
    { value: "নারসিংদী", label: "নারসিংদী" },
    { value: "মুন্সিগঞ্জ", label: "মুন্সিগঞ্জ" },
    { value: "মানিকগঞ্জ", label: "মানিকগঞ্জ" },
    { value: "টাঙ্গাইল", label: "টাঙ্গাইল" },
  ];

  return (
    <section className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="modal-overlay fixed inset-0 flex items-center justify-center p-4 bg-black/30 backdrop-blur-md"
        onClick={onClose}
      >
        <div
          className="bg-white w-full max-w-120 rounded-xl shadow-2xl overflow-hidden border border-primary/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-3 sm:p-6 border-b border-primary/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <IoLocationSharp className="text-2xl" />
              </div>
              <div>
                <h1 className="xs:text-base sm:text-2xl font-bold text-slate-900">
                  আপনার লোকেশন সিলেক্ট করুন
                </h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  সঠিক বাজারদর দেখতে আপনার এলাকা নির্বাচন করুন
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-6 space-y-5">
            {/* Division */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <FaRegMap className="text-primary text-lg" />
                বিভাগ নির্বাচন করুন
              </label>
              <select
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer"
              >
                <option value="" disabled>
                  বিভাগ বেছে নিন
                </option>
                {divisions.map((div) => (
                  <option key={div.value} value={div.value}>
                    {div.label}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <RiPinDistanceLine className="text-primary text-lg" />
                জেলা নির্বাচন করুন
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer"
              >
                <option value="" disabled>
                  জেলা বেছে নিন
                </option>
                {districts.map((dist) => (
                  <option key={dist.value} value={dist.value}>
                    {dist.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Footer */}
          <div className="p-2 sm:p-6 bg-slate-50 flex gap-2 sm:gap-3 text-sm xs:text-base">
            <button
              onClick={onClose}
              className="flex-1 rounded-lg font-bold text-slate-600 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <IoClose className="xs:text-lg" />
              বাতিল করুন
            </button>
            <button
              onClick={handleSubmit}
              className="flex-[1.5] py-2 sm:py-4 rounded-lg font-bold bg-primary text-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <FaRegCheckCircle className="xs:text-lg" />
              সিলেক্ট করুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;