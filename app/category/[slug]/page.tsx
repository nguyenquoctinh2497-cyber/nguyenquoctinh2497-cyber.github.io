"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  category: string;
  brand?: string;
  image: string;
}

// Hàm chuẩn hóa tên danh mục về dạng Slug (Ví dụ: "Màn hình PC" -> "man-hinh-pc")
const slugifyify = (str: string) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/([^0-9a-z-\s])/g, "")
    .replace(/(\s+)/g, "-")
    .replace(/^-+|-+$/g, "");
};

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const currentSlug = resolvedParams.slug;
  const [products, setProducts] = useState<Product[]>([]);

  const fetchCategoryProducts = async () => {
    let allProducts: Product[] = [];

    // 1. Tải từ API SQLite
    try {
      const res = await fetch("/api/products", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          allProducts = data;
        }
      }
    } catch (e) {
      console.error(e);
    }

    // 2. Nếu chưa có API thì lấy từ LocalStorage
    if (allProducts.length === 0) {
      const saved = localStorage.getItem("tinh_computer_products");
      if (saved) {
        try {
          allProducts = JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
    }

    // 3. Lọc sản phẩm phù hợp với Slug của trang
    const filtered = allProducts.filter((p) => {
      const prodCategorySlug = slugifyify(p.category);
      return prodCategorySlug.includes(currentSlug) || currentSlug.includes(prodCategorySlug);
    });

    setProducts(filtered);
  };

  useEffect(() => {
    fetchCategoryProducts();

    window.addEventListener("products_updated", fetchCategoryProducts);
    window.addEventListener("storage", fetchCategoryProducts);

    return () => {
      window.removeEventListener("products_updated", fetchCategoryProducts);
      window.removeEventListener("storage", fetchCategoryProducts);
    };
  }, [currentSlug]);

  return (
    <div className="py-6 bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-2">
        <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <h1 className="text-xl font-black text-red-600 uppercase">
            DANH MỤC: {currentSlug.replace(/-/g, " ")}
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Hiển thị danh sách sản phẩm thuộc danh mục <strong className="text-red-600">{currentSlug}</strong> tại Tĩnh Computer
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {products.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between p-3 group cursor-pointer"
              >
                <div>
                  <div className="w-full aspect-square overflow-hidden rounded bg-gray-100 mb-2 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 min-h-[32px] mb-1 group-hover:text-red-600 transition">
                    {item.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-sm font-black text-red-600">{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-[10px] text-gray-400 line-through">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-red-600 group-hover:bg-red-700 text-white font-bold py-2 rounded text-xs transition flex items-center justify-center gap-1.5 shadow-sm">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  XEM CHI TIẾT
                </button>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 text-center rounded-lg border border-gray-200 text-gray-500 text-sm">
            Chưa có sản phẩm nào thuộc danh mục này. Anh có thể vào Admin để thêm ngay!
          </div>
        )}
      </div>
    </div>
  );
}