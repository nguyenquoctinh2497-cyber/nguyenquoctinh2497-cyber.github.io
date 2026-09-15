"use client";

import React from "react";
import Header from "../components/Header";
import { Wrench, ShieldCheck, Cpu, MessageSquare } from "lucide-react";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 pb-10">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold uppercase text-red-600 mb-6 flex items-center gap-2">
          <Wrench className="text-red-600" /> HỖ TRỢ KỸ THUẬT & BẢO HÀNH - TĨNH COMPUTER
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 p-5 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="bg-red-50 p-3 rounded-lg text-red-600">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-800">Bảo hành 1 đổi 1</h3>
              <p className="text-xs text-gray-500 mt-0.5">Cam kết chính hãng 100%</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-5 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="bg-red-50 p-3 rounded-lg text-red-600">
              <Cpu size={28} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-800">Vệ sinh PC Miễn phí</h3>
              <p className="text-xs text-gray-500 mt-0.5">Dành cho khách mua tại Tĩnh</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-5 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="bg-red-50 p-3 rounded-lg text-red-600">
              <MessageSquare size={28} />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-800">Tư vấn từ xa 24/7</h3>
              <p className="text-xs text-gray-500 mt-0.5">Hỗ trợ UltraViewer/Zalo</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-3xl mx-auto shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-3 mb-6 text-center">
            PHIẾU ĐĂNG KÝ SỬA CHỮA / BẢO HÀNH
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Tên khách hàng *</label>
                <input
                  type="text"
                  placeholder="Nhập họ tên..."
                  className="w-full bg-gray-50 text-gray-900 text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Số điện thoại *</label>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại..."
                  className="w-full bg-gray-50 text-gray-900 text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Mô tả tình trạng lỗi *</label>
              <textarea
                rows={4}
                placeholder="Mô tả sự cố gặp phải..."
                className="w-full bg-gray-50 text-gray-900 text-sm p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition cursor-pointer shadow-sm"
            >
              <Wrench size={18} /> Gửi yêu cầu hỗ trợ
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}