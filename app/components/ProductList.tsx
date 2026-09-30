"use client";

import { useState, useEffect } from "react";
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

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  // Hàm tải dữ liệu sản phẩm từ SQLite Database qua API
  const fetchProducts = async () => {
    try {
      // Ưu tiên fetch API SQLite
      const res = await fetch("/api/products", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
          return;
        }
      }
    } catch (error) {
      console.error("Lỗi kết nối SQLite API:", error);
    }

    // Dự phòng: nếu API trống thì đọc từ LocalStorage
    const saved = localStorage.getItem("tinh_computer_products");
    if (saved) {
      try {
        setProducts(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    fetchProducts();

    // Lắng nghe tín hiệu cập nhật khi Admin thêm/xóa sản phẩm
    const handleUpdate = () => fetchProducts();
    window.addEventListener("products_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("products_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between mb-4 border-l-4 border-red-600 pl-3">
          <h2 className="text-base md:text-lg font-bold text-gray-800 uppercase tracking-wide">
            SẢN PHẨM BÁN CHẠY TẠI ĐÀ NẴNG
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between p-3"
            >
              <div>
                <div className="w-full aspect-square overflow-hidden rounded bg-gray-100 mb-2 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 min-h-[32px] mb-1">
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

              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded text-xs transition flex items-center justify-center gap-1.5 shadow-sm">
                <ShoppingCart className="w-3.5 h-3.5" />
                MUA NGAY
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}