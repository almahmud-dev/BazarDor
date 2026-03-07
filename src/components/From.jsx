import React, { useState } from 'react'
import { FiUser, FiPhone, FiMapPin, FiFileText, FiCheckCircle } from 'react-icons/fi'
import { BsShieldCheck, BsPeopleFill } from 'react-icons/bs'
import { MdOutlineUpdate } from 'react-icons/md'
import { HiOutlineBadgeCheck } from 'react-icons/hi'

const features = [
  {
    icon: <BsPeopleFill size={22} className="text-teal-700" />,
    title: 'Transparent Prices',
    desc: 'Eliminating information asymmetry between traders and consumers.',
  },
  {
    icon: <BsShieldCheck size={22} className="text-teal-700" />,
    title: 'Government Verified',
    desc: 'Data collected directly by official monitoring officers daily.',
  },
  {
    icon: <MdOutlineUpdate size={22} className="text-teal-700" />,
    title: 'Daily Updates',
    desc: 'Stay informed with price changes as they happen in real-time.',
  },
]

const perks = [
  '24/7 Digital Complaint Center',
  'Anonymity Protected',
  'Official Action within 48 Hours',
]

const initialForm = {
  fullName: '',
  mobile: '',
  market: '',
  details: '',
}

const From = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.fullName.trim()) newErrors.fullName = 'Name is required'
    if (!form.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^01[3-9]\d{8}$/.test(form.mobile.trim())) {
      newErrors.mobile = 'Enter a valid BD mobile number'
    }
    if (!form.market.trim()) newErrors.market = 'Market name is required'
    if (!form.details.trim()) newErrors.details = 'Please describe the issue'
    else if (form.details.trim().length < 20) newErrors.details = 'At least 20 characters required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // clear error on type
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // TODO: connect to backend here
    console.log('Form data:', form)
    setSubmitted(true)
    setForm(initialForm)
    setErrors({})
  }

  return (
    <section className="bg-gray-100 py-14">
      <div className="container px-6">

        {/* Top Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 text-center">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center">
                {f.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-base">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Card */}
        <div className="bg-teal-700 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">

          {/* Left */}
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Report Unfair <br /> Market Prices
            </h2>
            <p className="text-teal-100 text-sm leading-relaxed mb-8">
              Help us maintain a fair market. If you notice a seller charging
              above the government set price, report it immediately.
            </p>
            <ul className="flex flex-col gap-3">
              {perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-white">
                  <HiOutlineBadgeCheck size={20} className="text-yellow-400 flex-shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Form */}
          <div className="flex-1 w-full bg-white rounded-2xl p-6 shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                <FiCheckCircle size={52} className="text-teal-600" />
                <h3 className="text-xl font-extrabold text-gray-900">Complaint Submitted!</h3>
                <p className="text-gray-500 text-sm">
                  We'll take action within 48 hours. Thank you for helping keep markets fair.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-6 py-2 bg-teal-700 text-white rounded-full font-semibold text-sm hover:bg-teal-600 transition-colors"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                {/* Name + Mobile */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1 block">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <FiUser size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className={`w-full pl-8 pr-3 py-2.5 rounded-xl bg-gray-50 border text-sm outline-none transition-colors ${
                          errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-teal-500'
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1 block">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <FiPhone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="01XXX-XXXXXX"
                        className={`w-full pl-8 pr-3 py-2.5 rounded-xl bg-gray-50 border text-sm outline-none transition-colors ${
                          errors.mobile ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-teal-500'
                        }`}
                      />
                    </div>
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                  </div>
                </div>

                {/* Market */}
                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1 block">
                    Market Name & Location
                  </label>
                  <div className="relative">
                    <FiMapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="market"
                      value={form.market}
                      onChange={handleChange}
                      placeholder="e.g. New Market, Dhaka"
                      className={`w-full pl-8 pr-3 py-2.5 rounded-xl bg-gray-50 border text-sm outline-none transition-colors ${
                        errors.market ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-teal-500'
                      }`}
                    />
                  </div>
                  {errors.market && <p className="text-red-500 text-xs mt-1">{errors.market}</p>}
                </div>

                {/* Complaint Details */}
                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1 block">
                    Complaint Details
                  </label>
                  <div className="relative">
                    <FiFileText size={14} className="absolute left-3 top-3.5 text-gray-400" />
                    <textarea
                      name="details"
                      value={form.details}
                      onChange={handleChange}
                      placeholder="Describe the issue..."
                      rows={4}
                      className={`w-full pl-8 pr-3 py-2.5 rounded-xl bg-gray-50 border text-sm outline-none resize-none transition-colors ${
                        errors.details ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-teal-500'
                      }`}
                    />
                  </div>
                  {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-extrabold rounded-xl text-sm transition-colors duration-150 shadow-sm"
                >
                  Submit My Complaint
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default From