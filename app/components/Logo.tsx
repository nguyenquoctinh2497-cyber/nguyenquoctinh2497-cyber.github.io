"use client";

import React from "react";
import Link from "next/link";
import { Monitor, Wrench } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3.5 group cursor-pointer select-none shrink-0">
      {/* Khung Icon Màn Hình + Cờ Lê Kỹ Thuật Size Lớn */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-white text-red-600 rounded-2xl shadow-lg border-2 border-yellow-400 group-hover:scale-105 transition-all duration-300 shrink-0">
        <Monitor size={32} className="stroke-[2.5] text-red-600" />
        
        {/* Biểu tượng Cờ lê sửa chữa góc dưới */}
        <div className="absolute -bottom-1.5 -right-1.5 bg-yellow-400 text-red-950 p-1.5 rounded-lg shadow-md border-2 border-white">
          <Wrench size={15} className="stroke-[3]" />
        </div>
      </div>

      {/* Tên Thương Hiệu Size Siêu To & Cùng Màu Trắng */}
      <div className="flex flex-col justify-center">
        <span className="text-3xl font-black tracking-wider text-white font-sans uppercase leading-none drop-shadow-sm group-hover:text-yellow-300 transition-colors">
          TĨNH
        </span>
        <span className="text-base font-black tracking-[0.22em] text-white font-sans uppercase mt-1 drop-shadow-sm group-hover:text-yellow-300 transition-colors">
          COMPUTER
        </span>
      </div>
    </Link>
  );
}