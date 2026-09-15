"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ShopInfo {
  shopName: string;
  hotline: string;
  phone: string;
  email: string;
  address: string;
  bannerText: string;
}

const defaultShopInfo: ShopInfo = {
  shopName: "TĨNH COMPUTER",
  hotline: "0989068821",
  phone: "0989068821",
  email: "nguyenquoctinh2497@gmail.com",
  address: "K18 Phan Tứ, phường Ngũ Hành Sơn, Đà Nẵng",
  bannerText: "TĨNH COMPUTER - Chuyên mua bán, sửa chữa PC, Laptop, lắp đặt Camera, Wifi, thi công hệ thống điện nhẹ & xử lý sự cố tận nơi",
};

interface ShopContextType {
  shopInfo: ShopInfo;
  updateShopInfo: (newInfo: ShopInfo) => Promise<void>;
}

const ShopContext = createContext<ShopContextType>({
  shopInfo: defaultShopInfo,
  updateShopInfo: async () => {},
});

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [shopInfo, setShopInfo] = useState<ShopInfo>(defaultShopInfo);

  // Load thông tin trực tiếp từ Database khi mở website
  useEffect(() => {
    fetch("/api/shop")
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) setShopInfo(data);
      })
      .catch((err) => console.error("Lỗi kết nối DB:", err));
  }, []);

  // Lưu thông tin trực tiếp vào Database từ Admin
  const updateShopInfo = async (newInfo: ShopInfo) => {
    setShopInfo(newInfo);
    try {
      await fetch("/api/shop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInfo),
      });
    } catch (err) {
      console.error("Lỗi lưu DB:", err);
    }
  };

  return (
    <ShopContext.Provider value={{ shopInfo, updateShopInfo }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);