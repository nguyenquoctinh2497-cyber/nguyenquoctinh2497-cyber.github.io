"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <>
      {/* 1. DẢI NÚT LIÊN HỆ GÓC DƯỚI BÊN TRÁI (Chuẩn style Trường Giang) */}
      <div className="fixed bottom-4 left-4 z-50 hidden sm:flex flex-col gap-1.5 font-sans">
        {/* Nút Liên hệ Zalo */}
        <a
          href="https://zalo.me/0989068821"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-r-full rounded-l-md shadow-md flex items-center gap-1.5 transition hover:scale-105 w-fit"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Liên hệ Zalo</span>
        </a>

        {/* Nút Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-3 py-1.5 rounded-r-full rounded-l-md shadow-md flex items-center gap-1.5 transition hover:scale-105 w-fit"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span>Facebook</span>
        </a>

        {/* Nút Hotline */}
        <a
          href="tel:0989068821"
          className="bg-red-600 hover:bg-red-700 text-white text-xs font-black px-3 py-1.5 rounded-r-full rounded-l-md shadow-md flex items-center gap-1.5 transition hover:scale-105 w-fit animate-pulse"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>0989.068.821</span>
        </a>
      </div>

      {/* 2. DẢI ICON TRÒN DỌC CỐ ĐỊNH GÓC BÊN PHẢI (Chuẩn style Trường Giang) */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {/* Icon Gọi Hotline */}
        <a
          href="tel:0989068821"
          className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition duration-200 group relative"
          title="Gọi Hotline"
        >
          <Phone className="w-5 h-5 animate-bounce" />
          <span className="absolute right-full mr-2 bg-gray-900 text-white text-[11px] font-bold px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
            Hotline: 0989.068.821
          </span>
        </a>

        {/* Icon Zalo */}
        <a
          href="https://zalo.me/0989068821"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:scale-110 transition duration-200 group relative"
          title="Chat Zalo"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="absolute right-full mr-2 bg-gray-900 text-white text-[11px] font-bold px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
            Chat Zalo
          </span>
        </a>

        {/* Icon Messenger / Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition duration-200 group relative"
          title="Messenger"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.304 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26 6.559-6.96 3.125 3.26 5.893-3.26-6.559 6.96z"/>
          </svg>
          <span className="absolute right-full mr-2 bg-gray-900 text-white text-[11px] font-bold px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
            Facebook Messenger
          </span>
        </a>
      </div>
    </>
  );
}