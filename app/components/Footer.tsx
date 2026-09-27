"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail, ChevronRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-gray-300 pt-10 pb-6 text-xs md:text-sm mt-12">
      <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* CỘT 1: LOGO & HOTLINE */}
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-md">
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
                <path d="M 50,10 A 40,40 0 1,0 90,50 A 40,40 0 0,0 80,25" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M 32,32 L 68,32 M 50,32 L 50,72" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                TINHCOMPUTER<span className="text-red-600">.VN</span>
              </span>
              <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase mt-0.5">
                CAMERAS • PCS • LAPTOPS
              </span>
            </div>
          </Link>

          <div className="space-y-2 pt-2 font-medium">
            <p className="flex items-center gap-1.5 font-extrabold text-gray-900 text-sm">
              <ChevronRight size={16} className="text-red-600" />
              <span>Hotline:</span>
              <a href="tel:0989068821" className="text-red-600 hover:underline">1900.2007</a>
            </p>
            <p className="flex items-center gap-1.5 font-extrabold text-gray-900 text-sm">
              <ChevronRight size={16} className="text-red-600" />
              <span>Kỹ thuật:</span>
              <a href="tel:0989068821" className="text-red-600 hover:underline">0989.068.821</a>
            </p>
            <p className="flex items-center gap-1.5 font-extrabold text-gray-900 text-sm">
              <ChevronRight size={16} className="text-red-600" />
              <span>Phản ánh / Góp ý / Hợp tác:</span>
            </p>
            <p className="text-red-600 font-extrabold text-sm pl-5">0989.068.821</p>
          </div>

          <div className="pt-2">
            <h4 className="font-black text-xs uppercase tracking-wider text-gray-900 mb-2">
              KẾT NỐI CHÚNG TÔI
            </h4>
            <div className="flex items-center gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow hover:opacity-80 transition">
                f
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow hover:opacity-80 transition">
                ▶
              </a>
              <a href="https://zalo.me/0989068821" target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white font-black text-[10px] px-2 py-1.5 rounded-lg shadow hover:opacity-80 transition">
                Zalo
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow hover:opacity-80 transition">
                🎵
              </a>
            </div>
          </div>
        </div>

        {/* CỘT 2: THÔNG TIN CỬA HÀNG */}
        <div className="space-y-3">
          <h3 className="font-black text-sm uppercase text-gray-900 tracking-wide border-b-2 border-red-600 pb-1 inline-block">
            TĨNH COMPUTER
          </h3>
          <p className="font-bold text-xs text-gray-700">Thông tin chi tiết:</p>

          <ul className="space-y-2.5 font-medium text-xs text-gray-700">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-red-600 shrink-0 mt-0.5" />
              <span>
                <strong>Địa chỉ:</strong> TP. Đà Nẵng (Lắp đặt & Giao hàng tận nơi)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Mở cửa:</strong> Từ 7h30 AM – 20h30 PM (Thứ 2 – Chủ nhật)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={18} className="text-sky-600 shrink-0 mt-0.5" />
              <span>
                <strong>Email:</strong> hotro@tinhcomputer.vn
              </span>
            </li>
            <li className="flex items-center gap-1.5 font-bold text-red-600 pt-1">
              <ChevronRight size={14} />
              <span>Khách hàng doanh nghiệp (B2B)</span>
            </li>
          </ul>
        </div>

        {/* CỘT 3: CÔNG TY & BỘ CÔNG THƯƠNG */}
        <div className="space-y-3">
          <h3 className="font-black text-sm uppercase text-gray-900 tracking-wide border-b-2 border-red-600 pb-1 inline-block">
            CỬA HÀNG TĨNH COMPUTER
          </h3>
          
          <div className="space-y-2 text-xs text-gray-700">
            <p>
              <strong>Mã số thuế:</strong> 0401738845 – Nơi cấp: Sở Kế Hoạch Và Đầu Tư Thành Phố Đà Nẵng
            </p>
            
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white font-extrabold text-[11px] px-3 py-1.5 rounded-md shadow border border-blue-400">
                <ShieldCheck size={18} />
                <span>ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG</span>
              </div>
            </div>
          </div>
        </div>

        {/* CỘT 4: HỖ TRỢ KHÁCH HÀNG */}
        <div className="space-y-3">
          <h3 className="font-black text-sm uppercase text-gray-900 tracking-wide border-b-2 border-red-600 pb-1 inline-block">
            HỖ TRỢ KHÁCH HÀNG
          </h3>

          <ul className="space-y-2 font-medium text-xs text-gray-700">
            {["Mua hàng trực tuyến", "Hướng dẫn thanh toán", "Gửi yêu cầu hỗ trợ", "Chính sách quy định chung", "Chính sách bảo hành", "Chính sách đổi trả lại hàng", "CS bảo mật thông tin khách hàng"].map((item, idx) => (
              <li key={idx}>
                <Link href="#" className="hover:text-red-600 transition flex items-center gap-1">
                  <ChevronRight size={14} className="text-gray-400" />
                  <span>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="max-w-[1440px] mx-auto px-4 mt-8 pt-4 border-t border-gray-300 text-center text-xs font-bold text-gray-600">
        © 2026 TINH COMPUTER CO.,LTD
      </div>
    </footer>
  );
}