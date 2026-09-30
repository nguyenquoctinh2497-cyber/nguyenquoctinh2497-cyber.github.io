"use client";

import { Phone, MessageCircle, Facebook } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-2.5 items-end">
      {/* Nút Gọi Hotline */}
      <a
        href="tel:0989068821"
        className="flex items-center gap-2 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 hover:scale-110 transition duration-300 group"
        title="Gọi hotline tư vấn"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pr-1">
          0989.068.821
        </span>
      </a>

      {/* Nút Chat Zalo */}
      <a
        href="https://zalo.me/0989068821"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition duration-300 group"
        title="Chat Zalo ngay"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pr-1">
          Chat Zalo
        </span>
      </a>

      {/* Nút Facebook / Messenger */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 hover:scale-110 transition duration-300 group"
        title="Fanpage Facebook"
      >
        <Facebook className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pr-1">
          Facebook
        </span>
      </a>
    </div>
  );
}