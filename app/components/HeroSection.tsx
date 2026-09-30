"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Laptop, Monitor, Cpu, Camera, Printer, Smartphone, Watch, Tag, Mouse, Wifi } from "lucide-react";

const categories = [
  { name: "Hàng cũ Sale 50%", icon: Tag, href: "/products?cat=hang-cu" },
  { name: "Laptop mới", icon: Laptop, href: "/products?cat=laptop" },
  { name: "Laptop Likenew", icon: Laptop, href: "/products?cat=likenew" },
  { name: "PC Gaming / Văn phòng", icon: Cpu, href: "/products?cat=pc" },
  { name: "Màn hình PC", icon: Monitor, href: "/products?cat=man-hinh" },
  { name: "Điện thoại cũ", icon: Smartphone, href: "/products?cat=dien-thoai" },
  { name: "Camera an ninh", icon: Camera, href: "/products?cat=camera" },
  { name: "Máy in", icon: Printer, href: "/products?cat=may-in" },
  { name: "Thiết bị mạng", icon: Wifi, href: "/products?cat=mang" },
  { name: "Phụ kiện máy tính", icon: Mouse, href: "/products?cat=phu-kien" },
];

const slides = ["/uploads/banner1.jpg", "/uploads/banner2.jpg", "/uploads/banner3.jpg"];

export default function HeroSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-3 py-3 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-3">
      {/* Menu danh mục dọc (chỉ hiện trên desktop) */}
      <aside className="hidden lg:block bg-white rounded-lg border shadow-sm overflow-hidden">
        {categories.map(({ name, icon: Icon, href }) => (
          <a key={name} href={href}
             className="flex items-center gap-3 px-4 py-2.5 text-sm border-b last:border-0 hover:bg-red-50 hover:text-red-600 transition">
            <Icon size={18} className="text-gray-500" /> {name}
          </a>
        ))}
      </aside>

      <div className="space-y-3 min-w-0">
        {/* Slider */}
        <div className="relative aspect-[16/6] rounded-lg overflow-hidden bg-gray-100">
          {slides.map((src, idx) => (
            <Image key={src} src={src} alt={`Banner ${idx + 1}`} fill priority={idx === 0}
              className={`object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`} />
          ))}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-white" : "w-2 bg-white/60"}`} />
            ))}
          </div>
        </div>

        {/* 2 banner ngang bên dưới */}
        <div className="grid grid-cols-2 gap-3">
          {["/uploads/sub1.jpg", "/uploads/sub2.jpg"].map((src) => (
            <div key={src} className="relative aspect-[16/5] rounded-lg overflow-hidden">
              <Image src={src} alt="Khuyến mãi" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}