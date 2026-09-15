"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useShop } from "@/app/context/ShopContext";
import { CATEGORIES } from "@/app/config/categories";
import { Upload, Loader2, Image as ImageIcon } from "lucide-react";

export default function AdminPage() {
  const { shopInfo, updateShopInfo } = useShop();
  const [activeTab, setActiveTab] = useState<"info" | "products" | "orders">("info");

  const [formData, setFormData] = useState(shopInfo);
  const [saved, setSaved] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [loadingProd, setLoadingProd] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (shopInfo) setFormData(shopInfo);
  }, [shopInfo.hotline, shopInfo.shopName]);

  const loadProducts = () => {
    setLoadingProd(true);
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setProducts(data);
      })
      .catch((err) => console.error("Lỗi tải sản phẩm:", err))
      .finally(() => setLoadingProd(false));
  };

  useEffect(() => {
    if (activeTab === "products") loadProducts();
    if (activeTab === "orders") {
      fetch("/api/orders")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) setOrders(data);
        })
        .catch((err) => console.error("Lỗi tải đơn hàng:", err));
    }
  }, [activeTab]);

  const [newProd, setNewProd] = useState({
    name: "",
    price: "",
    category: "laptop-moi",
    brand: CATEGORIES[1]?.brands[0] || "ASUS",
    image: "",
  });

  const handleCategoryChange = (catSlug: string) => {
    const selectedCat = CATEGORIES.find((c) => c.slug === catSlug);
    setNewProd({
      ...newProd,
      category: catSlug,
      brand: selectedCat?.brands[0] || "Khác",
    });
  };

  // Upload Ảnh từ máy tính
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.url) {
        setNewProd({ ...newProd, image: json.url });
      }
    } catch (err) {
      console.error("Lỗi upload ảnh:", err);
      alert("Tải ảnh thất bại!");
    } finally {
      setUploading(false);
    }
  };

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    updateShopInfo(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProd.name || !newProd.price) return;

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProd),
      });

      if (res.ok) {
        setNewProd({
          name: "",
          price: "",
          category: "laptop-moi",
          brand: CATEGORIES[1]?.brands[0] || "ASUS",
          image: "",
        });
        loadProducts();
      }
    } catch (err) {
      console.error("Lỗi thêm sản phẩm:", err);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    if (!confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) return;
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" });
      if (res.ok) loadProducts();
    } catch (err) {
      console.error("Lỗi xóa sản phẩm:", err);
    }
  };

  const currentCategoryObj = CATEGORIES.find((c) => c.slug === newProd.category);

  return (
    <main className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-300">
          <h1 className="text-2xl font-black text-red-600 uppercase">
            BẢNG QUẢN TRỊ TĨNH COMPUTER
          </h1>
          <Link href="/" className="text-sm text-blue-600 font-bold hover:underline">
            ← Về trang chủ
          </Link>
        </div>

        {/* Tab Controls */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("info")}
            className={`px-4 py-2 rounded-lg font-bold text-sm cursor-pointer ${
              activeTab === "info" ? "bg-red-600 text-white" : "bg-white text-gray-700"
            }`}
          >
            Thông Tin Shop
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 rounded-lg font-bold text-sm cursor-pointer ${
              activeTab === "products" ? "bg-red-600 text-white" : "bg-white text-gray-700"
            }`}
          >
            Quản Lý Sản Phẩm ({products.length})
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 rounded-lg font-bold text-sm cursor-pointer ${
              activeTab === "orders" ? "bg-red-600 text-white" : "bg-white text-gray-700"
            }`}
          >
            Đơn Hàng ({orders.length})
          </button>
        </div>

        {/* TAB 1: THÔNG TIN SHOP */}
        {activeTab === "info" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            {saved && (
              <div className="mb-4 bg-green-100 text-green-700 p-3 rounded-lg text-sm font-bold">
                ✓ Đã cập nhật thông tin cửa hàng thành công!
              </div>
            )}
            <form onSubmit={handleSaveInfo} className="space-y-4 text-sm">
              <div>
                <label className="block font-bold mb-1">Tên Thương Hiệu Shop</label>
                <input
                  type="text"
                  value={formData.shopName || ""}
                  onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                  className="w-full border p-2.5 rounded-lg outline-none"
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Banner Khuyến Mãi Top</label>
                <input
                  type="text"
                  value={formData.bannerText || ""}
                  onChange={(e) => setFormData({ ...formData, bannerText: e.target.value })}
                  className="w-full border p-2.5 rounded-lg outline-none"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">Hotline</label>
                  <input
                    type="text"
                    value={formData.hotline || ""}
                    onChange={(e) => setFormData({ ...formData, hotline: e.target.value })}
                    className="w-full border p-2.5 rounded-lg outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border p-2.5 rounded-lg outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block font-bold mb-1">Địa Chỉ Showroom</label>
                <input
                  type="text"
                  value={formData.address || ""}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full border p-2.5 rounded-lg outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white font-bold py-2.5 px-6 rounded-lg hover:bg-red-700 transition cursor-pointer"
              >
                Lưu Thay Đổi
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: QUẢN LÝ SẢN PHẨM */}
        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
              <h2 className="font-bold mb-4 text-base">Thêm Sản Phẩm Mới Có Hình Ảnh</h2>
              <form onSubmit={handleAddProduct} className="space-y-4 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <input
                    type="text"
                    placeholder="Tên sản phẩm..."
                    value={newProd.name}
                    onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                    className="border p-2.5 rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Giá (VD: 19.990.000đ)..."
                    value={newProd.price}
                    onChange={(e) => setNewProd({ ...newProd, price: e.target.value })}
                    className="border p-2.5 rounded-lg"
                    required
                  />
                  <select
                    value={newProd.category}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="border p-2.5 rounded-lg"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.slug} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <select
                    value={newProd.brand}
                    onChange={(e) => setNewProd({ ...newProd, brand: e.target.value })}
                    className="border p-2.5 rounded-lg"
                  >
                    {currentCategoryObj?.brands.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Khung Chọn Ảnh từ máy tính */}
                <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-dashed border-gray-300">
                  <label className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2 text-xs transition">
                    {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                    {uploading ? "Đang tải ảnh lên..." : "Chọn ảnh sản phẩm từ máy"}
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>

                  {newProd.image && (
                    <div className="flex items-center gap-2">
                      <img src={newProd.image} alt="Preview" className="w-10 h-10 object-cover rounded-md border" />
                      <span className="text-xs text-green-600 font-bold">✓ Đã tải ảnh xong</span>
                    </div>
                  )}
                </div>

                <button type="submit" className="bg-red-600 text-white font-bold px-6 py-2.5 rounded-lg cursor-pointer">
                  + Thêm Vào Database
                </button>
              </form>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border overflow-x-auto">
              <h2 className="font-bold mb-4 text-base">Danh Sách Sản Phẩm Trong Database</h2>
              {loadingProd ? (
                <div className="text-center py-6 text-gray-500 font-bold">Đang tải...</div>
              ) : (
                <table className="w-full text-left text-sm min-w-[600px]">
                  <thead>
                    <tr className="border-b text-gray-400">
                      <th className="py-2">Hình Ảnh</th>
                      <th className="py-2">Tên Sản Phẩm</th>
                      <th className="py-2">Hãng</th>
                      <th className="py-2">Giá</th>
                      <th className="py-2 text-right">Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {products.map((item) => (
                      <tr key={item.id}>
                        <td className="py-3">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg border" />
                          ) : (
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                              <ImageIcon size={20} />
                            </div>
                          )}
                        </td>
                        <td className="py-3 font-bold">{item.name}</td>
                        <td className="py-3 font-bold text-blue-600">{item.brand}</td>
                        <td className="py-3 text-red-600 font-bold">{item.price}</td>
                        <td className="py-3 text-right">
                          <button
                            onClick={() => handleDeleteProduct(item.id)}
                            className="bg-red-100 text-red-600 px-3 py-1 rounded font-bold hover:bg-red-200 cursor-pointer"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: ĐƠN HÀNG */}
        {activeTab === "orders" && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border overflow-x-auto">
            <h2 className="font-extrabold text-gray-800 mb-4 text-base">Danh Sách Đơn Hàng Mới</h2>
            {orders.length === 0 ? (
              <div className="text-center text-gray-400 py-12">Chưa có đơn hàng mới nào.</div>
            ) : (
              <table className="w-full text-left text-sm min-w-[700px]">
                <thead>
                  <tr className="border-b text-gray-400">
                    <th className="py-2">Mã Đơn</th>
                    <th className="py-2">Khách Hàng</th>
                    <th className="py-2">SĐT & Địa Chỉ</th>
                    <th className="py-2">Thanh Toán</th>
                    <th className="py-2">Tổng Tiền</th>
                    <th className="py-2">Ngày Đặt</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {orders.map((o) => (
                    <tr key={o.id}>
                      <td className="py-3 font-bold text-gray-500">#{o.id}</td>
                      <td className="py-3 font-bold">{o.customerName}</td>
                      <td className="py-3 text-xs text-gray-600">
                        <div className="font-bold text-blue-600">{o.phone}</div>
                        <div>{o.address}</div>
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                          o.paymentMethod === "VIETQR" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                        }`}>
                          {o.paymentMethod}
                        </span>
                      </td>
                      <td className="py-3 text-red-600 font-extrabold">
                        {o.totalAmount?.toLocaleString("vi-VN")}đ
                      </td>
                      <td className="py-3 text-xs text-gray-400">
                        {new Date(o.createdAt).toLocaleDateString("vi-VN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </main>
  );
}