import React, { useState, useMemo } from 'react'
import { FiClock, FiGrid, FiList, FiX, FiChevronDown, FiSearch, FiArrowLeft } from 'react-icons/fi'
import { TbArrowsSort } from 'react-icons/tb'

// ─── Image imports ────────────────────────────────────────────────────────────
import চালImg    from '../../src/assets/Images/Items/চাল.png'
import আটাImg    from '../../src/assets/Images/Items/আটা.png'
import তেলImg    from '../../src/assets/Images/Items/ভোজ্য তেল.png'
import চিনিImg   from '../../src/assets/Images/Items/চিনি.png'
import লবনImg    from '../../src/assets/Images/Items/লবন.png'
import ডালImg    from '../../src/assets/Images/Items/ডাল.png'
import আলুImg    from '../../src/assets/Images/Items/আলু.png'
import মসলাImg   from '../../src/assets/Images/Items/মসলা.png'
import মাছImg    from '../../src/assets/Images/Items/মাছ ও গোশত.png'
import দুধImg    from '../../src/assets/Images/Items/দুধ.png'
import ডিমImg    from '../../src/assets/Images/Items/ডিম.png'
import শাকImg    from '../../src/assets/Images/Items/শাক ও সবজি.png'
import ফলImg     from '../../src/assets/Images/Items/ফল.png'
import জ্বালানিImg from '../../src/assets/Images/Items/জ্বালানি.png'

