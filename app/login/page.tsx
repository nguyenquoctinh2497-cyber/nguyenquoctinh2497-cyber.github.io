"use client";

import React from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 pb-10">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-8 shadow-md">
          <h1 className="text-2xl font-bold uppercase text-red-600 text-center mb-6">
            ĐĂNG NHẬP TĨNH COMPUTER
          </h1>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email / Số điện thoại</label>
              <input
                type="text"
                placeholder="Nhập email hoặc SĐT..."
                className="w-full bg-gray-50 text-gray-900 text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Mật khẩu</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-gray-50 text-gray-900 text-sm px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-red-600 rounded" /> Nhớ đăng nhập
              </label>
              <a href="#" className="hover:text-red-600">Quên mật khẩu?</a>
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg transition cursor-pointer shadow-sm"
            >
              Đăng nhập
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-gray-500">
            Chưa có tài khoản?{" "}
            <Link href="/register" className="text-red-600 font-bold hover:underline">
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}