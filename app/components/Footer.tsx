"use client";

import { useShop } from "@/app/context/ShopContext";

export default function Footer() {
  const { shopInfo } = useShop();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-xl font-bold text-white mb-2">{shopInfo.shopName}</h3>
        <p>Địa chỉ: {shopInfo.address}</p>
        <p>Hotline: {shopInfo.hotline}</p>
        <p>Email: {shopInfo.email}</p>
      </div>
    </footer>
  );
}