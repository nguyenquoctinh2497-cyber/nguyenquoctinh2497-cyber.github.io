"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import {
  Menu,
  X,
  ShoppingCart,
  Phone,
  Search,
  Laptop,
  Monitor,
  Camera,
  Printer,
  Wifi,
  Smartphone,
  ChevronRight,
  FileText,
  Cpu,
  UserCheck,
  Info,
  PhoneCall,
  Wrench,
} from "lucide-react";

export default function Header() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const { totalItems } = useCart();

  const categories = [
    { name: "Laptop Mới", icon: Laptop, href: "/category/laptop-moi" },
    { name: "Laptop Likenew / Cũ", icon: Laptop, href: "/category/laptop-likenew" },
    { name: "PC Gaming / Văn Phòng", icon: Monitor, href: "/category/pc-may-tinh-ban" },
    { name: "Camera Quan Sát", icon: Camera, href: "/category/camera-quan-sat" },
    { name: "Màn Hình PC", icon: Monitor, href: "/category/man-hinh-pc" },
    { name: "Máy In & Thiết Bị Văn Phòng", icon: Printer, href: "/category/may-in" },
    { name: "Thiết Bị Mạng", icon: Wifi, href: "/category/thiet-bi-mang" },
    { name: "Điện Thoại Cũ Giá Rẻ", icon: Smartphone, href: "/category/dien-thoai-cu" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Header Bar */}
      <div className="bg-red-600 text-white text-xs md:text-sm font-semibold py-1.5 px-4 flex justify-between items-center">
        <span className="truncate">🔥 ƯU ĐÃI RƯỚC ĐÈN - GIẢM GIÁ TẤT CẢ DÒNG PC & LAPTOP TẠI ĐÀ NẴNG</span>
        <a href="tel:0989068821" className="font-extrabold hover:underline flex items-center gap-1.5 shrink-0 text-yellow-300">
          <Phone className="w-4 h-4 animate-bounce" /> 0989.068.821
        </a>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-3 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl md:text-3xl font-black text-red-600 tracking-tight">
            TINHCOMPUTER.VN
          </span>
          <span className="text-[10px] md:text-[11px] text-gray-500 font-bold tracking-widest hidden sm:inline">
            CAMERAS • PCS • LAPTOPS • REPAIR
          </span>
        </Link>

        {/* Ô Tìm Kiếm */}
        <div className="flex-1 max-w-lg relative">
          <input
            type="text"
            placeholder="Tìm kiếm máy tính, camera, laptop, dịch vụ..."
            className="w-full text-sm pl-3.5 pr-10 py-2 border-2 border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-600 text-white p-2 rounded-sm hover:bg-red-700 transition">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Giỏ Hàng */}
        <Link href="/cart" className="relative p-2 text-gray-700 hover:text-red-600 transition flex items-center gap-2">
          <div className="relative">
            <ShoppingCart className="w-7 h-7" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center animate-pulse border-2 border-white">
                {totalItems}
              </span>
            )}
          </div>
          <span className="hidden md:inline text-xs font-extrabold uppercase text-gray-700">Giỏ hàng</span>
        </Link>
      </div>

      {/* NAV BAR MÀU ĐỎ CHUẨN TRƯỜNG GIANG - CHỮ TO, CÓ ICON TRỰC QUAN */}
      <nav className="bg-red-700 text-white relative border-t border-red-800">
        <div className="container mx-auto px-2 flex items-center justify-between">
          <div className="flex items-center overflow-x-auto whitespace-nowrap scrollbar-none font-sans">
            
            {/* Nút Bật/Tắt Danh Mục */}
            <button
              onClick={() => setIsCategoryOpen((prev) => !prev)}
              className="flex items-center gap-2 bg-red-800 hover:bg-red-900 px-4 py-3 text-sm font-black uppercase transition cursor-pointer select-none border-r border-red-600"
            >
              {isCategoryOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span>DANH MỤC SẢN PHẨM</span>
            </button>

            {/* Các mục Menu hiển thị rõ ràng kèm Icon chuẩn phong cách Trường Giang */}
            <Link
              href="/news"
              className="flex items-center gap-1.5 px-3.5 py-3 text-sm font-bold hover:bg-red-600 transition tracking-wide border-r border-red-600/50"
            >
              <FileText className="w-4 h-4 text-yellow-300" />
              <span>TIN TỨC</span>
            </Link>

            <Link
              href="/build-pc"
              className="flex items-center gap-1.5 px-3.5 py-3 text-sm font-bold hover:bg-red-600 transition tracking-wide border-r border-red-600/50"
            >
              <Cpu className="w-4 h-4 text-yellow-300" />
              <span>BUILD PC</span>
            </Link>

            <Link
              href="/recruitment"
              className="flex items-center gap-1.5 px-3.5 py-3 text-sm font-bold hover:bg-red-600 transition tracking-wide border-r border-red-600/50"
            >
              <UserCheck className="w-4 h-4 text-yellow-300" />
              <span>TUYỂN DỤNG</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-1.5 px-3.5 py-3 text-sm font-bold hover:bg-red-600 transition tracking-wide border-r border-red-600/50"
            >
              <Info className="w-4 h-4 text-yellow-300" />
              <span>GIỚI THIỆU</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-3.5 py-3 text-sm font-bold hover:bg-red-600 transition tracking-wide border-r border-red-600/50"
            >
              <PhoneCall className="w-4 h-4 text-yellow-300" />
              <span>LIÊN HỆ</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-3.5 py-3 text-sm font-black text-yellow-300 hover:bg-red-600 transition tracking-wide bg-red-800/60"
            >
              <Wrench className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span>YÊU CẦU SỬA CHỮA / TƯ VẤN</span>
            </Link>
          </div>
        </div>

        {/* Dropdown Menu Xổ Xuống */}
        {isCategoryOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setIsCategoryOpen(false)}
            />
            <div className="absolute top-full left-0 w-full md:w-80 bg-white text-gray-800 shadow-2xl border-b border-r border-gray-200 z-50">
              <ul className="divide-y divide-gray-100 text-sm font-semibold">
                {categories.map((cat, idx) => {
                  const IconComp = cat.icon;
                  return (
                    <li key={idx}>
                      <Link
                        href={cat.href}
                        className="flex items-center justify-between px-4 py-3 hover:bg-red-50 hover:text-red-600 transition text-sm"
                        onClick={() => setIsCategoryOpen(false)}
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComp className="w-4 h-4 text-red-600 shrink-0" />
                          <span>{cat.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}