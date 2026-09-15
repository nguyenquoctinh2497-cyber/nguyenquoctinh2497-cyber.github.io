"use client";

import React from "react";
import Header from "../components/Header";
import { Cpu, HardDrive, Monitor, Plus, ShoppingCart } from "lucide-react";

export default function BuildPcPage() {
  const parts = [
    { type: "CPU - Bộ vi xử lý", icon: Cpu, selected: "AMD Ryzen 5 5600X", price: 3890000 },
    { type: "Mainboard - Bo mạch chủ", icon: HardDrive, selected: "B550M Steel Legend", price: 2990000 },
    { type: "RAM - Bộ nhớ trong", icon: HardDrive, selected: "16GB (2x8GB) DDR4 3200MHz", price: 1150000 },
    { type: "VGA - Card màn hình", icon: Monitor, selected: "RTX 3060 12GB GDDR6", price: 7490000 },
    { type: "SSD - Ổ cứng", icon: HardDrive, selected: "512GB NVMe M.2", price: 950000 },
  ];

  const totalPrice = parts.reduce((acc, item) => acc + item.price, 0);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 pb-10">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold uppercase text-red-600 mb-6 flex items-center gap-2">
          <Cpu className="text-red-600" /> BUILD PC TẠI TĨNH COMPUTER
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col gap-4">
            {parts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 p-4 rounded-xl flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-50 p-2.5 rounded-lg text-red-600">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500">{item.type}</h3>
                      <p className="text-sm font-bold text-gray-800 mt-0.5">{item.selected}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-red-600">{item.price.toLocaleString("vi-VN")} đ</span>
                    <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition cursor-pointer">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm sticky top-4">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3 mb-4">
                TỔNG CHI PHÍ DỰ KIẾN
              </h2>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500 text-sm">Tổng cộng:</span>
                <span className="text-xl font-extrabold text-red-600">
                  {totalPrice.toLocaleString("vi-VN")} đ
                </span>
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer shadow-md">
                <ShoppingCart size={18} /> Thêm cả bộ vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
