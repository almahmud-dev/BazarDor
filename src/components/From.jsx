import React, { useState } from 'react'
import { TbShieldCheck, TbClock24, TbEyeOff, TbBolt } from 'react-icons/tb'
import { MdOutlineCampaign } from 'react-icons/md'
import { FaLock } from "react-icons/fa";
import { FiUser, FiPhone, FiMapPin, FiFileText, FiArrowRight, FiCheck } from 'react-icons/fi'

/* ── ফিচার ব্যাজ ── */
const FeaturePill = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2.5 text-white/90">
    <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0">
      <Icon size={11} className="text-amber-400" />
    </div>
    <span className="text-sm font-medium">{text}</span>
  </div>
)

/* ── স্ট্যাট কার্ড ── */
const StatCard = ({ number, label }) => (
  <div className="text-center">
    <p className="text-3xl font-extrabold text-white leading-none">{number}</p>
    <p className="text-white/50 text-xs mt-1 font-medium">{label}</p>
  </div>
)

/* ── ইনপুট ফিল্ড ── */
const Field = ({ icon: Icon, label, type = 'text', placeholder, textarea = false, value, onChange }) => (
  <div className="group">
    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">{label}</label>
    <div className="relative">
      <Icon size={14} className="absolute left-3.5 top-3.5 text-slate-400 group-focus-within:text-[#0e7c61] transition-colors" />
      {textarea ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#0e7c61] focus:ring-2 focus:ring-[#0e7c61]/15 focus:bg-white transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#0e7c61] focus:ring-2 focus:ring-[#0e7c61]/15 focus:bg-white transition-all"
        />
      )}
    </div>
  </div>
)

