"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import {
  ShoppingCart,
  Phone,
  Search,
  Menu,
  FileText,
  Cpu,
  UserCheck,
  Info,
  PhoneCall,
  Wrench,
  User,
} from "lucide-react";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      {/* Top Header Bar */}
      <div className="bg-red-600 text-white text-xs md:text-sm font-semibold py-1.5 px-4 flex justify-between items-center">
        <span className="truncate">🔥 ƯU ĐÃI RƯỚC ĐÈN - GIẢM GIÁ TẤT CẢ DÒNG PC & LAPTOP TẠI ĐÀ NẴNG</span>
        <a href="tel:0989068821" className="font-extrabold hover:underline flex items-center gap-1.5 shrink-0 text-yellow-300">
          <Phone className="w-4 h-4 animate-bounce" /> 0989.068.821
        </a>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-3 py-3 flex items-center justify-between gap-3 md:gap-6">
        
        {/* LOGO TRÒN ĐỎ CHỮ T + TINHCOMPUTER.VN + CAMERA • PC • LAPTOP */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-sm shrink-0 border-2 border-red-700">
            T
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-black tracking-tight font-sans">
              <span className="text-gray-900">TINHCOMPUTER</span>
              <span className="text-red-600">.VN</span>
            </span>
            <span className="text-[9px] md:text-[10px] text-gray-500 font-bold tracking-widest mt-0.5">
              CAMERA • PC • LAPTOP
            </span>
          </div>
        </Link>

        {/* Ô TÌM KIẾM */}
        <div className="flex-1 max-w-lg relative hidden sm:block">
          <div className="flex w-full border-2 border-red-600 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm, máy tính, camera..."
              className="w-full text-xs md:text-sm px-3 py-2 focus:outline-none font-medium text-gray-800"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 flex items-center justify-center transition shrink-0">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ĐĂNG NHẬP & GIỎ HÀNG */}
        <div className="flex items-center gap-4 shrink-0">
          <Link href="/login" className="hidden lg:flex items-center gap-2 hover:text-red-600 transition text-gray-700">
            <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-xs font-bold text-gray-800">Đăng nhập/Đăng ký</span>
              <span className="text-[10px] text-gray-500 font-medium">Nhận ưu đãi lớn</span>
            </div>
          </Link>

          <Link href="/cart" className="relative p-1.5 text-gray-700 hover:text-red-600 transition flex items-center gap-2">
            <div className="relative">
              <ShoppingCart className="w-7 h-7" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse border border-white">
                  {totalItems}
                </span>
              )}
            </div>
            <div className="hidden md:flex flex-col text-left leading-tight">
              <span className="text-xs font-bold text-gray-800 uppercase">GIỎ HÀNG</span>
              <span className="text-[10px] text-gray-500 font-medium">
                {totalItems > 0 ? `${totalItems} sản phẩm` : "Chưa có sản phẩm"}
              </span>
            </div>
          </Link>
        </div>

      </div>

      {/* NAV BAR MÀU ĐỎ CHUẨN TRƯỜNG GIANG */}
      <nav className="bg-red-700 text-white border-t border-red-800">
        <div className="container mx-auto px-2 flex items-center">
          
          {/* TIÊU ĐỀ DANH MỤC THẲNG HÀNG VỚI CỘT BÊN DƯỚI */}
          <div className="hidden lg:flex items-center justify-between bg-red-800 px-4 py-3 text-sm font-black uppercase w-full max-w-[25%] shrink-0 border-r border-red-600 select-none">
            <span>DANH MỤC SẢN PHẨM</span>
            <Menu className="w-5 h-5 text-yellow-300" />
          </div>

          {/* MENU NGANG */}
          <div className="flex items-center overflow-x-auto whitespace-nowrap scrollbar-none font-sans flex-1">
            <Link
              href="/news"
              className="flex items-center gap-1.5 px-4 py-3 text-sm font-extrabold hover:bg-red-600 transition tracking-wide border-r border-red-600/50"
            >
              <FileText className="w-4 h-4 text-yellow-300" />
              <span>TIN TỨC</span>
            </Link>

            <Link
              href="/build-pc"
              className="flex items-center gap-1.5 px-4 py-3 text-sm font-extrabold hover:bg-red-600 transition tracking-wide border-r border-red-600/50"
            >
              <Cpu className="w-4 h-4 text-yellow-300" />
              <span>BUILD PC</span>
            </Link>

            <Link
              href="/recruitment"
              className="flex items-center gap-1.5 px-4 py-3 text-sm font-extrabold hover:bg-red-600 transition tracking-wide border-r border-red-600/50"
            >
              <UserCheck className="w-4 h-4 text-yellow-300" />
              <span>TUYỂN DỤNG</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-1.5 px-4 py-3 text-sm font-extrabold hover:bg-red-600 transition tracking-wide border-r border-red-600/50"
            >
              <Info className="w-4 h-4 text-yellow-300" />
              <span>GIỚI THIỆU</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-4 py-3 text-sm font-extrabold hover:bg-red-600 transition tracking-wide border-r border-red-600/50"
            >
              <PhoneCall className="w-4 h-4 text-yellow-300" />
              <span>LIÊN HỆ</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-4 py-3 text-sm font-black text-yellow-300 hover:bg-red-600 transition tracking-wide bg-red-800/80"
            >
              <Wrench className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span>YÊU CẦU SỬA CHỮA / TƯ VẤN</span>
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}