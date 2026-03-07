import React from 'react'
import { GiLeafSwirl } from 'react-icons/gi'
import { LuFish } from 'react-icons/lu'
import { GiWheat } from 'react-icons/gi'
import { LuCupSoda } from 'react-icons/lu'
import { PiOrangeFill } from 'react-icons/pi'
import { BsThreeDots } from 'react-icons/bs'

const categories = [
  {
    id: 1,
    name: 'Vegetables',
    icon: <GiLeafSwirl size={28} className="text-green-600" />,
    bg: 'bg-green-100',
  },
  {
    id: 2,
    name: 'Fish & Meat',
    icon: <LuFish size={28} className="text-blue-500" />,
    bg: 'bg-blue-100',
  },
  {
    id: 3,
    name: 'Grains & Rice',
    icon: <GiWheat size={28} className="text-yellow-500" />,
    bg: 'bg-yellow-100',
  },
  {
    id: 4,
    name: 'Beverages',
    icon: <LuCupSoda size={28} className="text-purple-500" />,
    bg: 'bg-purple-100',
  },
  {
    id: 5,
    name: 'Fruits',
    icon: <PiOrangeFill size={28} className="text-red-400" />,
    bg: 'bg-red-100',
  },
  {
    id: 6,
    name: 'Others',
    icon: <BsThreeDots size={28} className="text-gray-400" />,
    bg: 'bg-gray-100',
  },
]

const Category = () => {
  return (
    <section className="bg-gray-100">
      <div className="container px-6">

        <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-10">
          Browse by Category
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="bg-white rounded-2xl flex flex-col items-center justify-center gap-4 py-6 px-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${cat.bg}`}>
                {cat.icon}
              </div>
              <span className="text-sm font-semibold text-gray-800 text-center">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Category