// ─── ডেটা ─────────────────────────────────────────────────────────────────────
const allItems = [
  // ১. চাল
  { id: 101, name: 'চাল সরু - নাজির/মিনিকেট', unit: 'প্রতি কেজি', minPrice: 80, maxPrice: 85,  category: 'চাল',       image: চালImg,  updatedAt: '৩ ঘণ্টা আগে' },
  { id: 102, name: 'চাল মাঝারি - পাইজাম/আটাশ', unit: 'প্রতি কেজি', minPrice: 60, maxPrice: 65,  category: 'চাল',       image: চালImg,  updatedAt: '৩ ঘণ্টা আগে' },
  { id: 103, name: 'চাল মোটা - স্বর্ণা/চায়না ইরি', unit: 'প্রতি কেজি', minPrice: 55, maxPrice: 60, category: 'চাল',    image: চালImg,  updatedAt: '৩ ঘণ্টা আগে' },
  { id: 104, name: 'সুগন্ধি চাল',              unit: 'প্রতি কেজি', minPrice: 102, maxPrice: 105, category: 'চাল',      image: চালImg,  updatedAt: '৩ ঘণ্টা আগে' },
  { id: 105, name: 'কাটারিভোগ',                unit: 'প্রতি কেজি', minPrice: 290, maxPrice: 400, category: 'চাল',      image: চালImg,  updatedAt: '৩ ঘণ্টা আগে' },

  // ২. আটা/ময়দা
  { id: 201, name: 'আটা সাদা (খোলা)',          unit: 'প্রতি কেজি', minPrice: 55, maxPrice: 60,  category: 'আটা/ময়দা',  image: আটাImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 202, name: 'আটা (প্যাকেট)',             unit: 'প্রতি কেজি', minPrice: 45, maxPrice: 55,  category: 'আটা/ময়দা',  image: আটাImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 203, name: 'ময়দা (খোলা)',              unit: 'প্রতি কেজি', minPrice: 55, maxPrice: 65,  category: 'আটা/ময়দা',  image: আটাImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 204, name: 'ময়দা (প্যাকেট)',           unit: 'প্রতি কেজি', minPrice: 65, maxPrice: 70,  category: 'আটা/ময়দা',  image: আটাImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 205, name: 'সুজি (প্যাকেট)',            unit: 'প্রতি কেজি', minPrice: 70, maxPrice: 70,  category: 'আটা/ময়দা',  image: আটাImg,  updatedAt: '২ ঘণ্টা আগে' },

  // ৩. ভোজ্য তেল
  { id: 301, name: 'সয়াবিন তেল (লুজ)',         unit: 'প্রতি লিটার', minPrice: 168, maxPrice: 170, category: 'ভোজ্য তেল', image: তেলImg,  updatedAt: '১ ঘণ্টা আগে' },
  { id: 302, name: 'সয়াবিন তেল (৫ লি. বোতল)', unit: '৫ লিটার',    minPrice: 915, maxPrice: 920, category: 'ভোজ্য তেল', image: তেলImg,  updatedAt: '১ ঘণ্টা আগে' },
  { id: 303, name: 'সয়াবিন তেল (২ লি. বোতল)', unit: '২ লিটার',    minPrice: 375, maxPrice: 378, category: 'ভোজ্য তেল', image: তেলImg,  updatedAt: '১ ঘণ্টা আগে' },
  { id: 304, name: 'সয়াবিন তেল (১ লি. বোতল)', unit: '১ লিটার',    minPrice: 188, maxPrice: 190, category: 'ভোজ্য তেল', image: তেলImg,  updatedAt: '১ ঘণ্টা আগে' },
  { id: 305, name: 'পাম অয়েল (লুজ)',            unit: 'প্রতি লিটার', minPrice: 153, maxPrice: 160, category: 'ভোজ্য তেল', image: তেলImg,  updatedAt: '১ ঘণ্টা আগে' },
  { id: 306, name: 'সুপার পাম অয়েল (লুজ)',      unit: 'প্রতি লিটার', minPrice: 155, maxPrice: 165, category: 'ভোজ্য তেল', image: তেলImg,  updatedAt: '১ ঘণ্টা আগে' },
  { id: 307, name: 'রাইস ব্রান তেল (৫ লি.)',    unit: '৫ লিটার',    minPrice: 1030,maxPrice: 1080,category: 'ভোজ্য তেল', image: তেলImg,  updatedAt: '১ ঘণ্টা আগে' },
  { id: 308, name: 'রাইস ব্রান তেল (১ লি.)',    unit: '১ লিটার',    minPrice: 300, maxPrice: 350, category: 'ভোজ্য তেল', image: তেলImg,  updatedAt: '১ ঘণ্টা আগে' },
  { id: 309, name: 'সরিষার তেল (লুজ)',           unit: 'প্রতি লিটার', minPrice: 200, maxPrice: 205, category: 'ভোজ্য তেল', image: তেলImg,  updatedAt: '১ ঘণ্টা আগে' },

  // ৪. চিনি
  { id: 401, name: 'চিনি খোলা (লাল)',           unit: 'প্রতি কেজি', minPrice: 100, maxPrice: 110, category: 'চিনি',      image: চিনিImg, updatedAt: '৪ ঘণ্টা আগে' },
  { id: 402, name: 'চিনি খোলা (সাদা)',          unit: 'প্রতি কেজি', minPrice: 97,  maxPrice: 110, category: 'চিনি',      image: চিনিImg, updatedAt: '৪ ঘণ্টা আগে' },
  { id: 403, name: 'চিনি (প্যাকেট)',            unit: 'প্রতি কেজি', minPrice: 120, maxPrice: 120, category: 'চিনি',      image: চিনিImg, updatedAt: '৪ ঘণ্টা আগে' },

  // ৫. লবণ
  { id: 501, name: 'লবণ (খোলা)',                unit: 'প্রতি কেজি', minPrice: 25,  maxPrice: 28,  category: 'লবণ',       image: লবনImg,  updatedAt: '৫ ঘণ্টা আগে' },
  { id: 502, name: 'লবণ (প্যাকেট)',             unit: 'প্রতি কেজি', minPrice: 38,  maxPrice: 40,  category: 'লবণ',       image: লবনImg,  updatedAt: '৫ ঘণ্টা আগে' },

  // ৬. ডাল
  { id: 601, name: 'মশুর ডাল (বড় দানা)',       unit: 'প্রতি কেজি', minPrice: 98,  maxPrice: 100, category: 'ডাল',       image: ডালImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 602, name: 'মশুর ডাল (মাঝারি দানা)',   unit: 'প্রতি কেজি', minPrice: 150, maxPrice: 160, category: 'ডাল',       image: ডালImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 603, name: 'মশুর ডাল (ছোট দানা)',       unit: 'প্রতি কেজি', minPrice: 150, maxPrice: 160, category: 'ডাল',       image: ডালImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 604, name: 'মুগ ডাল (সরু)',             unit: 'প্রতি কেজি', minPrice: 145, maxPrice: 150, category: 'ডাল',       image: ডালImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 605, name: 'মুগ ডাল (মোটা)',            unit: 'প্রতি কেজি', minPrice: 105, maxPrice: 110, category: 'ডাল',       image: ডালImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 606, name: 'এ্যাংকর ডাল',              unit: 'প্রতি কেজি', minPrice: 150, maxPrice: 150, category: 'ডাল',       image: ডালImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 607, name: 'খেসারি ডাল',               unit: 'প্রতি কেজি', minPrice: 76,  maxPrice: 80,  category: 'ডাল',       image: ডালImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 608, name: 'মাশ কলাই ডাল',             unit: 'প্রতি কেজি', minPrice: 148, maxPrice: 150, category: 'ডাল',       image: ডালImg,  updatedAt: '২ ঘণ্টা আগে' },
  { id: 609, name: 'ছোলা (মানভেদে)',            unit: 'প্রতি কেজি', minPrice: 100, maxPrice: 110, category: 'ডাল',       image: ডালImg,  updatedAt: '২ ঘণ্টা আগে' },

  // ৭. আলু
  { id: 701, name: 'আলু (ডায়মন্ড)',             unit: 'প্রতি কেজি', minPrice: 20,  maxPrice: 22,  category: 'আলু',       image: আলুImg,  updatedAt: '৩ ঘণ্টা আগে' },
  { id: 702, name: 'আলু (লাল)',                  unit: 'প্রতি কেজি', minPrice: 15,  maxPrice: 50,  category: 'আলু',       image: আলুImg,  updatedAt: '৩ ঘণ্টা আগে' },
  { id: 703, name: 'আলু (হল্যান্ড)',             unit: 'প্রতি কেজি', minPrice: 15,  maxPrice: 25,  category: 'আলু',       image: আলুImg,  updatedAt: '৩ ঘণ্টা আগে' },

  // ৮. মসলা
  { id: 801, name: 'পেঁয়াজ (দেশি)',             unit: 'প্রতি কেজি', minPrice: 45,  maxPrice: 50,  category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 802, name: 'রসুন (দেশি)',                unit: 'প্রতি কেজি', minPrice: 180, maxPrice: 200, category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 803, name: 'রসুন (আমদানি)',              unit: 'প্রতি কেজি', minPrice: 200, maxPrice: 220, category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 804, name: 'কাঁচা মরিচ',                unit: 'প্রতি কেজি', minPrice: 130, maxPrice: 140, category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 805, name: 'শুকনা মরিচ (দেশি)',          unit: 'প্রতি কেজি', minPrice: 350, maxPrice: 400, category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 806, name: 'শুকনা মরিচ (আমদানি)',        unit: 'প্রতি কেজি', minPrice: 350, maxPrice: 380, category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 807, name: 'হলুদ (দেশি)',                unit: 'প্রতি কেজি', minPrice: 240, maxPrice: 260, category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 808, name: 'আদা (দেশি)',                 unit: 'প্রতি কেজি', minPrice: 180, maxPrice: 200, category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 809, name: 'আদা (আমদানি)',               unit: 'প্রতি কেজি', minPrice: 150, maxPrice: 160, category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 810, name: 'জিরা',                       unit: '১০০ গ্রাম',  minPrice: 50,  maxPrice: 60,  category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 811, name: 'দারুচিনি',                  unit: '১০০ গ্রাম',  minPrice: 50,  maxPrice: 55,  category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 812, name: 'লবঙ্গ',                      unit: '১০০ গ্রাম',  minPrice: 140, maxPrice: 145, category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 813, name: 'এলাচ (ছোট)',                 unit: '১০০ গ্রাম',  minPrice: 450, maxPrice: 550, category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 814, name: 'ধনিয়া',                     unit: '১০০ গ্রাম',  minPrice: 16,  maxPrice: 20,  category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },
  { id: 815, name: 'তেজপাতা',                   unit: '১০০ গ্রাম',  minPrice: 19,  maxPrice: 20,  category: 'মসলা',      image: মসলাImg, updatedAt: '১ ঘণ্টা আগে' },

  // ৯. মাছ ও গোশত
  { id: 901, name: 'রুই',                        unit: 'প্রতি কেজি', minPrice: 340, maxPrice: 350, category: 'মাছ ও গোশত', image: মাছImg, updatedAt: '২ ঘণ্টা আগে' },
  { id: 902, name: 'কাতল',                       unit: 'প্রতি কেজি', minPrice: 300, maxPrice: 320, category: 'মাছ ও গোশত', image: মাছImg, updatedAt: '২ ঘণ্টা আগে' },
  { id: 903, name: 'চিতল',                       unit: 'প্রতি কেজি', minPrice: 500, maxPrice: 550, category: 'মাছ ও গোশত', image: মাছImg, updatedAt: '২ ঘণ্টা আগে' },
  { id: 904, name: 'বোয়াল',                     unit: 'প্রতি কেজি', minPrice: 500, maxPrice: 600, category: 'মাছ ও গোশত', image: মাছImg, updatedAt: '২ ঘণ্টা আগে' },
  { id: 905, name: 'আইড়',                       unit: 'প্রতি কেজি', minPrice: 200, maxPrice: 250, category: 'মাছ ও গোশত', image: মাছImg, updatedAt: '২ ঘণ্টা আগে' },
  { id: 906, name: 'সিলভার কার্প',               unit: 'প্রতি কেজি', minPrice: 150, maxPrice: 180, category: 'মাছ ও গোশত', image: মাছImg, updatedAt: '২ ঘণ্টা আগে' },
  { id: 907, name: 'গোল্ড কার্প',                unit: 'প্রতি কেজি', minPrice: 150, maxPrice: 180, category: 'মাছ ও গোশত', image: মাছImg, updatedAt: '২ ঘণ্টা আগে' },

  // ১০. দুধ
  { id: 1001, name: 'দুধ (তরল)',                 unit: 'প্রতি লিটার', minPrice: 100, maxPrice: 120, category: 'দুধ',       image: দুধImg,  updatedAt: '৬ ঘণ্টা আগে' },

  // ১১. ডিম
  { id: 1101, name: 'মুরগির ডিম (লাল)',          unit: 'প্রতি ডজন',  minPrice: 135, maxPrice: 140, category: 'ডিম',       image: ডিমImg,  updatedAt: '৩ ঘণ্টা আগে' },
  { id: 1102, name: 'মুরগির ডিম (সাদা)',         unit: 'প্রতি ডজন',  minPrice: 130, maxPrice: 140, category: 'ডিম',       image: ডিমImg,  updatedAt: '৩ ঘণ্টা আগে' },
  { id: 1103, name: 'মুরগির ডিম (দেশি)',         unit: 'প্রতি ডজন',  minPrice: 230, maxPrice: 270, category: 'ডিম',       image: ডিমImg,  updatedAt: '৩ ঘণ্টা আগে' },
  { id: 1104, name: 'হাঁসের ডিম',                unit: 'প্রতি ডজন',  minPrice: 240, maxPrice: 250, category: 'ডিম',       image: ডিমImg,  updatedAt: '৩ ঘণ্টা আগে' },
  { id: 1105, name: 'কোয়েল পাখির ডিম',           unit: 'প্রতি ডজন',  minPrice: 45,  maxPrice: 50,  category: 'ডিম',       image: ডিমImg,  updatedAt: '৩ ঘণ্টা আগে' },

  // ১২. শাক ও সবজি
  { id: 1201, name: 'পুঁইশাক',                  unit: 'আটি/কেজি',   minPrice: 30,  maxPrice: 40,  category: 'শাক ও সবজি', image: শাকImg, updatedAt: '৪ ঘণ্টা আগে' },
  { id: 1202, name: 'লাল শাক',                   unit: 'আটি/কেজি',   minPrice: 10,  maxPrice: 15,  category: 'শাক ও সবজি', image: শাকImg, updatedAt: '৪ ঘণ্টা আগে' },
  { id: 1203, name: 'কলমি শাক',                  unit: 'আটি/কেজি',   minPrice: 10,  maxPrice: 12,  category: 'শাক ও সবজি', image: শাকImg, updatedAt: '৪ ঘণ্টা আগে' },
  { id: 1204, name: 'পালং শাক',                  unit: 'আটি/কেজি',   minPrice: 20,  maxPrice: 30,  category: 'শাক ও সবজি', image: শাকImg, updatedAt: '৪ ঘণ্টা আগে' },
  { id: 1205, name: 'পাট শাক',                   unit: 'আটি/কেজি',   minPrice: 20,  maxPrice: 25,  category: 'শাক ও সবজি', image: শাকImg, updatedAt: '৪ ঘণ্টা আগে' },
  { id: 1206, name: 'পটল',                       unit: 'প্রতি কেজি', minPrice: 70,  maxPrice: 80,  category: 'শাক ও সবজি', image: শাকImg, updatedAt: '৪ ঘণ্টা আগে' },
  { id: 1207, name: 'কচু শাক',                   unit: 'আটি/কেজি',   minPrice: 10,  maxPrice: 15,  category: 'শাক ও সবজি', image: শাকImg, updatedAt: '৪ ঘণ্টা আগে' },

  // ১৩. ফল
  { id: 1301, name: 'পেঁয়ারা (কাজি)',            unit: 'প্রতি কেজি', minPrice: 45,  maxPrice: 50,  category: 'ফল',        image: ফলImg,   updatedAt: '৫ ঘণ্টা আগে' },
  { id: 1302, name: 'পেঁয়ারা (দেশি)',            unit: 'প্রতি কেজি', minPrice: 40,  maxPrice: 50,  category: 'ফল',        image: ফলImg,   updatedAt: '৫ ঘণ্টা আগে' },
  { id: 1303, name: 'আনারস',                     unit: 'প্রতি পিস',  minPrice: 50,  maxPrice: 60,  category: 'ফল',        image: ফলImg,   updatedAt: '৫ ঘণ্টা আগে' },
  { id: 1304, name: 'জাম্বুরা',                  unit: 'প্রতি পিস',  minPrice: 50,  maxPrice: 80,  category: 'ফল',        image: ফলImg,   updatedAt: '৫ ঘণ্টা আগে' },
  { id: 1305, name: 'বড়ই',                      unit: 'প্রতি কেজি', minPrice: 200, maxPrice: 220, category: 'ফল',        image: ফলImg,   updatedAt: '৫ ঘণ্টা আগে' },
  { id: 1306, name: 'আপেল (সবুজ)',               unit: 'প্রতি কেজি', minPrice: 300, maxPrice: 350, category: 'ফল',        image: ফলImg,   updatedAt: '৫ ঘণ্টা আগে' },
  { id: 1307, name: 'আপেল (ফুজি)',               unit: 'প্রতি কেজি', minPrice: 300, maxPrice: 350, category: 'ফল',        image: ফলImg,   updatedAt: '৫ ঘণ্টা আগে' },

  // ১৪. জ্বালানি
  { id: 1401, name: 'এলপিজি গ্যাস (১২ কেজি)',    unit: 'প্রতি সিলিন্ডার', minPrice: 1356, maxPrice: 1356, category: 'জ্বালানি', image: জ্বালানিImg, updatedAt: '১ মার্চ ২০২৬' },
  { id: 1402, name: 'এলপিজি গ্যাস (১২.৫ কেজি)',  unit: 'প্রতি সিলিন্ডার', minPrice: 1413, maxPrice: 1413, category: 'জ্বালানি', image: জ্বালানিImg, updatedAt: '১ মার্চ ২০২৬' },
  { id: 1403, name: 'এলপিজি গ্যাস (৩০ কেজি)',    unit: 'প্রতি সিলিন্ডার', minPrice: 3392, maxPrice: 3392, category: 'জ্বালানি', image: জ্বালানিImg, updatedAt: '১ মার্চ ২০২৬' },
  { id: 1404, name: 'এলপিজি গ্যাস (৩৫ কেজি)',    unit: 'প্রতি সিলিন্ডার', minPrice: 3956, maxPrice: 3956, category: 'জ্বালানি', image: জ্বালানিImg, updatedAt: '১ মার্চ ২০২৬' },
  { id: 1405, name: 'ডিজেল',                      unit: 'প্রতি লিটার',      minPrice: 102,  maxPrice: 102,  category: 'জ্বালানি', image: জ্বালানিImg, updatedAt: '১ মার্চ ২০২৬' },
  { id: 1406, name: 'কেরোসিন',                    unit: 'প্রতি লিটার',      minPrice: 114,  maxPrice: 114,  category: 'জ্বালানি', image: জ্বালানিImg, updatedAt: '১ মার্চ ২০২৬' },
  { id: 1407, name: 'অকটেন',                      unit: 'প্রতি লিটার',      minPrice: 122,  maxPrice: 122,  category: 'জ্বালানি', image: জ্বালানিImg, updatedAt: '১ মার্চ ২০২৬' },
  { id: 1408, name: 'পেট্রোল',                    unit: 'প্রতি লিটার',      minPrice: 117,  maxPrice: 117,  category: 'জ্বালানি', image: জ্বালানিImg, updatedAt: '১ মার্চ ২০২৬' },
]

