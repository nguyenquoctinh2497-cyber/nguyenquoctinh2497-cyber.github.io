"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Phone, Menu } from "lucide-react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      
      {/* 1. BANNER THÔNG BÁO TRÊN CÙNG TO RỘNG CỰC NỔI BẬT */}
      <div className="bg-gradient-to-r from-gray-100 via-amber-500 to-red-600 text-gray-900 overflow-hidden shadow-sm relative">
        <div className="max-w-[1440px] mx-auto px-4 py-2.5 md:py-3.5 flex items-center justify-between gap-4">
          
          {/* Họa tiết trang trí góc trái */}
          <div className="hidden lg:flex items-center gap-1.5 opacity-80 shrink-0">
            <div className="w-4 h-4 border-2 border-amber-600 rotate-12"></div>
            <div className="w-5 h-5 bg-amber-500 rotate-45 shadow"></div>
            <div className="w-4 h-4 border-2 border-amber-600 -rotate-12"></div>
            <div className="w-5 h-5 bg-red-600 rotate-12 shadow"></div>
          </div>

          {/* Nội dung Banner Thông Báo */}
          <div className="flex-1 flex items-center justify-center gap-3 text-center uppercase tracking-tight">
            <span className="text-gray-900 font-black text-sm md:text-lg lg:text-xl drop-shadow-sm">
              GIẢM GIÁ TẤT CẢ CÁC DÒNG <span className="text-red-700 bg-amber-200 px-2 py-0.5 rounded-md font-black">PC & LAPTOP</span>
            </span>

            <div className="bg-gradient-to-r from-amber-500 to-red-600 text-white font-black text-xs md:text-base lg:text-lg px-4 py-1.5 rounded-r-full shadow-md flex items-center gap-2 transform -skew-x-12">
              <span className="transform skew-x-12">🎁 VOUCHER & HÀNG NGÀN QUÀ TẶNG</span>
            </div>
          </div>

          {/* Hotline góc phải */}
          <div className="hidden xl:flex items-center gap-2 font-black text-xs text-white bg-black/20 px-3 py-1.5 rounded-full border border-white/20 shrink-0">
            <span>☎ HOTLINE: 0989.068.821</span>
          </div>

        </div>
      </div>

      {/* 2. KHU VỰC LOGO CHỮ T & THANH TÌM KIẾM CHÍNH */}
      <div className="max-w-[1440px] mx-auto px-3 py-3 flex items-center justify-between gap-4 md:gap-8">
        
        {/* LOGO CHỮ T CÁCH ĐIỆU CÓ KHÓA KÍCH THƯỚC AN TOÀN */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-11 h-11 md:w-12 md:h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-md shrink-0">
            <svg
              viewBox="0 0 100 100"
              width="28"
              height="28"
              className="w-7 h-7 md:w-8 md:h-8 fill-current shrink-0"
            >
              <path d="M 50,10 A 40,40 0 1,0 90,50 A 40,40 0 0,0 80,25" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
              <path d="M 32,32 L 68,32 M 50,32 L 50,72" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter uppercase leading-none group-hover:text-red-600 transition">
              TINHCOMPUTER<span className="text-red-600">.VN</span>
            </span>
            <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-0.5">
              CAMERAS • PCS • LAPTOPS
            </span>
          </div>
        </Link>

        {/* Ô TÌM KIẾM SẢN PHẨM */}
        <div className="flex-1 max-w-2xl hidden md:block">
          <form className="relative flex items-center">
            <input
              type="text"
              placeholder="Nhập tên laptop, PC, camera, wifi... cần tìm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border border-gray-300 rounded-full py-2.5 pl-5 pr-12 text-sm text-gray-900 focus:outline-none focus:border-red-600 focus:bg-white transition"
            />
            <button
              type="submit"
              className="absolute right-1.5 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition shadow"
            >
              <Search size={18} />
            </button>
          </form>
        </div>

        {/* GIỎ HÀNG & HOTLINE */}
        <div className="flex items-center gap-4 text-xs font-bold text-gray-800">
          <a
            href="tel:0989068821"
            className="hidden lg:flex items-center gap-2 bg-red-50 text-red-600 px-3.5 py-2 rounded-full border border-red-200 hover:bg-red-100 transition"
          >
            <Phone size={16} className="fill-current" />
            <div>
              <span className="text-[10px] block font-normal text-gray-500">Hotline tư vấn</span>
              <span className="font-extrabold text-sm leading-tight">0989.068.821</span>
            </div>
          </a>

          <Link
            href="/cart"
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-full hover:bg-red-600 transition shadow"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Giỏ hàng</span>
            <span className="bg-red-600 text-white font-black text-[11px] px-2 py-0.5 rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* 3. THANH MENU CHÍNH MÀU ĐỎ */}
      <div className="bg-red-600 text-white font-bold text-xs uppercase shadow-inner">
        <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6 overflow-x-auto py-3 no-scrollbar">
            <Link href="/" className="flex items-center gap-2 hover:text-amber-200 transition whitespace-nowrap">
              <Menu size={16} />
              <span>DANH MỤC SẢN PHẨM</span>
            </Link>
            <Link href="/category/tin-tuc" className="hover:text-amber-200 transition whitespace-nowrap">TIN TỨC</Link>
            <Link href="/category/build-pc" className="text-amber-300 hover:text-white transition whitespace-nowrap font-black">⚙ BUILD PC</Link>
            <Link href="/category/tuyen-dung" className="hover:text-amber-200 transition whitespace-nowrap">TUYỂN DỤNG</Link>
            <Link href="/category/gioi-thieu" className="hover:text-amber-200 transition whitespace-nowrap">GIỚI THIỆU</Link>
            <Link href="/contact" className="hover:text-amber-200 transition whitespace-nowrap">LIÊN HỆ</Link>
          </div>
        </div>
      </div>

    </header>
  );
}