/* ── মূল Section ── */
const ComplaintSection = () => {
  const [form, setForm]       = useState({ name: '', phone: '', market: '', details: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.market || !form.details) return
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setForm({ name: '', phone: '', market: '', details: '' }) }, 4000)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700;800&display=swap');
        .complaint-font { font-family: 'Hind Siliguri', sans-serif; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes checkPop { 0%{transform:scale(0)} 70%{transform:scale(1.2)} 100%{transform:scale(1)} }
        .anim-up-1 { animation: fadeUp .5s ease both .05s; }
        .anim-up-2 { animation: fadeUp .5s ease both .15s; }
        .anim-up-3 { animation: fadeUp .5s ease both .25s; }
        .anim-up-4 { animation: fadeUp .5s ease both .35s; }
        .anim-up-5 { animation: fadeUp .5s ease both .45s; }
        .check-pop  { animation: checkPop .4s cubic-bezier(.34,1.56,.64,1) both; }
      `}</style>

      <section className="complaint-font bg-[#f4f7f5]">

        {/* ── ট্রাস্ট স্ট্রিপ ── */}
        <div className="bg-white border-y border-slate-100 py-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
              {[
                { icon: TbShieldCheck, title: 'স্বচ্ছ মূল্য তথ্য',   desc: 'ব্যবসায়ী ও ভোক্তার মধ্যে তথ্য-বৈষম্য দূর করতে প্রতিশ্রুতিবদ্ধ।',  color: 'bg-emerald-50 text-[#0e7c61]' },
                { icon: TbShieldCheck, title: 'সরকার অনুমোদিত',      desc: 'প্রতিদিন সরকারি পর্যবেক্ষণ কর্মকর্তাদের দ্বারা সংগৃহীত তথ্য।',     color: 'bg-blue-50 text-blue-600'     },
                { icon: TbBolt,        title: 'দৈনিক আপডেট',          desc: 'বাজারে মূল্য পরিবর্তন হওয়ার সাথে সাথে তাৎক্ষণিক তথ্য পান।',        color: 'bg-amber-50 text-amber-600'   },
              ].map((f, i) => (
                <div key={i} className={`anim-up-${i + 1} flex flex-col items-center text-center gap-3 px-6`}>
                  <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center`}>
                    <f.icon size={26} />
                  </div>
                  <div>
                    <p className="font-extrabold text-[#0d1b2a] text-base">{f.title}</p>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── অভিযোগ সেকশন ── */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0e7c61]/15">

            {/* বাম — ডার্ক গ্রিন প্যানেল */}
            <div className="relative bg-[#0d2b22] lg:absolute lg:inset-y-0 lg:left-0 lg:w-[42%] px-8 py-10 lg:py-14 flex flex-col justify-between overflow-hidden">

              {/* ব্যাকগ্রাউন্ড ডেকোর */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#0e7c61]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-amber-400/10 blur-2xl" />
              {/* সূক্ষ্ম গ্রিড */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

              <div className="relative">
                {/* আইকন */}
                <div className="w-14 h-14 rounded-2xl bg-amber-400/15 border border-amber-400/25 flex items-center justify-center mb-6">
                  <MdOutlineCampaign size={28} className="text-amber-400" />
                </div>

                <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
                  অন্যায় মূল্যের বিরুদ্ধে{' '}
                  <span className="text-amber-400">অভিযোগ</span>{' '}
                  করুন
                </h2>

                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  কোনো বিক্রেতা সরকার নির্ধারিত মূল্যের চেয়ে বেশি দামে পণ্য বিক্রি করলে
                  এখনই জানান। আপনার অভিযোগ সরাসরি সংশ্লিষ্ট কর্তৃপক্ষের কাছে পৌঁছাবে।
                </p>

                <div className="flex flex-col gap-3 mb-10">
                  <FeaturePill icon={TbClock24}    text="২৪/৭ ডিজিটাল অভিযোগ কেন্দ্র" />
                  <FeaturePill icon={TbEyeOff}     text="পরিচয় সম্পূর্ণ গোপন রাখা হয়" />
                  <FeaturePill icon={TbBolt}       text="৪৮ ঘণ্টার মধ্যে সরকারি ব্যবস্থা" />
                </div>
              </div>

              {/* স্ট্যাটস */}
              <div className="relative border-t border-white/10 pt-8 grid grid-cols-3 gap-4">
                <StatCard number="১২০০+" label="অভিযোগ নিষ্পত্তি" />
                <StatCard number="৬৪"    label="জেলায় সক্রিয়"     />
                <StatCard number="৪৮ঘণ্টা" label="গড় সমাধান"    />
              </div>
            </div>

            {/* ডান — ফর্ম প্যানেল */}
            <div className="lg:ml-[42%] bg-white px-6 sm:px-10 py-10 lg:py-14">

              {submitted ? (
                /* সাফল্য বার্তা */
                <div className="flex flex-col items-center justify-center h-full min-h-[380px] text-center gap-4">
                  <div className="check-pop w-20 h-20 rounded-full bg-[#0e7c61]/10 flex items-center justify-center">
                    <FiCheck size={36} className="text-[#0e7c61]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0d1b2a]">অভিযোগ সফলভাবে জমা হয়েছে!</h3>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                    আপনার অভিযোগ গ্রহণ করা হয়েছে। ৪৮ ঘণ্টার মধ্যে সংশ্লিষ্ট কর্তৃপক্ষ ব্যবস্থা নেবে।
                  </p>
                  <span className="bg-[#0e7c61]/10 text-[#0e7c61] text-xs font-bold px-4 py-2 rounded-full">
                    ধন্যবাদ আপনার সহযোগিতার জন্য 🙏
                  </span>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-xl font-extrabold text-[#0d1b2a] mb-1">অভিযোগ ফর্ম পূরণ করুন</h3>
                    <p className="text-slate-400 text-sm">সকল তথ্য সঠিকভাবে পূরণ করুন</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Field
                      icon={FiUser} label="আপনার পূর্ণ নাম"
                      placeholder="নাম লিখুন"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                    <Field
                      icon={FiPhone} label="মোবাইল নম্বর" type="tel"
                      placeholder="০১XXX-XXXXXX"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    />
                  </div>

                  <div className="mb-4">
                    <Field
                      icon={FiMapPin} label="বাজারের নাম ও অবস্থান"
                      placeholder="যেমন: কারওয়ান বাজার, ঢাকা"
                      value={form.market}
                      onChange={e => setForm(f => ({ ...f, market: e.target.value }))}
                    />
                  </div>

                  <div className="mb-6">
                    <Field
                      icon={FiFileText} label="অভিযোগের বিবরণ"
                      placeholder="কোন পণ্যের দাম বেশি নেওয়া হয়েছে, কত টাকা নেওয়া হয়েছে — বিস্তারিত লিখুন..."
                      textarea
                      value={form.details}
                      onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!form.name || !form.phone || !form.market || !form.details}
                    className="w-full flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-500 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-[#0d1b2a] font-extrabold py-4 rounded-2xl shadow-lg shadow-amber-400/30 transition-all duration-200 active:scale-[.98] text-base"
                  >
                    <MdOutlineCampaign size={20} />
                    অভিযোগ জমা দিন
                    <FiArrowRight size={18} />
                  </button>

                  <p className="text-center text-slate-400 text-xs mt-4 flex items-center justify-center gap-1.5">
                    <FaLock className='text-amber-300'/> আপনার তথ্য সম্পূর্ণ নিরাপদ ও গোপনীয়
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ComplaintSection