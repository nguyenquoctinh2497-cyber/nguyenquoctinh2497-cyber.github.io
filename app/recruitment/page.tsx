import React from "react";
import Header from "../components/Header";
import { Briefcase } from "lucide-react";

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 pb-10">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold uppercase text-red-600 mb-6 flex items-center gap-2 border-b border-gray-200 pb-3">
          <Briefcase className="text-red-600" /> THÔNG TIN TUYỂN DỤNG TĨNH COMPUTER
        </h1>
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center text-gray-500 shadow-sm">
          Hiện tại Tĩnh Computer chưa có vị trí tuyển dụng mới. Vui lòng quay lại sau!
        </div>
      </div>
    </main>
  );
}