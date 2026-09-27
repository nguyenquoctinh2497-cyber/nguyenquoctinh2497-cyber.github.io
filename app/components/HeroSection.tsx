"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Laptop,
  Monitor,
  Camera,
  Cpu,
  Wrench,
  Smartphone,
  ChevronRight,
  ShieldCheck,
  Percent,
  HardDrive,
  Printer,
  Watch,
  Gift,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  // Slide Banner chính chứa hình ảnh PC Gaming Đèn LED, Camera Imou nét căng & Laptop Gaming
  const slides = [
    {
      id: 1,
      title: "RINH DEAL ĐỈNH - CHIẾN GAME HAY 🥮",
      subtitle: "TĨNH COMPUTER - TRUNG THU VUI SALE",
      desc: "Build PC Gaming Đèn LED, Màn hình 144Hz & Laptop Đồ Họa giảm tới 30% + Tặng Voucher 200k",
      img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
      badge: "SỞ HỮU NGAY",
      tag: "VUI TRUNG THU 🌕",
    },
    {
      id: 2,
      title: "CAMERA AN NINH IMOU 2 MẮT 10MP GIẢM 20%",
      subtitle: "LẮP ĐẶT TẬN NƠI - BẢO HÀNH 24 THÁNG CHÍNH HÃNG",
      desc: "Quan sát 2 mắt 360 độ, xoay góc rộng, đàm thoại 2 chiều, quay đêm có màu nét căng",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
      badge: "XEM CHI TIẾT",
      tag: "HOT SALE 🏮",
    },
    {
      id: 3,
      title: "LAPTOP GAMING & VĂN PHÒNG CHÍNH HÃNG",
      subtitle: "CẤU HÌNH MẠNH MẼ - GIÁ TỐT NHẤT THỊ TRƯỜNG",
      desc: "Thiết kế mỏng nhẹ cao cấp, màn hình OLED sắc nét đáp ứng mọi nhu cầu",
      img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&q=80",
      badge: "MUA NGAY",
      tag: "LAPTOP MOI ⚡",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const categories = [
    { name: "Hàng Cũ Sale 50%", icon: Percent, href: "/category/sale", highlight: true },
    { name: "Laptop Mới / Cũ", icon: Laptop, href: "/category/laptop-moi" },
    { name: "PC - Máy Tính Bàn", icon: Cpu, href: "/category/pc-may-tinh-ban" },
    { name: "Màn Hình PC", icon: Monitor, href: "/category/man-hinh-pc" },
    { name: "Camera Quan Sát", icon: Camera, href: "/category/camera-quan-sat" },
    { name: "Linh Kiện & Phụ Kiện PC", icon: HardDrive, href: "/category/linh-kien" },
    { name: "Điện Thoại / Tablet", icon: Smartphone, href: "/category/dien-thoai" },
    { name: "Smart Watch", icon: Watch, href: "/category/smart-watch" },
    { name: "Máy In / Thiết Bị Mạng", icon: Printer, href: "/category/may-in" },
    { name: "Dịch Vụ Sửa Chữa PC/Laptop", icon: Wrench, href: "/contact" },
  ];

  return (
    <div className="relative max-w-[1530px] mx-auto px-2">
      
      {/* 1. BANNER DỌC 2 BÊN LỀ (CỰC TO & HIỂN THỊ HÌNH ẢNH SẢN PHẨM SẮC NÉT) */}
      {/* Banner Bên Trái - Laptop Sale */}
      <div className="hidden xl:flex absolute -left-36 top-2 w-32 h-[570px] bg-sky-500 rounded-2xl p-2.5 text-white text-center shadow-xl border-2 border-sky-300/60 z-10 flex-col justify-between overflow-hidden">
        <div>
          <div className="font-black text-xs uppercase tracking-tight leading-tight mt-1 text-white">
            LAPTOP <br />
            <span className="text-amber-300 text-base font-black">SIÊU SALE</span>
          </div>
          <div className="text-xs bg-red-600 text-white font-black px-1 py-1 rounded my-2 shadow">
            LÊN TỚI 50%
          </div>
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80"
            alt="Laptop Sale"
            className="w-full h-44 object-cover rounded-xl my-2 border border-white/40 shadow-md"
          />
        </div>
        <div className="pb-3">
          <span className="text-[10px] font-black bg-white/20 px-1 py-1.5 rounded text-sky-100 block uppercase">
            HỖ TRỢ TRẢ GÓP 0%
          </span>
        </div>
      </div>

      {/* Banner Bên Phải - PC Gaming Sale */}
      <div className="hidden xl:flex absolute -right-36 top-2 w-32 h-[570px] bg-gradient-to-b from-gray-100 via-sky-100 to-white rounded-2xl p-2.5 text-gray-900 text-center shadow-xl border-2 border-sky-200/80 z-10 flex-col justify-between overflow-hidden">
        <div>
          <div className="font-black text-base uppercase tracking-tight leading-tight mt-1 text-sky-600">
            PC <br />
            <span className="text-sky-500 text-lg font-black">SIÊU SALE</span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80"
            alt="PC Gaming LED"
            className="w-full h-48 object-cover rounded-xl my-2 border border-sky-300 shadow-md"
          />
        </div>
        <div className="pb-3">
          <span className="text-[10px] font-black bg-red-600 text-white px-1 py-1.5 rounded shadow block uppercase">
            TĨNH COMPUTER
          </span>
        </div>
      </div>

      {/* 2. BỐ CỤC CHÍNH 3 CỘT */}
      <section className="py-3">
        {/* THANH THÔNG BÁO TRUNG THU */}
        <div className="bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-white rounded-xl p-2.5 mb-3 shadow-md flex items-center justify-between px-6 border border-amber-300/40">
          <div className="flex items-center gap-2 font-black text-xs md:text-sm uppercase tracking-wide">
            <span className="text-lg">🏮</span>
            <span>ƯU ĐÃI RƯỚC ĐÈN - TRUNG THU TRỌN VẸN CÙNG TĨNH COMPUTER 🥮</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-bold bg-white/20 px-3 py-1 rounded-full border border-white/30">
            <Sparkles size={14} className="text-amber-200" />
            <span>Mã: TRUNGTHU2026 (Giảm 200k)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch">
          
          {/* CỘT 1: DANH MỤC SẢN PHẨM */}
          <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hidden lg:flex flex-col justify-between">
            <div className="bg-red-600 text-white font-black text-sm uppercase px-4 py-3.5 flex items-center gap-2">
              <span className="text-base">☰</span>
              <span>DANH MỤC SẢN PHẨM</span>
            </div>

            <ul className="divide-y divide-gray-100 text-xs sm:text-sm font-bold text-gray-800 flex-1">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <li key={idx}>
                    <Link
                      href={cat.href}
                      className={`flex items-center justify-between px-4 py-2 hover:bg-red-50 hover:text-red-600 transition group ${
                        cat.highlight ? "text-red-600 font-extrabold bg-red-50/50" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          size={18}
                          className={`${
                            cat.highlight ? "text-red-600" : "text-gray-500 group-hover:text-red-600"
                          } shrink-0`}
                        />
                        <span className="whitespace-nowrap">{cat.name}</span>
                      </div>
                      <ChevronRight size={16} className="text-gray-400 group-hover:text-red-600 shrink-0" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="bg-gray-50 p-3 border-t border-gray-100 text-xs text-gray-600 flex items-center gap-2 font-bold">
              <ShieldCheck size={18} className="text-green-600 shrink-0" />
              <span>Cam kết hàng chính hãng 100%</span>
            </div>
          </div>

          {/* CỘT 2: SLIDE HIỂN THỊ THIẾT BỊ CÔNG NGHỆ CHÍNH */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <div className="relative rounded-xl overflow-hidden h-[340px] md:h-[380px] shadow-md group border border-amber-500/20 bg-slate-950">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 text-white p-6 md:p-8 flex flex-col justify-between transition-opacity duration-700 ${
                    index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  {/* Ảnh thiết bị công nghệ high-tech */}
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover -z-10 opacity-80 group-hover:scale-105 transition duration-700"
                  />

                  {/* Lớp màng mỏng che phủ giúp hiển thị chữ rõ nét */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 -z-10" />

                  <div className="absolute top-3 right-6 text-3xl opacity-90 animate-pulse">🌕</div>
                  <div className="absolute top-3 left-1/2 text-2xl opacity-80">🏮</div>

                  <div>
                    <span className="bg-amber-400 text-gray-950 font-black text-xs px-3 py-1 rounded uppercase tracking-wider mb-2 inline-block shadow">
                      {slide.tag}
                    </span>
                    <h3 className="text-amber-300 font-extrabold text-xs md:text-sm uppercase tracking-widest mt-1">
                      {slide.subtitle}
                    </h3>
                    <h2 className="text-2xl md:text-3xl font-black uppercase mt-1 leading-tight text-white drop-shadow-md">
                      {slide.title}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-200 mt-2 line-clamp-2 font-medium">
                      {slide.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <Link
                      href="/category/camera-quan-sat"
                      className="bg-red-600 hover:bg-red-700 text-white text-xs font-black px-6 py-2.5 rounded shadow transition flex items-center gap-1.5 border border-amber-300/40"
                    >
                      <Gift size={16} />
                      <span>{slide.badge}</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-3 right-4 z-20 flex gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide ? "w-6 bg-amber-400" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* BAR SẢN PHẨM PHỤ */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-xl p-3 text-white flex items-center justify-between shadow-sm border border-blue-400/30">
              <div className="flex items-center gap-3">
                <span className="bg-blue-500 text-white font-black text-[10px] px-2.5 py-1 rounded-full uppercase">
                  GAMING & SECURITY
                </span>
                <span className="font-extrabold text-xs md:text-sm text-blue-100">
                  GAMING LAPTOPS - SECURITY CAMERA LẮP TẬN NƠI
                </span>
              </div>
            </div>
          </div>

          {/* CỘT 3: BANNER QUẢNG CÁO PHẢI */}
          <div className="lg:col-span-3 hidden lg:flex flex-col gap-2.5">
            <div className="bg-gradient-to-b from-amber-500 via-red-600 to-red-700 rounded-xl p-4 text-white shadow text-center flex-1 flex flex-col justify-between border border-amber-300/40 relative overflow-hidden">
              <div className="absolute -top-2 -right-2 text-4xl opacity-20">🥮</div>
              <div>
                <span className="bg-white/20 text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  KHUYẾN MÃI TĨNH COMPUTER
                </span>
                <h3 className="font-black text-xl uppercase mt-3 text-amber-200">PC SIÊU SALE</h3>
                <p className="text-xs text-amber-100 mt-2 leading-relaxed font-medium">
                  Build PC Tặng Ngay Combo Phím Chuột Cao Cấp & Cài Đặt Win Miễn Phí Tận Nơi
                </p>
              </div>

              <div className="my-4 py-3 bg-black/25 rounded-lg backdrop-blur-sm border border-white/20">
                <span className="text-xs font-bold block text-amber-200">HOTLINE TƯ VẤN TRỰC TIẾP</span>
                <span className="text-xl font-black text-white mt-0.5 block">0989.068.821</span>
              </div>

              <a
                href="tel:0989068821"
                className="bg-white text-red-600 hover:bg-amber-100 font-black text-sm py-2.5 rounded transition block shadow"
              >
                GỌI TƯ VẤN NGAY
              </a>
            </div>
          </div>

        </div>

        {/* 3. BỘ 4 BANNER SẢN PHẨM PHỤ BÊN DƯỚI */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3.5">
          <div className="bg-gradient-to-r from-emerald-800 to-slate-900 rounded-xl p-3 text-white flex items-center justify-between shadow-sm border border-emerald-500/30 hover:scale-[1.02] transition">
            <div>
              <span className="text-[10px] bg-emerald-500 text-white font-extrabold px-1.5 py-0.5 rounded">ĐIỆN THOẠI CŨ</span>
              <h4 className="font-black text-xs md:text-sm mt-1">CHỈ TỪ 1 TRIỆU</h4>
            </div>
            <Smartphone size={28} className="text-emerald-300 opacity-80" />
          </div>

          <div className="bg-gradient-to-r from-purple-900 to-slate-900 rounded-xl p-3 text-white flex items-center justify-between shadow-sm border border-purple-500/30 hover:scale-[1.02] transition">
            <div>
              <span className="text-[10px] bg-purple-500 text-white font-extrabold px-1.5 py-0.5 rounded">BUILD PC GAMING</span>
              <h4 className="font-black text-xs md:text-sm mt-1">TRẢ GÓP 0Đ</h4>
            </div>
            <Cpu size={28} className="text-purple-300 opacity-80" />
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-xl p-3 text-white flex items-center justify-between shadow-sm border border-blue-500/30 hover:scale-[1.02] transition">
            <div>
              <span className="text-[10px] bg-blue-500 text-white font-extrabold px-1.5 py-0.5 rounded">LAPTOP GIÁ RẺ</span>
              <h4 className="font-black text-xs md:text-sm mt-1">GIÁ TỪ 5 TRIỆU</h4>
            </div>
            <Laptop size={28} className="text-blue-300 opacity-80" />
          </div>

          <div className="bg-gradient-to-r from-red-900 to-slate-900 rounded-xl p-3 text-white flex items-center justify-between shadow-sm border border-red-500/30 hover:scale-[1.02] transition">
            <div>
              <span className="text-[10px] bg-red-500 text-white font-extrabold px-1.5 py-0.5 rounded">SỬA CHỮA TẬN NƠI</span>
              <h4 className="font-black text-xs md:text-sm mt-1">UY TÍN TẠI SHOP</h4>
            </div>
            <Wrench size={28} className="text-red-300 opacity-80" />
          </div>
        </div>

      </section>
    </div>
  );
}