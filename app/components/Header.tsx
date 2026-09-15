"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useShop } from "@/app/context/ShopContext";
import { useCart } from "@/app/context/CartContext";
import { CATEGORIES } from "@/app/config/categories";
import {
  Menu,
  ChevronRight,
  Cpu,
  Phone,
  Search,
  ShoppingCart,
  ShieldCheck,
  Flame,
} from "lucide-react";

export default function Header() {
  const { shopInfo } = useShop();
  const { totalCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]?.slug || "laptop-moi");

  // Dữ liệu danh mục con & thương hiệu chi tiết tương ứng với 10 danh mục chuẩn
  const subCategoryData: Record<
    string,
    { brands: string[]; subItems: { title: string; items: string[] }[] }
  > = {
    "hang-cu-sale-50": {
      brands: ["ASUS", "Dell", "HP", "Lenovo", "Acer"],
      subItems: [
        {
          title: "Máy Cũ Thanh Lý",
          items: ["Laptop Cũ Đẹp 99%", "PC Văn Phòng Cũ", "Màn Hình Cũ Giá Rẻ", "Linh Kiện Cũ Bảo Hành"],
        },
      ],
    },
    "laptop-moi": {
      brands: ["ASUS", "MSI", "Dell", "HP", "Lenovo", "Acer", "Gigabyte"],
      subItems: [
        {
          title: "Dòng Laptop",
          items: ["Laptop Gaming", "Laptop Văn Phòng", "Laptop Đồ Họa", "Macbook Pro/Air"],
        },
        {
          title: "Theo Cấu Hình",
          items: ["Core i5 / Ryzen 5", "Core i7 / Ryzen 7", "RAM 16GB - SSD 512GB", "RTX 4050 / 4060"],
        },
      ],
    },
    "pc-may-tinh-ban": {
      brands: ["TĨNH PC", "ROG Strix", "Gigabyte", "MSI"],
      subItems: [
        {
          title: "PC Dựng Sẵn",
          items: ["PC Gaming Giá Rẻ", "PC Đồ Họa - Render", "PC Văn Phòng - Công Ty", "PC Giả Lập / Server"],
        },
        {
          title: "Linh Kiện Khuyên Dùng",
          items: ["Nguồn 650W+", "VGA RTX 3060 / 4060", "Vỏ Case Bể Kính", "Tản Nhiệt Nước AIO"],
        },
      ],
    },
    "man-hinh-pc": {
      brands: ["Dell", "ASUS", "LG", "Samsung", "AOC", "ViewSonic"],
      subItems: [
        {
          title: "Kích Thước & Tần Số Quét",
          items: ["Màn 24 inch 75Hz/100Hz", "Màn 27 inch 144Hz/180Hz", "Màn Đồ Họa 4K UltraSharp", "Màn Cong Gaming 32 inch"],
        },
      ],
    },
    "linh-kien-pc": {
      brands: ["Intel", "AMD", "NVIDIA", "Kingston", "Corsair", "Gigabyte", "MSI"],
      subItems: [
        {
          title: "Phần Cứng Máy Tính",
          items: ["CPU Intel & Ryzen", "VGA - Card Màn Hình", "Mainboard - Bo Mạch Chủ", "RAM & Ổ Đĩa SSD NVMe"],
        },
      ],
    },
    "pc-phu-kien-may-tinh": {
      brands: ["Logitech", "Razer", "Dareu", "Fuhlen"],
      subItems: [
        {
          title: "Gear & Phụ Kiện",
          items: ["Bàn Phím Cơ Gaming", "Chuột Không Dây / Gaming", "Tai Nghe Gaming 7.1", "Loa Máy Tính / Webcam"],
        },
      ],
    },
    "macbook-moi": {
      brands: ["Apple"],
      subItems: [
        {
          title: "Dòng Macbook",
          items: ["MacBook Air M1 / M2 / M3", "MacBook Pro 14 / 16 inch", "Mac Mini / iMac", "Phụ Kiện Apple Chính Hãng"],
        },
      ],
    },
    "dien-thoai-tablet": {
      brands: ["Apple", "Samsung", "Xiaomi", "OPPO"],
      subItems: [
        {
          title: "Thiết Bị Di Động",
          items: ["iPhone Mới / Likenew", "Samsung Galaxy Series", "Máy Tính Bảng iPad", "Máy Tính Bảng Android"],
        },
      ],
    },
    "camera-quan-sat": {
      brands: ["Imou", "Ezviz", "Hikvision", "Dahua", "KBVision"],
      subItems: [
        {
          title: "Gói Lắp Đặt Tận Nơi",
          items: ["Camera Wifi Trong Nhà", "Camera Wifi Ngoài Trời 360", "Trọn Bộ Camera Đầu Ghi", "Thi Công Lắp Đặt Tận Nhà"],
        },
      ],
    },
    "may-in-thiet-bi-mang": {
      brands: ["TP-Link", "Ruijie", "Tenda", "Canon", "HP", "Brother"],
      subItems: [
        {
          title: "Thiết Bị Mạng & Điện Nhẹ",
          items: ["Bộ Phát Wifi Mesh Full Nhà", "Bộ Kích Sóng Wifi", "Thi Công Dây Mạng / Tủ Mạng", "Sửa Sự Cố Mạng Tận Nơi"],
        },
      ],
    },
  };

  const selectedCatObj = CATEGORIES.find((c) => c.slug === activeCategory);
  const currentSub = subCategoryData[activeCategory] || {
    brands: selectedCatObj?.brands || ["TĨNH COMPUTER"],
    subItems: [
      {
        title: "Dịch Vụ Uy Tín",
        items: ["Mua Bán Sỉ & Lẻ", "Sửa Chữa Tận Nơi", "Bảo Hành Chu Đáo", "Hỗ Trợ Kỹ Thuật 24/7"],
      },
    ],
  };

  return (
    <header className="bg-red-600 text-white font-sans sticky top-0 z-50 shadow-md">
      {/* Top Banner Text */}
      <div className="bg-red-700 text-center text-xs py-1.5 px-4 font-semibold tracking-wide border-b border-red-800 flex justify-center items-center gap-2">
        <Flame size={14} className="text-yellow-300 animate-pulse" />
        <span className="truncate">{shopInfo.bannerText}</span>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Component Logo Đã Nâng Cấp Chi Tiết */}
        <Logo />

        {/* Ô Tìm Kiếm */}
        <div className="flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="Nhập tên laptop, PC, camera, wifi... cần tìm"
            className="w-full bg-white text-gray-800 text-xs sm:text-sm pl-4 pr-10 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner"
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full transition cursor-pointer">
            <Search size={16} />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
          <a href={`tel:${shopInfo.hotline}`} className="hidden md:flex items-center gap-1.5 hover:text-yellow-300 transition">
            <Phone size={18} />
            <div>
              <span className="block text-[10px] text-red-200">Hotline tư vấn</span>
              <span className="font-bold">{shopInfo.hotline}</span>
            </div>
          </a>

          <Link href="/cart" className="flex items-center gap-2 bg-red-700 hover:bg-red-800 px-3.5 py-2 rounded-xl transition shadow">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Giỏ hàng</span>
            <span className="bg-yellow-400 text-red-900 px-1.5 py-0.5 rounded-full font-black text-[10px]">{totalCount}</span>
          </Link>
        </div>
      </div>

      {/* Navigation Bar & Mega Menu */}
      <div className="bg-red-700 border-t border-red-800">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">
          
          {/* Nút Danh Mục Sản Phẩm (Hover thả xuống) */}
          <div
            className="relative"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <button className="bg-red-800 hover:bg-red-900 text-white font-bold px-4 py-2.5 flex items-center gap-2 rounded-t-lg transition text-xs uppercase tracking-wider cursor-pointer">
              <Menu size={18} />
              <span>DANH MỤC SẢN PHẨM</span>
            </button>

            {/* MEGA MENU DROPDOWN (Phong cách FPT Shop) */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 w-[850px] bg-white text-gray-800 shadow-2xl rounded-b-2xl rounded-tr-2xl border border-gray-200 grid grid-cols-12 z-50 overflow-hidden font-sans">
                
                {/* Cột Trái: Danh Sách Danh Mục Chính */}
                <div className="col-span-4 bg-gray-50 border-r border-gray-100 py-2">
                  {CATEGORIES.map((cat) => (
                    <div
                      key={cat.slug}
                      onMouseEnter={() => setActiveCategory(cat.slug)}
                      className={`px-4 py-2.5 text-xs font-bold flex items-center justify-between cursor-pointer transition ${
                        activeCategory === cat.slug
                          ? "bg-white text-red-600 border-l-4 border-red-600 shadow-sm"
                          : "text-gray-700 hover:bg-gray-100 hover:text-red-600"
                      }`}
                    >
                      <Link href={`/category/${cat.slug}`} className="flex-1">
                        {cat.name}
                      </Link>
                      <ChevronRight size={14} className={activeCategory === cat.slug ? "text-red-600" : "text-gray-400"} />
                    </div>
                  ))}
                </div>

                {/* Cột Phải: Nội Dung Chi Tiết Mega Menu */}
                <div className="col-span-8 p-5 flex flex-col justify-between bg-white">
                  <div>
                    {/* Hãng Nổi Bật */}
                    <div className="mb-4 pb-3 border-b border-gray-100">
                      <span className="text-[11px] font-extrabold text-gray-400 uppercase tracking-wider block mb-2">
                        Thương hiệu nổi bật
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentSub.brands.map((brand) => (
                          <span
                            key={brand}
                            className="bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-700 font-bold text-xs px-3 py-1 rounded-md transition cursor-pointer border border-gray-200"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sub Category Items */}
                    <div className="grid grid-cols-2 gap-6">
                      {currentSub.subItems.map((group, idx) => (
                        <div key={idx}>
                          <h4 className="font-extrabold text-xs text-red-600 uppercase mb-2">
                            {group.title}
                          </h4>
                          <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                            {group.items.map((item) => (
                              <li key={item}>
                                <Link href="#" className="hover:text-red-600 hover:underline transition">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer nhỏ trong Mega Menu */}
                  <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs bg-red-50 p-3 rounded-xl text-red-700 font-bold">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={16} /> Bảo hành tận nơi - Xử lý sự cố siêu tốc
                    </span>
                    <Link href="/contact" className="underline hover:text-red-900">
                      Liên hệ ngay &rarr;
                    </Link>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Menus Phụ Ngang */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wide py-2">
            <Link href="/news" className="hover:text-yellow-300 transition">Tin Tức</Link>
            <Link href="/build-pc" className="hover:text-yellow-300 transition flex items-center gap-1 text-yellow-300">
              <Cpu size={14} /> Build PC
            </Link>
            <Link href="/recruitment" className="hover:text-yellow-300 transition">Tuyển Dụng</Link>
            <Link href="/about" className="hover:text-yellow-300 transition">Giới Thiệu</Link>
            <Link href="/contact" className="hover:text-yellow-300 transition">Liên Hệ</Link>
          </nav>

        </div>
      </div>
    </header>
  );
}