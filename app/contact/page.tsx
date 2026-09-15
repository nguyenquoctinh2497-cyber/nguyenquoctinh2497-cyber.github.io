"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useShop } from "@/app/context/ShopContext";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const { shopInfo } = useShop();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-10 flex-1 w-full">
        <h1 className="text-2xl font-black text-red-600 uppercase mb-8 flex items-center gap-2 border-b border-gray-200 pb-3">
          <Phone className="text-red-600" /> LIÊN HỆ {shopInfo.shopName}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cột trái: Thông tin từ Admin */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 mb-6 uppercase border-b border-gray-100 pb-2">
              HỆ THỐNG {shopInfo.shopName}
            </h2>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-3">
                <div className="bg-red-50 p-2.5 rounded-xl text-red-600 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-400 uppercase">Địa chỉ showroom</span>
                  <p className="font-bold text-gray-800 mt-0.5">{shopInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-50 p-2.5 rounded-xl text-red-600 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-400 uppercase">Hotline tư vấn</span>
                  <p className="font-bold text-gray-800 mt-0.5">{shopInfo.hotline}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-50 p-2.5 rounded-xl text-red-600 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-400 uppercase">Email hỗ trợ</span>
                  <p className="font-bold text-gray-800 mt-0.5">{shopInfo.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Form gửi lời nhắn */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-800 mb-6 uppercase border-b border-gray-100 pb-2">
              GỬI LỜI NHẮN
            </h2>

            {submitted && (
              <div className="mb-4 bg-green-50 border border-green-200 text-green-700 p-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
                <CheckCircle size={18} className="text-green-600" /> Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Họ và tên *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Số điện thoại *</label>
                  <input
                    type="text"
                    required
                    placeholder="0912345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Nội dung *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Nhập nội dung cần tư vấn..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send size={16} /> Gửi liên hệ ngay
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}