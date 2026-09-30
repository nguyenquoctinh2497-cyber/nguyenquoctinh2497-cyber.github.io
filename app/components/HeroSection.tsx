"use client";

import { useState } from "react";
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
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const sidebarCategories = [
    {
      name: "Hàng cũ Sale 50%",
      icon: Percent,
      href: "/hang-cu-sale",
      highlight: true,
      megaMenu: {
        groups: [
          {
            title: "Sản phẩm Sale Sốc",
            items: [
              { name: "Laptop cũ Sale 50%", href: "/laptop" },
              { name: "Màn hình cũ giá rẻ", href: "/man-hinh-pc" },
              { name: "PC Gaming cũ giá tốt", href: "/pc-may-tinh-ban" },
              { name: "Linh kiện cũ xả kho", href: "/linh-kien-pc" },
            ],
          },
        ],
      },
    },
    {
      name: "Laptop Mới / Cũ",
      icon: Laptop,
      href: "/laptop",
      megaMenu: {
        groups: [
          {
            title: "Laptop Theo Hãng",
            items: [
              { name: "Laptop Dell", href: "/laptop" },
              { name: "Laptop HP", href: "/laptop" },
              { name: "Laptop Asus", href: "/laptop" },
              { name: "Laptop Lenovo", href: "/laptop" },
              { name: "Laptop Acer", href: "/laptop" },
              { name: "Laptop MSI", href: "/laptop" },
            ],
          },
          {
            title: "Nhu Cầu Sử Dụng",
            items: [
              { name: "Laptop Văn Phòng", href: "/laptop" },
              { name: "Laptop Gaming", href: "/laptop" },
              { name: "Laptop Đồ Họa Kỹ Thuật", href: "/laptop" },
              { name: "MacBook Cũ / Mới", href: "/laptop" },
            ],
          },
        ],
      },
    },
    {
      name: "PC - Máy tính bàn",
      icon: Monitor,
      href: "/pc-may-tinh-ban",
      megaMenu: {
        groups: [
          {
            title: "Máy Tính Bàn Dàn Dựng",
            items: [
              { name: "PC Gaming Cấu Hình Cao", href: "/pc-may-tinh-ban" },
              { name: "PC Văn Phòng - Học Tập", href: "/pc-may-tinh-ban" },
              { name: "PC Đồ Họa - Render 3D", href: "/pc-may-tinh-ban" },
              { name: "PC Giả Lập Nox - Multi App", href: "/pc-may-tinh-ban" },
            ],
          },
          {
            title: "Linh Kiện Build PC",
            items: [
              { name: "Mainboard - Bo mạch chủ", href: "/linh-kien-pc" },
              { name: "CPU - Bộ vi xử lý", href: "/linh-kien-pc" },
              { name: "VGA - Card màn hình", href: "/linh-kien-pc" },
              { name: "RAM & Ổ Cứng SSD", href: "/linh-kien-pc" },
            ],
          },
        ],
      },
    },
    {
      name: "Màn hình PC",
      icon: Monitor,
      href: "/man-hinh-pc",
      megaMenu: {
        groups: [
          {
            title: "Màn hình theo hãng",
            items: [
              { name: "Màn hình Asus", href: "/man-hinh-pc" },
              { name: "Màn hình LG", href: "/man-hinh-pc" },
              { name: "Màn hình Dell", href: "/man-hinh-pc" },
              { name: "Màn hình Samsung", href: "/man-hinh-pc" },
              { name: "Màn hình Acer", href: "/man-hinh-pc" },
              { name: "Màn hình AOC", href: "/man-hinh-pc" },
              { name: "Màn hình HP", href: "/man-hinh-pc" },
              { name: "Màn hình MSI", href: "/man-hinh-pc" },
              { name: "Màn hình Philips", href: "/man-hinh-pc" },
              { name: "Màn hình VSP", href: "/man-hinh-pc" },
              { name: "Màn hình E-dra", href: "/man-hinh-pc" },
              { name: "Màn hình Dahua", href: "/man-hinh-pc" },
              { name: "Màn hình Aiwa", href: "/man-hinh-pc" },
            ],
          },
          {
            title: "Phụ kiện màn hình",
            items: [
              { name: "Giá treo màn hình PC", href: "/man-hinh-pc" },
              { name: "Cáp HDMI / DisplayPort", href: "/man-hinh-pc" },
            ],
          },
        ],
      },
    },
    { name: "Linh kiện PC", icon: Cpu, href: "/linh-kien-pc" },
    {
      name: "Camera quan sát",
      icon: Camera,
      href: "/camera-quan-sat",
      megaMenu: {
        groups: [
          {
            title: "Thương Hiệu Camera",
            items: [
              { name: "Camera Imou Ngoài Trời / Trong Nhà", href: "/camera-quan-sat" },
              { name: "Camera Ezviz Wifi", href: "/camera-quan-sat" },
              { name: "Camera Hikvision / Dahua", href: "/camera-quan-sat" },
              { name: "Trọn bộ Camera Bàn Giao Tận Nơi", href: "/camera-quan-sat" },
            ],
          },
        ],
      },
    },
    { name: "Máy in / Thiết bị Mạng", icon: Printer, href: "/may-in" },
    { name: "Điện thoại / Tablet", icon: Smartphone, href: "/dien-thoai" },
    { name: "Smart Watch", icon: Watch, href: "/smart-watch" },
    { name: "Dịch vụ Sửa chữa PC/Laptop", icon: Wrench, href: "/contact" },
  ];

  return (
    <section className="py-3 bg-gray-100 font-sans">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start relative z-20">
          
          {/* 1. DANH MỤC DỌC BÊN TRÁI (Mega Menu đè nổi) */}
          <div
            className="hidden lg:block lg:col-span-3 bg-white rounded-lg border border-gray-200 shadow-sm relative z-40"
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <ul className="divide-y divide-gray-100 text-xs py-1">
              {sidebarCategories.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <li
                    key={idx}
                    onMouseEnter={() => setHoveredCategory(idx)}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className={`w-full flex items-center justify-between px-3 py-2 hover:bg-red-50 hover:text-red-600 transition font-medium ${
                        item.highlight ? "text-red-600 font-bold" : "text-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <IconComp className="w-4 h-4 shrink-0 text-red-600" />
                        <span className="truncate">{item.name}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    </Link>

                    {/* BẢNG MEGA MENU FLYOUT */}
                    {hoveredCategory === idx && item.megaMenu && (
                      <div className="absolute top-0 left-full ml-1 w-[550px] bg-white border border-gray-200 rounded-lg shadow-2xl p-5 z-50 grid grid-cols-2 gap-6 min-h-[360px] animate-in fade-in duration-100">
                        {item.megaMenu.groups.map((group, gIdx) => (
                          <div key={gIdx} className="space-y-2">
                            <h4 className="font-bold text-xs text-red-600 border-b border-gray-200 pb-1.5 uppercase tracking-wide">
                              {group.title}
                            </h4>
                            <ul className="space-y-1 text-xs">
                              {group.items.map((sub, sIdx) => (
                                <li key={sIdx}>
                                  <Link
                                    href={sub.href}
                                    className="text-gray-600 hover:text-red-600 hover:font-semibold block py-1 transition"
                                  >
                                    - {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 2. BANNER CHÍNH BÊN PHẢI */}
          <div className="col-span-1 lg:col-span-9 flex flex-col gap-2.5 relative z-10">
            <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden relative shadow-sm aspect-[2.15/1]">
              <img
                src="/main-banner.jpg"
                alt="Sắm Đồ Công Nghệ Không Lo Về Giá - Tĩnh Computer"
                className="w-full h-full object-contain object-center"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-2.5 rounded-lg text-center shadow-sm">
                <p className="text-[10px] font-bold uppercase opacity-80 leading-none">ĐIỆN THOẠI CŨ</p>
                <p className="text-xs font-black mt-1">CHỈ TỪ 1 TRIỆU</p>
              </div>
              <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-2.5 rounded-lg text-center shadow-sm">
                <p className="text-[10px] font-bold uppercase opacity-80 leading-none">BUILD PC GAMING</p>
                <p className="text-xs font-black mt-1">TRẢ GÓP 0Đ</p>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-2.5 rounded-lg text-center shadow-sm">
                <p className="text-[10px] font-bold uppercase opacity-80 leading-none">LAPTOP GIÁ RẺ</p>
                <p className="text-xs font-black mt-1">GIÁ TỪ 5 TRIỆU</p>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-2.5 rounded-lg text-center shadow-sm">
                <p className="text-[10px] font-bold uppercase opacity-80 leading-none">SỬA CHỮA TẬN NƠI</p>
                <p className="text-xs font-black mt-1">UY TÍN TẠI ĐÀ NẴNG</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}