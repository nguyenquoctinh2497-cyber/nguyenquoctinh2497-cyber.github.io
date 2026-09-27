"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp, MapPin } from "lucide-react";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ================= CỘT NÚT LIÊN HỆ DỌC BÊN MÉP PHẢI (RIGHT BAR) ================= */}
      <div className="fixed right-3 bottom-12 z-50 flex flex-col gap-2.5 items-center">
        
        {/* Nút Gọi Điện Hotline (Rung lắc nổi bật) */}
        <a
          href="tel:0989068821"
          title="Gọi Hotline 0989.068.821"
          className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 animate-bounce"
        >
          <Phone size={22} className="fill-current" />
        </a>

        {/* Nút Zalo */}
        <a
          href="https://zalo.me/0989068821"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat Zalo Ngay"
          className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        >
          <span className="text-xs font-black tracking-tighter">Zalo</span>
        </a>

        {/* Nút Messenger */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Nhắn tin Facebook"
          className="w-12 h-12 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        >
          <MessageCircle size={22} />
        </a>

        {/* Nút Map / Địa chỉ */}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Địa chỉ shop"
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        >
          <MapPin size={22} />
        </a>

        {/* Nút Youtube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Kênh Youtube"
          className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 text-lg font-bold"
        >
          ▶
        </a>

        {/* Nút Lên Đầu Trang */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            title="Cuộn Lên Đầu Trang"
            className="w-10 h-10 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg flex items-center justify-center shadow-xl transition mt-2"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>

      {/* ================= BANNER KHUNG LIÊN HỆ GÓC TRÁI MÀN HÌNH (LEFT BAR) ================= */}
      <div className="fixed left-0 bottom-16 z-50 flex flex-col gap-2 font-black text-xs">
        <a
          href="https://zalo.me/0989068821"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 hover:bg-sky-600 text-white py-2.5 px-4 rounded-r-xl shadow-xl flex items-center gap-2 border-y border-r border-sky-300 transition hover:translate-x-1"
        >
          <span className="text-base">💬</span>
          <span>Liên hệ Zalo</span>
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-r-xl shadow-xl flex items-center gap-2 border-y border-r border-blue-400 transition hover:translate-x-1"
        >
          <span className="text-base">🌐</span>
          <span>Facebook</span>
        </a>

        <a
          href="tel:0989068821"
          className="bg-red-600 hover:bg-red-700 text-white py-2.5 px-4 rounded-r-xl shadow-xl flex items-center gap-2 border-y border-r border-red-400 transition hover:translate-x-1"
        >
          <Phone size={16} />
          <span>0989.068.821</span>
        </a>
      </div>
    </>
  );
}