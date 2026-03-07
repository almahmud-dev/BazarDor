import React, { useState } from 'react'
import { FiClock, FiGrid, FiList, FiX, FiChevronDown } from 'react-icons/fi'
import { FaBangladeshiTakaSign } from "react-icons/fa6";

import peyaj from '../../src/assets/Images/Items/peyaj.png'
import cal from '../../src/assets/Images/Items/cal.png'
import alu from '../../src/assets/Images/Items/alu.png'
import moric from '../../src/assets/Images/Items/moric.png'
import tel from '../../src/assets/Images/Items/tel.png'

const itemsData = [
  {
    id: 1,
    name: 'Onion',
    banglaName: 'দেশি পেঁয়াজ',
    price: 50,
    unit: 'kg',
    updatedAt: 'Today, 10:00 AM',
    category: 'vegetables',
    image: peyaj,
  },
  {
    id: 2,
    name: 'Rice',
    banglaName: 'নাজিরশাইল',
    price: 72,
    unit: 'kg',
    updatedAt: 'Today, 09:30 AM',
    category: 'grains',
    image: cal,
  },
  {
    id: 3,
    name: 'Potato',
    banglaName: 'ডায়মন্ড আলু',
    price: 45,
    unit: 'kg',
    updatedAt: 'Today, 10:15 AM',
    category: 'vegetables',
    image: alu,
  },
  {
    id: 4,
    name: 'Green Chili',
    banglaName: 'কাঁচা মরিচ',
    price: 180,
    unit: 'kg',
    updatedAt: 'Today, 08:45 AM',
    category: 'spices',
    image: moric,
  },
  {
    id: 5,
    name: 'Soybean Oil',
    banglaName: 'সয়াবিন তেল',
    price: 167,
    unit: 'Ltr',
    updatedAt: 'Yesterday, 05:00 PM',
    category: 'oils',
    image: tel,
  },
  
]

const ITEMS_PER_PAGE = 5

// ─── Grid Card ────────────────────────────────────────────────────────────────
const GridCard = ({ item, onDetails }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="h-44 overflow-hidden bg-gray-900">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
        {item.name}{' '}
        <span className="font-normal text-gray-500 text-sm">({item.banglaName})</span>
      </h3>
      <p className="text-green-700 font-extrabold text-xl mb-1">
        ৳{item.price} / {item.unit}
      </p>
      <p className="text-gray-400 text-xs flex items-center gap-1 mb-4">
        <FiClock size={11} /> Updated: {item.updatedAt}
      </p>
      <button
        onClick={() => onDetails(item)}
        className="w-full py-2 bg-green-50 hover:bg-green-100 text-green-700 font-bold rounded-xl text-sm transition-colors duration-150"
      >
        Details
      </button>
    </div>
  </div>
)

// ─── List Row ─────────────────────────────────────────────────────────────────
const ListRow = ({ item, onDetails }) => (
  <div className="bg-white rounded-2xl flex items-center gap-4 px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200">
    <img
      src={item.image}
      alt={item.name}
      className="w-16 h-16 rounded-xl object-cover shrink-0"
    />
    <div className="flex-1 min-w-0">
      <p className="font-bold text-gray-900 text-base">
        {item.name}{' '}
        <span className="font-normal text-gray-500 text-sm">({item.banglaName})</span>
      </p>
      <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
        <FiClock size={11} /> {item.updatedAt}
      </p>
    </div>
    <p className="text-green-700 font-extrabold text-lg whitespace-nowrap">
      ৳{item.price} / {item.unit}
    </p>
    <button
      onClick={() => onDetails(item)}
      className="px-5 py-2 bg-green-50 hover:bg-green-100 text-green-700 font-bold rounded-xl text-sm transition-colors duration-150 whitespace-nowrap"
    >
      Details
    </button>
  </div>
)

// ─── Details Modal ────────────────────────────────────────────────────────────
const DetailsModal = ({ item, allItems, onClose }) => {
  const related = allItems.filter(
    (i) => i.category === item.category && i.id !== item.id
  )

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors"
        >
          <FiX size={16} className="text-gray-600" />
        </button>

        {/* Main Item */}
        <div className="flex items-center gap-5">
          <img
            src={item.image}
            alt={item.name}
            className="w-28 h-28 rounded-2xl object-cover shrink-0"
          />
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 leading-snug">
              {item.name}{' '}
              <span className="font-normal text-gray-500 text-base">({item.banglaName})</span>
            </h2>
            <p className="text-green-700 font-extrabold text-2xl mt-1">
              ৳{item.price} / {item.unit}
            </p>
            <p className="text-gray-400 text-xs flex items-center gap-1 mt-1">
              <FiClock size={11} /> Updated: {item.updatedAt}
            </p>
            <span className="inline-block mt-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
              {item.category}
            </span>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <>
            <hr className="my-5 border-gray-100" />
            <h4 className="font-bold text-gray-700 mb-3">Related Products</h4>
            <div className="grid grid-cols-2 gap-3">
              {related.map((rel) => (
                <div
                  key={rel.id}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100"
                >
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-12 h-12 rounded-lg object-cover shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm leading-tight">{rel.name}</p>
                    <p className="text-gray-400 text-xs">{rel.banglaName}</p>
                    <p className="text-green-700 font-bold text-sm mt-0.5">
                      <FaBangladeshiTakaSign />{rel.price}/{rel.unit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {related.length === 0 && (
          <p className="text-gray-400 text-sm mt-5">
            No related products in this category.
          </p>
        )}
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
const Items = () => {
  const [view, setView] = useState('grid')
  const [selectedItem, setSelectedItem] = useState(null)
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const visibleItems = itemsData.slice(0, visibleCount)
  const hasMore = visibleCount < itemsData.length

  return (
    <>
      <section className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                Daily Essentials Prices
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Live updates from Karwan Bazar and major regional markets.
              </p>
            </div>

            {/* Grid / List Toggle */}
            <div className="flex bg-white rounded-full p-1 shadow-sm">
              <button
                onClick={() => setView('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  view === 'grid'
                    ? 'bg-green-800 text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <FiGrid size={14} /> Grid View
              </button>
              <button
                onClick={() => setView('list')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  view === 'list'
                    ? 'bg-green-800 text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <FiList size={14} /> List View
              </button>
            </div>
          </div>

          {/* Items Grid or List */}
          {view === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {visibleItems.map((item) => (
                <GridCard key={item.id} item={item} onDetails={setSelectedItem} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {visibleItems.map((item) => (
                <ListRow key={item.id} item={item} onDetails={setSelectedItem} />
              ))}
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                className="flex items-center gap-2 px-8 py-3 bg-green-800 hover:bg-green-700 text-white font-bold rounded-full shadow-md transition-colors duration-200"
              >
                <FiChevronDown size={18} /> আরো পণ্য দেখুন
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Details Modal */}
      {selectedItem && (
        <DetailsModal
          item={selectedItem}
          allItems={itemsData}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  )
}

export default Items