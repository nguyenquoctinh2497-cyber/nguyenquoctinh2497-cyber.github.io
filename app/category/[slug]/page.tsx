import React from "react";
import Header from "../../components/Header";
import ProductGrid from "../../components/ProductGrid";
import { ShoppingCart } from "lucide-react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, " ");

  // 1. Lấy toàn bộ sản phẩm từ Database
  const allProducts = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  // 2. Lọc sản phẩm thuộc danh mục hiện tại (chuẩn hóa so sánh)
  const categoryProducts = allProducts.filter((p) => {
    if (!p.category) return false;
    const cleanCategory = p.category
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
    const cleanSlug = slug.toLowerCase();

    return cleanCategory === cleanSlug || p.category === slug;
  });

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

        {/* 3. Hiển thị danh sách sản phẩm hoặc thông báo trống */}
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
    </main>
  );
}