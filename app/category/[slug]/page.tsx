import React from "react";
import Header from "../../components/Header";
import { ShoppingCart } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, " ");

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 pb-10">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-bold uppercase text-red-600">
            DANH MỤC: {categoryName}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Hiển thị sản phẩm thuộc danh mục <span className="text-red-600 font-semibold">{slug}</span> tại Tĩnh Computer
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-500 shadow-sm flex flex-col items-center justify-center">
          <ShoppingCart size={40} className="text-gray-300 mb-3" />
          Chưa có sản phẩm nào trong danh mục <strong className="text-red-600 capitalize">{categoryName}</strong>.
        </div>
      </div>
    </main>
  );
}