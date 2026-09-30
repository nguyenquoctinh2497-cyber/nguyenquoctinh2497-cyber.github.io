"use client";

import { useState, useEffect } from "react";
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
  ChevronLeft,
  Percent,
  Wrench,
} from "lucide-react";

export default function HeroSection() {
  // Danh sách các Banner luân phiên
  const banners = [
    {
      src: "/main-banner.jpg",
      alt: "Sắm Đồ Công Nghệ Không Lo Về Giá",
    },
    {
      src: "/camera-banner.jpg",
      alt: "Camera An Ninh Chính Hãng - Tĩnh Computer",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Tự động chuyển Banner sau mỗi 4 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

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

          {/* 2. KHỐI SLIDER BANNER LUÂN PHIÊN (75% màn hình) */}
          <div className="col-span-1 lg:col-span-9 flex flex-col gap-3 justify-between">
            
            {/* Khung chứa Banner Slider */}
            <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden relative shadow-sm group min-h-[340px] md:min-h-[380px] flex items-center justify-center">
              {/* Ảnh Banner đang active */}
              <img
                src={banners[currentSlide].src}
                alt={banners[currentSlide].alt}
                className="w-full h-full object-contain object-center transition-opacity duration-500"
              />

              {/* Nút sang trái */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
                title="Banner trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Nút sang phải */}
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
                title="Banner tiếp theo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dải chấm tròn chỉ số Slide góc dưới */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "w-7 bg-red-600" : "w-2.5 bg-gray-300/80 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
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