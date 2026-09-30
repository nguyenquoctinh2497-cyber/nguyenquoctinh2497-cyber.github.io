"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-2 py-1 shadow-lg">
      <div className="grid grid-cols-4 gap-1 text-center">
        {/* Nút Gọi ngay */}
        <a
          href="tel:0989068821"
          className="flex flex-col items-center justify-center py-1 text-red-600 active:bg-gray-100 rounded"
        >
          <Phone className="w-5 h-5 animate-bounce" />
          <span className="text-[10px] font-bold mt-0.5">0989.068.821</span>
        </a>

        {/* Nút Chat Zalo */}
        <a
          href="https://zalo.me/0989068821"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-blue-600 active:bg-gray-100 rounded"
        >
          <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-[9px] font-bold">
            Zalo
          </div>
          <span className="text-[10px] font-medium text-gray-700 mt-0.5">Chat Zalo</span>
        </a>

        {/* Nút Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-blue-800 active:bg-gray-100 rounded"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-medium text-gray-700 mt-0.5">Chat FB</span>
        </a>

        {/* Nút Chỉ đường */}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-green-600 active:bg-gray-100 rounded"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px] font-medium text-gray-700 mt-0.5">Chỉ đường</span>
        </a>
      </div>
    </div>
  );
}