"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-3 bg-gray-100">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* Banner chính full viền rộng đẹp */}
          <div className="lg:col-span-8 bg-gray-900 rounded-xl overflow-hidden relative shadow-sm min-h-[280px] md:min-h-[350px] flex items-center justify-center">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Banner Khuyến Mãi Tĩnh Computer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cột Khuyến mãi / Tư vấn bên phải */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3">
            <div className="bg-gradient-to-br from-red-600 to-orange-500 text-white p-5 rounded-xl shadow-sm text-center flex-1 flex flex-col justify-center items-center">
              <span className="text-xs uppercase font-bold tracking-widest bg-white/20 px-3 py-1 rounded-full mb-2">
                KHUYẾN MÃI TĨNH COMPUTER
              </span>
              <h3 className="text-xl font-black mb-1">PC SIÊU SALE</h3>
              <p className="text-xs text-white/90 mb-4">
                Build PC Tặng Ngay Combo Phím Chuột Cao Cấp & Cài Đặt Win Miễn Phí Tận Nơi
              </p>
              <a
                href="tel:0989068821"
                className="w-full bg-white text-red-600 font-extrabold py-2.5 rounded-lg text-sm shadow hover:bg-gray-100 transition block"
              >
                GỌI TƯ VẤN NGAY: 0989.068.821
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}