// ক্যাটাগরি লিস্ট (unique)
const categories = ['সব', ...Array.from(new Set(allItems.map(i => i.category)))]

const ITEMS_PER_PAGE = 10

// ─── মূল্য ফরম্যাট ─────────────────────────────────────────────────────────────
const PriceDisplay = ({ min, max, unit, size = 'normal' }) => {
  const textSize  = size === 'large' ? 'text-2xl' : size === 'small' ? 'text-sm' : 'text-lg'
  const unitSize  = size === 'large' ? 'text-sm'  : 'text-xs'
  if (min === max) {
    return (
      <span className={`font-extrabold text-[#0e7c61] ${textSize}`}>
        ৳{min} <span className={`font-normal text-slate-400 ${unitSize}`}>{unit}</span>
      </span>
    )
  }
  return (
    <span className={`font-extrabold text-[#0e7c61] ${textSize}`}>
      ৳{min} - ৳{max} <span className={`font-normal text-slate-400 ${unitSize}`}>{unit}</span>
    </span>
  )
}

// ─── List Row ─────────────────────────────────────────────────────────────────
const ListRow = ({ item, onDetails }) => (
  <div
    className="bg-white rounded-2xl flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 shadow-sm hover:shadow-md border border-slate-100 hover:border-[#0e7c61]/20 transition-all duration-200 cursor-pointer"
    onClick={() => onDetails(item)}
  >
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#f0f7f4] flex items-center justify-center flex-shrink-0 overflow-hidden">
      <img src={item.image} alt={item.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-bold text-[#0d1b2a] text-sm sm:text-base leading-snug truncate">{item.name}</p>
      <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
        <FiClock size={10} /> সর্বশেষ আপডেট: {item.updatedAt}
      </p>
    </div>
    <div className="text-right flex-shrink-0">
      <PriceDisplay min={item.minPrice} max={item.maxPrice} unit={item.unit} size="normal" />
    </div>
  </div>
)

// ─── Grid Card ────────────────────────────────────────────────────────────────
const GridCard = ({ item, onDetails }) => (
  <div
    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 hover:border-[#0e7c61]/25 transition-all duration-200 cursor-pointer group"
    onClick={() => onDetails(item)}
  >
    <div className="h-36 sm:h-40 bg-[#f0f7f4] flex items-center justify-center overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 sm:h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-3.5">
      <h3 className="font-bold text-[#0d1b2a] text-sm leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
        {item.name}
      </h3>
      <PriceDisplay min={item.minPrice} max={item.maxPrice} unit={item.unit} size="small" />
      <p className="text-slate-400 text-[10px] flex items-center gap-1 mt-2">
        <FiClock size={9} /> {item.updatedAt}
      </p>
    </div>
  </div>
)

// ─── Details Modal ────────────────────────────────────────────────────────────
const DetailsModal = ({ item, onClose }) => {
  const related = allItems.filter(
    (i) => i.category === item.category && i.id !== item.id
  )

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-3xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* হেডার */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-5 pt-5 pb-3 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0e7c61] animate-pulse" />
            <span className="text-xs font-bold text-[#0e7c61]">আজকের বাজারদর</span>
          </div>
          <button
            onClick={onClose}
            className="bg-slate-100 hover:bg-slate-200 rounded-full p-1.5 transition-colors"
          >
            <FiX size={15} className="text-slate-600" />
          </button>
        </div>

        <div className="p-5">
          {/* মূল পণ্য */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-24 h-24 rounded-2xl bg-[#f0f7f4] flex items-center justify-center flex-shrink-0">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
            </div>
            <div>
              <span className="inline-block bg-[#0e7c61]/10 text-[#0e7c61] text-[10px] font-bold px-2.5 py-1 rounded-full mb-2">
                {item.category}
              </span>
              <h2 className="text-lg font-extrabold text-[#0d1b2a] leading-snug mb-2">{item.name}</h2>
              <PriceDisplay min={item.minPrice} max={item.maxPrice} unit={item.unit} size="large" />
              <p className="text-slate-400 text-xs flex items-center gap-1 mt-1.5">
                <FiClock size={10} /> সর্বশেষ আপডেট: {item.updatedAt}
              </p>
            </div>
          </div>

          {/* সংশ্লিষ্ট পণ্য */}
          {related.length > 0 && (
            <>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px flex-1 bg-slate-100" />
                <span className="text-xs font-bold text-slate-400 px-2">একই ক্যাটাগরির অন্যান্য পণ্য</span>
                <div className="h-px flex-1 bg-slate-100" />
              </div>
              <div className="flex flex-col gap-2">
                {related.map((rel) => (
                  <div
                    key={rel.id}
                    className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <img src={rel.image} alt={rel.name} className="w-7 h-7 object-contain" />
                    </div>
                    <p className="flex-1 font-semibold text-[#0d1b2a] text-sm leading-snug">{rel.name}</p>
                    <PriceDisplay min={rel.minPrice} max={rel.maxPrice} unit={rel.unit} size="small" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
const Items = () => {
  const [view,          setView]          = useState('list')
  const [selectedItem,  setSelectedItem]  = useState(null)
  const [visibleCount,  setVisibleCount]  = useState(ITEMS_PER_PAGE)
  const [searchQuery,   setSearchQuery]   = useState('')
  const [activeCategory,setActiveCategory]= useState('সব')
  const [sortOrder,     setSortOrder]     = useState('default') // default | low | high

  // ফিল্টার + সার্চ + সর্ট
  const filtered = useMemo(() => {
    let items = activeCategory === 'সব'
      ? allItems
      : allItems.filter(i => i.category === activeCategory)

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase()
      items = items.filter(i => i.name.toLowerCase().includes(q))
    }

    if (sortOrder === 'low')  items = [...items].sort((a, b) => a.minPrice - b.minPrice)
    if (sortOrder === 'high') items = [...items].sort((a, b) => b.minPrice - a.minPrice)

    return items
  }, [activeCategory, searchQuery, sortOrder])

  const visibleItems = filtered.slice(0, visibleCount)
  const hasMore      = visibleCount < filtered.length

  // ক্যাটাগরি বা সার্চ পরিবর্তনে reset
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setVisibleCount(ITEMS_PER_PAGE)
  }
  const handleSearch = (val) => {
    setSearchQuery(val)
    setVisibleCount(ITEMS_PER_PAGE)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .items-font { font-family: 'Hind Siliguri', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>

      <section className="items-font bg-[#f4f7f5] min-h-screen py-8">
        <div className="container mx-auto px-4 lg:px-6">

          {/* ── শিরোনাম ── */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b2a]">নিত্যপ্রয়োজনীয় পণ্যের তালিকা</h2>
            <p className="text-slate-500 text-sm mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0e7c61] inline-block animate-pulse" />
              আজকের বাজারদর (Today's Market Price)
            </p>
          </div>

          {/* ── সার্চ + সর্ট বার ── */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-4 py-3 mb-4 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="এই ক্যাটাগরিতে পণ্য খুঁজুন..."
                className="w-full pl-9 pr-3 py-2 text-sm text-slate-700 placeholder-slate-400 bg-transparent border-none outline-none"
              />
            </div>
            <div className="h-px sm:h-auto sm:w-px bg-slate-200 sm:self-stretch" />
            <div className="relative">
              <TbArrowsSort className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="pl-9 pr-8 py-2 text-sm text-slate-700 bg-transparent border-none outline-none appearance-none cursor-pointer w-full sm:w-auto"
              >
                <option value="default">মূল্য (নিম্ন থেকে উচ্চ)</option>
                <option value="low">মূল্য (কম থেকে বেশি)</option>
                <option value="high">মূল্য (বেশি থেকে কম)</option>
              </select>
            </div>
          </div>

          {/* ── ক্যাটাগরি ট্যাব ── */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#0e7c61] text-white shadow-md shadow-[#0e7c61]/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0e7c61]/40 hover:text-[#0e7c61]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── View Toggle + রেজাল্ট কাউন্ট ── */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-slate-500">
              <span className="font-bold text-[#0d1b2a]">{filtered.length}</span>টি পণ্য পাওয়া গেছে
            </p>
            <div className="flex bg-white rounded-full p-1 shadow-sm border border-slate-100">
              <button
                onClick={() => setView('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  view === 'list' ? 'bg-[#0e7c61] text-white' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <FiList size={13} /> তালিকা
              </button>
              <button
                onClick={() => setView('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  view === 'grid' ? 'bg-[#0e7c61] text-white' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <FiGrid size={13} /> গ্রিড
              </button>
            </div>
          </div>

          {/* ── Items ── */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-semibold">কোনো পণ্য পাওয়া যায়নি</p>
              <p className="text-sm mt-1">অনুসন্ধান পরিবর্তন করে আবার চেষ্টা করুন</p>
            </div>
          ) : view === 'list' ? (
            <div className="flex flex-col gap-2.5">
              {visibleItems.map((item) => (
                <ListRow key={item.id} item={item} onDetails={setSelectedItem} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {visibleItems.map((item) => (
                <GridCard key={item.id} item={item} onDetails={setSelectedItem} />
              ))}
            </div>
          )}

          {/* ── আরো দেখুন ── */}
          {hasMore && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                className="flex items-center gap-2 px-8 py-3 bg-[#0e7c61] hover:bg-[#0a6350] text-white font-bold rounded-full shadow-md shadow-[#0e7c61]/25 transition-all active:scale-95"
              >
                <FiChevronDown size={17} /> আরো পণ্য দেখুন
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── Details Modal ── */}
      {selectedItem && (
        <DetailsModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  )
}

export default Items