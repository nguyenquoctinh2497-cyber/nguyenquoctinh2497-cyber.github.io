"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { useShop } from "@/app/context/ShopContext";

export default function FloatingContact() {
  const { shopInfo } = useShop();
  const [hotline, setHotline] = useState(shopInfo?.hotline || "0989068821");

  useEffect(() => {
    if (shopInfo?.hotline) {
      setHotline(shopInfo.hotline);
    }
  }, [shopInfo]);

  const cleanHotline = hotline.replace(/\s+/g, "");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end font-sans">
      {/* 1. Nút Messenger / Facebook cá nhân */}
      <a
        href="https://www.facebook.com/quoc.tinh.766052/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-xl transition-all hover:scale-110 flex items-center justify-center w-12 h-12 group relative"
        title="Chat Facebook"
      >
        <MessageCircle size={24} />
        <span className="absolute right-14 bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
          Facebook Quốc Tĩnh
        </span>
      </a>

      {/* 2. Nút Zalo (Tự động theo SĐT Hotline) */}
      <a
        href={`https://zalo.me/${cleanHotline}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white p-2.5 rounded-full shadow-xl transition-all hover:scale-110 flex items-center justify-center w-12 h-12 group relative"
        title="Chat Zalo"
      >
        <span className="font-black text-xs tracking-tighter uppercase">Zalo</span>
        <span className="absolute right-14 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
          Chat Zalo ({hotline})
        </span>
      </a>

      {/* 3. Nút Hotline Cuộc Gọi */}
      <a
        href={`tel:${cleanHotline}`}
        className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-full shadow-xl transition-all hover:scale-105 flex items-center gap-2 text-sm"
      >
        <Phone size={18} />
        <span>Hotline: {hotline}</span>
      </a>
    </div>
  );
}