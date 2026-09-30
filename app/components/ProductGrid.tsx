"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const sampleProducts: Product[] = [
  {
    id: "pc-gaming-i5",
    name: "PC Gaming Core i5 12400F / RAM 16GB / RTX 3060 12GB",
    price: 13500000,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "laptop-dell-inspiron",
    name: "Laptop Dell Inspiron 15 3520 i5-1235U / RAM 8GB / SSD 512GB",
    price: 12900000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "camera-imou-2-mat",
    name: "Camera An Ninh Imou 2 Mắt 10MP Ngoài Trời",
    price: 1250000,
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "man-hinh-gaming-24inch",
    name: "Màn Hình Gaming 24 inch 180Hz IPS Cực Nét",
    price: 2850000,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop",
  },
];

interface ProductGridProps {
  products?: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { addToCart } = useCart();
  const displayProducts = products || sampleProducts;

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-3">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4 border-l-4 border-red-600 pl-2">
          SẢN PHẨM BÁN CHẠY TẠI ĐÀ NẴNG
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-gray-200 p-3 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div className="w-full h-36 md:h-48 relative bg-gray-100 rounded mb-2 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                  {product.name}
                </h3>
              </div>

              <div>
                <p className="text-red-600 font-bold text-sm md:text-base mb-3">
                  {product.price.toLocaleString("vi-VN")} đ
                </p>

                <button
                  onClick={() =>
                    addToCart({
                      id: String(product.id),
                      name: product.name,
                      price: Number(product.price),
                      image: product.image,
                    })
                  }
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-xs flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  MUA NGAY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}