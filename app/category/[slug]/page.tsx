import React from "react";
import Header from "../../components/Header";
import ProductGrid from "../../components/ProductGrid";
import Footer from "../../components/Footer";
import { ShoppingCart } from "lucide-react";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Danh sách sản phẩm mẫu chuẩn từng danh mục cho Tĩnh Computer
const CATEGORY_DATA: Record<string, any[]> = {
  "camera-quan-sat": [
    {
      id: 4,
      name: "Camera Wifi Imou Ranger 2 4MP (Chính hãng)",
      price: "790.000đ",
      category: "camera-quan-sat",
      brand: "Imou",
      image: "/uploads/1790305912918-2935-camera-imou-trong-nha-2-ong-kinh-imou-ipc-s2xep-10m0s-e6e362f1-f13f-443c-959c-b078dc5ff0cd.webp",
    },
    {
      id: 5,
      name: "Camera Wifi EZVIZ H3c 2K Siêu Nét Ban Đêm Có Màu",
      price: "990.000đ",
      category: "camera-quan-sat",
      brand: "EZVIZ",
      image: null,
    },
  ],
  "laptop-moi": [
    {
      id: 1,
      name: "Laptop Gaming ASUS ROG Strix G16",
      price: "29.990.000đ",
      category: "laptop-moi",
      brand: "ASUS",
      image: null,
    },
  ],
  "pc-may-tinh-ban": [
    {
      id: 2,
      name: "PC TĨNH Gaming AMD Ryzen 5 / RTX 3060",
      price: "15.490.000đ",
      category: "pc-may-tinh-ban",
      brand: "TĨNH PC",
      image: null,
    },
  ],
  "man-hinh-pc": [
    {
      id: 3,
      name: "Màn hình PC Dell UltraSharp 27 inch 4K",
      price: "11.290.000đ",
      category: "man-hinh-pc",
      brand: "Dell",
      image: null,
    },
  ],
};

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, " ");

  const categoryProducts = CATEGORY_DATA[slug] || [];

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 pb-10">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-bold uppercase text-red-600">
            DANH MỤC: {categoryName}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Hiển thị sản phẩm thuộc danh mục{" "}
            <span className="text-red-600 font-semibold">{slug}</span> tại Tĩnh Computer
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} />
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-500 shadow-sm flex flex-col items-center justify-center">
            <ShoppingCart size={40} className="text-gray-300 mb-3" />
            Chưa có sản phẩm nào trong danh mục{" "}
            <strong className="text-red-600 capitalize">{categoryName}</strong>.
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}