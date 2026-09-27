"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { ShoppingCart, CheckCircle2, Image as ImageIcon } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  category?: string;
  brand?: string;
  image?: string | null;
  badge?: string;
}

// Bổ sung Props interface để tiếp nhận products từ trang danh mục (category/slug)
interface ProductGridProps {
  products?: Product[] | any[];
}

export default function ProductGrid({ products: initialProducts }: ProductGridProps) {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>(initialProducts || []);
  const [addedId, setAddedId] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Nếu props thay đổi từ trang cha, cập nhật lại state products
  useEffect(() => {
    if (initialProducts && initialProducts.length > 0) {
      setProducts(initialProducts);
    }
  }, [initialProducts]);

  useEffect(() => {
    // Nếu trang cha đã truyền products vào thì không cần fetch API lại nữa
    if (initialProducts && initialProducts.length > 0) return;

    const defaultProducts: Product[] = [
      { id: 1, name: "Laptop Gaming ASUS ROG Strix G16", price: "29.990.000đ", category: "laptop-moi", brand: "ASUS" },
      { id: 2, name: "PC TĨNH Gaming AMD Ryzen 5 / RTX 3060", price: "15.490.000đ", category: "pc-may-tinh-ban", brand: "TĨNH PC" },
      { id: 3, name: "Màn hình PC Dell UltraSharp 27 inch 4K", price: "11.290.000đ", category: "man-hinh-pc", brand: "Dell" },
      { id: 4, name: "Camera Wifi Imou Ranger 2 4MP", price: "790.000đ", category: "camera-quan-sat", brand: "Imou" },
    ];

    fetch("/api/products")
      .then(async (res) => {
        const contentType = res.headers.get("content-type");
        if (res.ok && contentType && contentType.includes("application/json")) {
          return res.json();
        }
        throw new Error("Response không phải JSON hợp lệ hoặc API bị lỗi");
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else {
          setProducts(defaultProducts);
        }
      })
      .catch((err) => {
        console.warn("API sản phẩm chưa sẵn sàng, hiển thị dữ liệu mặc định:", err.message);
        setProducts(defaultProducts);
      });
  }, [initialProducts]);

  const handleAddToCart = (p: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const numericPrice = parseInt(p.price.replace(/\D/g, "")) || 0;
    addToCart({
      id: p.id,
      name: p.name,
      price: p.price,
      numericPrice: numericPrice,
    });

    setAddedId(p.id);
    setToastMessage(`Đã thêm "${p.name}" vào giỏ!`);

    setTimeout(() => setAddedId(null), 2000);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 relative">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-bold border border-gray-700 animate-bounce">
          <CheckCircle2 size={18} className="text-green-400" />
          <span>{toastMessage}</span>
          <Link href="/cart" className="bg-red-600 text-white px-2.5 py-1 rounded-lg text-[11px] font-black hover:bg-red-700 transition ml-2">
            Xem Giỏ Hàng
          </Link>
        </div>
      )}

      <div className="flex justify-between items-center mb-6 border-b pb-3">
        <h2 className="text-lg font-black text-gray-800 uppercase tracking-tight flex items-center gap-2">
          🔥 SẢN PHẨM MỚI NHẤT
        </h2>
        <Link href="/category/laptop-moi" className="text-xs font-bold text-red-600 hover:underline">
          Xem tất cả &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((p) => {
          const isAdded = addedId === p.id;
          const isHovered = hoveredId === p.id;

          return (
            <div
              key={p.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group relative"
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link href={`/product/${p.id}`} className="block">
                {p.brand && (
                  <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase mb-2 inline-block">
                    {p.brand}
                  </span>
                )}

                {/* Khung Ảnh Thực Tế */}
                <div className="bg-gray-50 h-44 rounded-xl flex items-center justify-center mb-3 group-hover:scale-102 transition border border-gray-100 overflow-hidden relative">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-full h-full object-contain p-2" />
                  ) : (
                    <div className="flex flex-col items-center text-gray-300">
                      <ImageIcon size={32} />
                      <span className="text-[10px] font-bold mt-1">Chưa có ảnh</span>
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-xs sm:text-sm text-gray-800 my-1 line-clamp-2 min-h-[36px] group-hover:text-red-600 transition">
                  {p.name}
                </h3>

                <div className="text-red-600 font-black text-base my-2">
                  {p.price}
                </div>
              </Link>

              <button
                onClick={(e) => handleAddToCart(p, e)}
                className={`w-full font-bold py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-2 cursor-pointer mt-2 shadow-sm ${
                  isAdded
                    ? "bg-green-600 text-white"
                    : "bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200 hover:border-red-600"
                }`}
              >
                {isAdded ? (
                  <>
                    <CheckCircle2 size={16} /> Đã Thêm Vào Giỏ!
                  </>
                ) : (
                  <>
                    <ShoppingCart size={16} /> Thêm vào giỏ hàng
                  </>
                )}
              </button>

              {/* POPUP HOVER - HIỂN THỊ THÔNG TIN CHI TIẾT & KHUYẾN MÃI GIỐNG MẪU */}
              {isHovered && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[102%] mb-2 w-72 bg-white border border-blue-500 rounded-xl shadow-2xl p-3 z-50 text-xs hidden lg:block animate-fade-in pointer-events-none">
                  {/* Tiêu đề góc xanh */}
                  <div className="bg-blue-600 text-white font-bold p-2 rounded-t-lg -mx-3 -mt-3 mb-2 text-[11px] line-clamp-2">
                    {p.name}
                  </div>

                  {/* Khung Khuyến Mãi Màu Cam */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 mb-2">
                    <div className="font-extrabold text-orange-600 text-[11px] mb-1 flex items-center gap-1">
                      🎁 KHUYẾN MÃI - ƯU ĐÃI
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-[10px] font-medium">
                      <li>Cam kết sản phẩm chính hãng 100%</li>
                      <li>Bảo hành chính hãng <strong>24 tháng</strong></li>
                      <li>Giao hàng & lắp đặt tận nơi</li>
                      <li>Nhận hàng kiểm tra bù gấp 10 nếu giả</li>
                      <li>Hotline/Zalo: <strong>0989.068.821</strong></li>
                    </ul>
                  </div>

                  {/* Thông số kỹ thuật nhanh */}
                  <div className="text-gray-600 text-[10px] space-y-1 border-t pt-2 font-medium">
                    <p>• Độ phân giải siêu nét, góc nhìn rộng</p>
                    <p>• Hỗ trợ quan sát ban đêm có màu</p>
                    <p>• Đàm thoại 2 chiều, cảnh báo thông minh</p>
                  </div>

                  {/* Mũi tên chỉ xuống dưới card */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-blue-500"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}