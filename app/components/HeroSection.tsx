v"use client";

import Link from "next/link";
import {
  Laptop,
  Monitor,
  Camera,
  Printer,
  Smartphone,
  Cpu,
  Watch,
  ChevronRight,
  Percent,
  Wrench,
} from "lucide-react";

export default function HeroSection() {
  const sidebarCategories = [
    { name: "Hàng cũ Sale 50%", icon: Percent, href: "/category/hang-cu-sale", highlight: true },
    { name: "Laptop Mới / Cũ", icon: Laptop, href: "/category/laptop" },
    { name: "PC - Máy tính bàn", icon: Monitor, href: "/category/pc-may-tinh-ban" },
    { name: "Màn hình PC", icon: Monitor, href: "/category/man-hinh-pc" },
    { name: "Linh kiện PC", icon: Cpu, href: "/category/linh-kien-pc" },
    { name: "Camera quan sát", icon: Camera, href: "/category/camera-quan-sat" },
    { name: "Máy in / Thiết bị Mạng", icon: Printer, href: "/category/may-in" },
    { name: "Điện thoại / Tablet", icon: Smartphone, href: "/category/dien-thoai" },
    { name: "Smart Watch", icon: Watch, href: "/category/smart-watch" },
    { name: "Dịch vụ Sửa chữa PC/Laptop", icon: Wrench, href: "/contact" },
  ];

  return (
    <section className="py-3 bg-gray-100 font-sans">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
          
          {/* 1. DANH MỤC DỌC BÊN TRÁI (25% màn hình) */}
          <div className="hidden lg:block lg:col-span-3 bg-white rounded border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between">
            <ul className="divide-y divide-gray-100 text-xs py-1">
              {sidebarCategories.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-3 py-2 hover:bg-red-50 hover:text-red-600 transition font-medium ${
                        item.highlight ? "text-red-600 font-bold" : "text-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <IconComp className="w-4 h-4 shrink-0 text-red-600" />
                        <span className="truncate">{item.name}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 2. KHỐI BANNER QUẢNG CÁO ƯU ĐÃI TO RÕ NÉT (75% màn hình) */}
          <div className="col-span-1 lg:col-span-9 flex flex-col gap-3">
            {/* Banner Chính To Đẹp */}
            <div className="w-full bg-gray-900 rounded-lg border border-gray-200 overflow-hidden relative shadow-sm h-[320px] md:h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
                alt="Banner Ưu Đãi Tĩnh Computer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* 4 Nút Dịch Vụ Nổi Nằm Dưới Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-2.5 rounded-lg text-center shadow-sm">
                <p className="text-[10px] font-bold uppercase opacity-80">ĐIỆN THOẠI CŨ</p>
                <p className="text-xs font-black">CHỈ TỪ 1 TRIỆU</p>
              </div>
              <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-2.5 rounded-lg text-center shadow-sm">
                <p className="text-[10px] font-bold uppercase opacity-80">BUILD PC GAMING</p>
                <p className="text-xs font-black">TRẢ GÓP 0Đ</p>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-2.5 rounded-lg text-center shadow-sm">
                <p className="text-[10px] font-bold uppercase opacity-80">LAPTOP GIÁ RẺ</p>
                <p className="text-xs font-black">GIÁ TỪ 5 TRIỆU</p>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-2.5 rounded-lg text-center shadow-sm">
                <p className="text-[10px] font-bold uppercase opacity-80">SỬA CHỮA TẬN NƠI</p>
                <p className="text-xs font-black">UY TÍN TẠI ĐÀ NẴNG</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}