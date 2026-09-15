import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import { Newspaper } from "lucide-react";

export default function NewsPage() {
  const articles = [
    {
      title: "Đánh giá chi tiết AMD Ryzen 5000 Series: Sự trở lại của vua hiệu năng",
      date: "15/09/2026",
      desc: "Tìm hiểu sức mạnh thực tế của các dòng chip Ryzen 5000 trong tác vụ chơi game và làm việc nặng tại Tĩnh Computer...",
    },
    {
      title: "Top 5 Mẫu Laptop Gaming Đáng Mua Nhất Cho Học Sinh - Sinh Viên",
      date: "12/09/2026",
      desc: "Tổng hợp danh sách các mẫu laptop cấu hình mạnh, giá cả phải chăng phù hợp ngân sách sinh viên...",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 pb-10">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold uppercase text-red-600 mb-6 flex items-center gap-2 border-b border-gray-200 pb-3">
          <Newspaper className="text-red-600" /> TIN TỨC CÔNG NGHỆ TĨNH COMPUTER
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-red-500 transition shadow-sm">
              <span className="text-xs text-red-600 font-bold">{item.date}</span>
              <h2 className="text-base font-bold text-gray-800 mt-2 hover:text-red-600 cursor-pointer transition">
                {item.title}
              </h2>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">{item.desc}</p>
              <Link href="#" className="inline-block mt-4 text-xs font-bold text-red-600 hover:underline">
                Đọc tiếp →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}