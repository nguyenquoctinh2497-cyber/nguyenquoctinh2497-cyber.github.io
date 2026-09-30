"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { ShoppingCart, ChevronRight, SlidersHorizontal } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  category: string;
  brand?: string;
  image: string;
}

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

export default function DynamicCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;
  const [products, setProducts] = useState<Product[]>([]);

  const fetchCategoryProducts = async () => {
    let allProducts: Product[] = [];

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

    const filtered = allProducts.filter((p) => {
      const prodCategorySlug = slugifyify(p.category);
      const prodBrandSlug = slugifyify(p.brand || "");
      return (
        prodCategorySlug.includes(categorySlug) ||
        categorySlug.includes(prodCategorySlug) ||
        prodBrandSlug.includes(categorySlug) ||
        categorySlug.includes(prodBrandSlug)
      );
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
  }, [categorySlug]);

  const categoryTitle = categorySlug.replace(/-/g, " ").toUpperCase();

  return (
    <div className="py-4 bg-gray-100 font-sans min-h-screen">
      <div className="container mx-auto px-2">
        
        {/* Breadcrumb duong dan xịn */}
        <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-3 bg-white p-2.5 rounded-lg border border-gray-200">
          <Link href="/" className="hover:text-red-600">Trang chủ</Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-bold uppercase">{categoryTitle}</span>
        </div>

        {/* Thanh Bo Loc */}
        <div className="bg-white p-3 rounded-lg border border-gray-200 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
            <SlidersHorizontal className="w-4 h-4 text-red-600" />
            <span>Bộ lọc danh mục</span>
          </div>
          <select className="border border-gray-300 rounded p-1.5 text-xs text-gray-700 focus:outline-none">
            <option>Mới nhất</option>
            <option>Giá từ thấp đến cao</option>
            <option>Giá từ cao đến thấp</option>
          </select>
        </div>

        {/* Danh sach san pham */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {products.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between p-3 group cursor-pointer"
              >
                <div>
                  <div className="w-full aspect-square overflow-hidden rounded bg-gray-50 mb-2 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
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

                <button className="w-full bg-red-600 group-hover:bg-red-700 text-white font-bold py-1.5 rounded text-xs transition flex items-center justify-center gap-1.5 shadow-sm">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  XEM CHI TIẾT
                </button>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 text-center rounded-lg border border-gray-200 text-gray-500 text-sm">
            Chưa có sản phẩm nào thuộc danh mục này. Anh vào Admin để thêm sản phẩm mới nhé!
          </div>
        )}

        {/* Bai viet SEO va Gioi thieu thuong hieu chuan Truong Giang */}
        <div className="mt-6 bg-white p-5 rounded-lg border border-gray-200 shadow-sm text-xs text-gray-700 space-y-3 leading-relaxed">
          <h2 className="text-base font-bold text-gray-900 border-b pb-2 uppercase">
            Giới thiệu về dịch vụ {categoryTitle} tại Tĩnh Computer Đà Nẵng
          </h2>
          <p>
            <strong>Tĩnh Computer</strong> chuyên cung cấp các dòng sản phẩm{" "}
            <strong>{categoryTitle}</strong> chính hãng, uy tín hàng đầu tại Đà Nẵng.
            Tất cả sản phẩm bán ra đều được kiểm tra kỹ lưỡng, hỗ trợ giao hàng tận nơi
            và bảo hành chu đáo.
          </p>
          <p>
            Quý khách có nhu cầu tư vấn hoặc đặt mua sản phẩm xin vui lòng liên hệ hotline:{" "}
            <strong className="text-red-600">0989.068.821</strong> để nhận báo giá ưu đãi tốt nhất!
          </p>
        </div>

      </div>
    </div>
  );
}