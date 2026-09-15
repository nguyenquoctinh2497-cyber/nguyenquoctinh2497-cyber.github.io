"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { ShoppingCart, CheckCircle2, Image as ImageIcon } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  brand: string;
  image?: string;
  badge?: string;
}

export default function ProductGrid() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [addedId, setAddedId] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else {
          // Sản phẩm mặc định nếu DB chưa có
          setProducts([
            { id: 1, name: "Laptop Gaming ASUS ROG Strix G16", price: "29.990.000đ", category: "laptop-moi", brand: "ASUS" },
            { id: 2, name: "PC TĨNH Gaming AMD Ryzen 5 / RTX 3060", price: "15.490.000đ", category: "pc-may-tinh-ban", brand: "TĨNH PC" },
            { id: 3, name: "Màn hình PC Dell UltraSharp 27 inch 4K", price: "11.290.000đ", category: "man-hinh-pc", brand: "Dell" },
            { id: 4, name: "Camera Wifi Imou Ranger 2 4MP", price: "790.000đ", category: "camera-quan-sat", brand: "Imou" },
          ]);
        }
      })
      .catch((err) => console.error("Lỗi tải sản phẩm:", err));
  }, []);

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

          return (
            <div
              key={p.id}
              className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between group relative"
            >
              <Link href={`/product/${p.id}`} className="block">
                <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase mb-2 inline-block">
                  {p.brand}
                </span>

                {/* Khung Ảnh Thực Tế */}
                <div className="bg-gray-50 h-44 rounded-xl flex items-center justify-center mb-3 group-hover:scale-102 transition border border-gray-100 overflow-hidden">
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
            </div>
          );
        })}
      </div>
    </section>
  );
}