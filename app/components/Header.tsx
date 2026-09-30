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
      <div className="bg-red-600 text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <span className="truncate">🔥 ƯU ĐÃI RƯỚC ĐÈN - GIẢM GIÁ TẤT CẢ DÒNG PC & LAPTOP</span>
        <a href="tel:0989068821" className="font-bold hover:underline flex items-center gap-1 shrink-0">
          <Phone className="w-3 h-3" /> 0989.068.821
        </a>
      </div>

      <div className="container mx-auto px-3 py-2.5 flex items-center justify-between gap-3">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl md:text-2xl font-black text-red-600 tracking-tight">
            TINHCOMPUTER.VN
          </span>
          <span className="text-[9px] text-gray-500 font-medium tracking-widest hidden sm:inline">
            CAMERAS • PCS • LAPTOPS
          </span>
        </Link>

        <div className="flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Tìm kiếm máy tính, camera, laptop..."
            className="w-full text-xs md:text-sm pl-3 pr-9 py-2 border border-red-500 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-600 text-white p-1.5 rounded-sm hover:bg-red-700 transition">
            <Search className="w-3.5 h-3.5" />
          </button>
        </div>

        <Link href="/cart" className="relative p-2 text-gray-700 hover:text-red-600 transition">
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      <nav className="bg-red-700 text-white relative">
        <div className="container mx-auto px-2 flex items-center justify-between">
          <div className="flex items-center overflow-x-auto whitespace-nowrap scrollbar-none">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center gap-2 bg-red-800 hover:bg-red-900 px-4 py-2.5 text-xs font-bold uppercase transition"
            >
              {isCategoryOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>DANH MỤC SẢN PHẨM</span>
            </button>

            <Link href="/" className="px-3.5 py-2.5 text-xs font-semibold hover:bg-red-600 transition">
              TRANG CHỦ
            </Link>
            <Link href="/news" className="px-3.5 py-2.5 text-xs font-semibold hover:bg-red-600 transition">
              TIN TỨC
            </Link>
            <Link href="/build-pc" className="px-3.5 py-2.5 text-xs font-semibold hover:bg-red-600 transition">
              BUILD PC
            </Link>
            <Link href="/contact" className="px-3.5 py-2.5 text-xs font-semibold hover:bg-red-600 transition">
              TƯ VẤN SỬA CHỮA
            </Link>
          </div>
        </div>

        {isCategoryOpen && (
          <div className="absolute top-full left-0 w-full md:w-80 bg-white text-gray-800 shadow-2xl border-b border-r border-gray-200 z-50">
            <ul className="divide-y divide-gray-100 text-sm">
              {categories.map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <li key={idx}>
                    <Link
                      href={cat.href}
                      className="flex items-center justify-between px-4 py-3 hover:bg-red-50 hover:text-red-600 transition font-medium text-xs md:text-sm"
                      onClick={() => setIsCategoryOpen(false)}
                    >
                      <div className="flex items-center gap-2.5">
                        <IconComp className="w-4 h-4 text-red-600 shrink-0" />
                        <span>{cat.name}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}