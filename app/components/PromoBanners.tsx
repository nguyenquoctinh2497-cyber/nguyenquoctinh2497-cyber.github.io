"use client";

import React from "react";
import Link from "next/link";
import { Zap, Cpu, Laptop, Wrench, ChevronRight } from "lucide-react";

export default function PromoBanners() {
  // Data cho 4 khối banner với hình ảnh thiết bị sắc nét
  const banners = [
    {
      id: 1,
      title: "ĐIỆN THOẠI CŨ",
      price: "1 TRIỆU",
      desc: "CHỈ TỪ",
      tagDesc: "GIÁ TỐT - CHẤT LƯỢNG",
      icon: Zap,
      gradient: "from-green-950/90 via-green-900/40 to-slate-950/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-300",
      tagColor: "bg-green-600",
      img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=300&auto=format&fit=crop", // Ảnh điện thoại
    },
    {
      id: 2,
      title: "BUILD PC",
      price: "0 Đ",
      desc: "TRẢ GÓP",
      tagDesc: "TRẢ GÓP - GIAO TẬN NƠI",
      icon: Cpu,
      gradient: "from-purple-950/90 via-purple-900/40 to-slate-950/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-300",
      tagColor: "bg-purple-600",
      img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=300&auto=format&fit=crop", // Ảnh PC LED
    },
    {
      id: 3,
      title: "LAPTOP GIÁ RẺ",
      price: "5 TRIỆU",
      desc: "GIÁ TỪ",
      tagDesc: "MÁY ĐẸP - CẤU HÌNH CAO",
      icon: Laptop,
      gradient: "from-blue-950/90 via-blue-900/40 to-slate-950/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-300",
      tagColor: "bg-blue-600",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=300&auto=format&fit=crop", // Ảnh Laptop
    },
    {
      id: 4,
      title: "SỬA CHỮA",
      price: "MÁY TÍNH & ĐT",
      desc: "CHUYÊN NGHIỆP",
      tagDesc: "15 NĂM KINH NGHIỆM",
      icon: Wrench,
      gradient: "from-red-950/90 via-red-900/40 to-slate-950/20",
      borderColor: "border-red-500/30",
      iconColor: "text-red-300",
      tagColor: "bg-red-600",
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=300&auto=format&fit=crop", // Ảnh thợ sửa
    },
  ];

  return (
    <div className="max-w-[1530px] mx-auto px-2 mb-6 mt-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {banners.map((banner) => {
          const Icon = banner.icon;
          return (
            <Link
              key={banner.id}
              href="#"
              className={`relative rounded-xl overflow-hidden group shadow-lg border ${banner.borderColor} hover:scale-[1.03] transition-all duration-300 flex items-center h-28 md:h-32 bg-slate-950`}
            >
              {/* === BƯỚC ĐÃ SỬA: ĐÃ DÁN HÌNH ẢNH NỀN THIẾT BỊ VÀO ĐÂY === */}
              <img
                src={banner.img}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
              />

              {/* Lớp màng màu neon đệm chữ rõ ràng */}
              <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient} -z-10`} />

              {/* Icon Gaming phát sáng góc phải */}
              <Icon
                size={70}
                className={`absolute -right-4 -bottom-4 ${banner.iconColor} opacity-20 group-hover:opacity-40 transition-opacity`}
              />

              {/* Nội dung Banner */}
              <div className="relative z-10 px-4 flex flex-col justify-center gap-1 w-full text-white">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className={`${banner.tagColor} text-white font-black text-[10px] md:text-[11px] px-2 py-0.5 rounded uppercase tracking-wider shadow`}>
                    {banner.title}
                  </span>
                  <span className="text-[10px] font-bold text-gray-300 tracking-wider hidden sm:inline">
                    {banner.tagDesc}
                  </span>
                </div>

                <h2 className="text-sm md:text-base font-medium uppercase leading-tight text-gray-100">
                  {banner.desc} <span className="text-xl md:text-2xl font-black text-amber-300">{banner.price}</span>
                </h2>

                <div className="bg-white hover:bg-amber-100 text-gray-950 font-black text-[11px] px-3 py-1.5 rounded-full inline-flex items-center gap-1 whitespace-nowrap max-w-fit mt-1 transform group-hover:-translate-x-1 transition shadow-md">
                  <span>XEM CHI TIẾT</span>
                  <ChevronRight size={13} className="shrink-0" />
                </div>
              </div>

            </Link>
          );
        })}
      </div>
    </div>
  );
}