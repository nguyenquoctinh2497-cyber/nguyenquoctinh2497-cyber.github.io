"use client";

import React from "react";
import Link from "next/link";
import { useShop } from "@/app/context/ShopContext";

export default function HeroSection() {
  const { shopInfo } = useShop();

  return (
    <div className="bg-red-600 text-white rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden font-sans">
      <div className="max-w-xl relative z-10">
        <span className="bg-yellow-400 text-red-900 font-extrabold text-[10px] sm:text-xs px-2.5 py-1 rounded-md uppercase tracking-wider">
          DỊCH VỤ UY TÍN HÀNG ĐẦU
        </span>
        
        <h2 className="text-2xl sm:text-3xl font-black mt-3 mb-2 uppercase tracking-wide">
          {shopInfo.shopName}
        </h2>

        <p className="text-xs sm:text-sm font-normal leading-relaxed text-red-50 mb-6">
          Chuyên mua bán, sửa chữa <strong className="font-extrabold text-white">PC, Laptop</strong>, lắp đặt <strong className="font-extrabold text-white">Camera, Wifi</strong>, thi công <strong className="font-extrabold text-white">hệ thống điện nhẹ</strong> & xử lý sự cố phần cứng, phần mềm <strong className="font-extrabold text-yellow-300">tận nơi</strong>.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="bg-white text-red-600 font-bold px-5 py-2.5 rounded-xl hover:bg-yellow-300 hover:text-red-900 transition text-xs sm:text-sm shadow"
          >
            Liên Hệ Dịch Vụ
          </Link>
          <a
            href={`tel:${(shopInfo.hotline || "0989068821").replace(/\s+/g, "")}`}
            className="bg-red-800 hover:bg-red-900 text-white font-bold px-5 py-2.5 rounded-xl transition text-xs sm:text-sm"
          >
            Hotline: {shopInfo.hotline}
          </a>
        </div>
      </div>
    </div>
  );
}