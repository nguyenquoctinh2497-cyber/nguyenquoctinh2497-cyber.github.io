"use client";

import Link from "next/link";
import {
  Laptop,
  Smartphone,
  Monitor,
  Camera,
  Printer,
  Wifi,
  Mouse,
  Cpu,
  RefreshCw,
  Tag,
} from "lucide-react";

const categories = [
  { name: "Laptop mới", icon: Laptop, href: "/category/laptop-moi" },
  { name: "Laptop Likenew", icon: RefreshCw, href: "/category/laptop-likenew" },
  { name: "Điện thoại cũ", icon: Smartphone, href: "/category/dien-thoai-cu" },
  { name: "PC Gaming / Văn Phòng", icon: Cpu, href: "/category/pc-may-tinh-ban" },
  { name: "Màn hình PC", icon: Monitor, href: "/category/man-hinh-pc" },
  { name: "Hàng cũ Sale 50%", icon: Tag, href: "/category/hang-cu-sale" },
  { name: "Camera an ninh", icon: Camera, href: "/category/camera-quan-sat" },
  { name: "Máy in", icon: Printer, href: "/category/may-in" },
  { name: "Thiết bị mạng", icon: Wifi, href: "/category/thiet-bi-mang" },
  { name: "Phụ kiện máy tính", icon: Mouse, href: "/category/phu-kien" },
];

export default function CategoryGrid() {
  return (
    <section className="py-4 bg-white border-b">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-5 gap-2 md:gap-4 text-center">
          {categories.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 mb-1 shadow-sm">
                  <IconComponent className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-[11px] md:text-xs text-gray-700 font-medium line-clamp-2 leading-tight">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}