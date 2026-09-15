"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "@/app/context/CartContext";
import { useShop } from "@/app/context/ShopContext";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  CreditCard,
  Truck,
  CheckCircle,
  ArrowLeft,
  Loader2,
  QrCode,
} from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalAmount, clearCart } = useCart();
  const { shopInfo } = useShop();

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"VIETQR" | "COD">("VIETQR");
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "", note: "" });
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Cấu hình tài khoản ngân hàng VietinBank TĨNH COMPUTER
  const BANK_ID = "ICB"; // Mã định danh VietQR của VietinBank (Industrial and Commercial Bank of Vietnam)
  const ACCOUNT_NO = "101882920146";
  const ACCOUNT_NAME = "NGUYEN QUOC TINH";

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Vui lòng nhập đầy đủ Họ tên, SĐT và Địa chỉ giao hàng!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customer.name,
          phone: customer.phone,
          address: customer.address,
          note: customer.note,
          totalAmount: totalAmount,
          paymentMethod: paymentMethod,
          items: cart,
        }),
      });

      if (res.ok) {
        setOrderSuccess(true);
        clearCart();
      } else {
        alert("Lỗi lưu đơn hàng, vui lòng thử lại!");
      }
    } catch (err) {
      console.error("Lỗi gửi đơn hàng:", err);
      alert("Lỗi kết nối khi gửi đơn hàng!");
    } finally {
      setLoading(false);
    }
  };

  // Tự động tạo mã QR VietQR VietinBank chuẩn số tiền
  const qrUrl = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-compact2.png?amount=${totalAmount}&addInfo=THANH TOAN DON HANG ${customer.phone || "TINH COMPUTER"}&accountName=${encodeURIComponent(
    ACCOUNT_NAME
  )}`;

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">
        {/* Header Tiêu Đề */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-gray-500 hover:text-red-600 transition flex items-center gap-1 text-xs font-bold">
              <ArrowLeft size={14} /> Tiếp tục mua sắm
            </Link>
            <span className="text-gray-300">/</span>
            <h1 className="text-lg sm:text-xl font-black text-red-600 uppercase flex items-center gap-2">
              <ShoppingBag size={20} /> GIỎ HÀNG TĨNH COMPUTER ({cart.length})
            </h1>
          </div>

          {cart.length > 0 && !orderSuccess && (
            <button
              onClick={clearCart}
              className="text-xs text-red-600 hover:underline font-bold cursor-pointer"
            >
              Xóa tất cả
            </button>
          )}
        </div>

        {/* THÀNH CÔNG */}
        {orderSuccess ? (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center max-w-lg mx-auto py-12">
            <CheckCircle size={60} className="text-green-500 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl font-black text-gray-800 uppercase mb-2">ĐẶT HÀNG THÀNH CÔNG!</h2>
            <p className="text-sm text-gray-600 mb-6">
              Cảm ơn <strong className="text-gray-800">{customer.name}</strong>. {shopInfo.shopName} đã tiếp nhận đơn hàng và sẽ liên hệ qua SĐT <strong>{customer.phone}</strong> để bàn giao thiết bị tận nơi!
            </p>
            <Link
              href="/"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition text-sm shadow uppercase"
            >
              Về Trang Chủ
            </Link>
          </div>
        ) : cart.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center py-16">
            <ShoppingBag size={50} className="text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 font-bold mb-4">Giỏ hàng của bạn đang trống</p>
            <Link
              href="/"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-xl transition text-xs uppercase shadow"
            >
              Chọn sản phẩm ngay
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Cột 1: Danh sách sản phẩm */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h2 className="font-extrabold text-gray-800 mb-4 uppercase text-xs tracking-wider border-b pb-2">
                  Danh sách sản phẩm đã chọn
                </h2>

                <div className="divide-y">
                  {cart.map((item) => (
                    <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-sm text-gray-800">{item.name}</h3>
                        <p className="text-xs text-red-600 font-extrabold mt-0.5">
                          {item.price} <span className="text-gray-400 font-normal">x {item.quantity}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1 bg-gray-50">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-white rounded transition text-gray-600 cursor-pointer"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-bold text-xs px-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-white rounded transition text-gray-600 cursor-pointer"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 p-1.5 transition cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* KHUNG THANH TOÁN QR & PHƯƠNG THỨC */}
              {showCheckoutForm && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 animate-fadeIn">
                  <h2 className="font-extrabold text-gray-800 mb-4 uppercase text-xs tracking-wider border-b pb-2 flex items-center gap-1.5">
                    <CreditCard size={16} className="text-red-600" /> Chọn phương thức thanh toán
                  </h2>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("VIETQR")}
                      className={`p-3.5 rounded-xl border text-left font-bold text-xs flex items-center gap-2 transition cursor-pointer ${
                        paymentMethod === "VIETQR"
                          ? "border-red-600 bg-red-50 text-red-600"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <QrCode size={18} /> Chuyển Khoản VietQR
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("COD")}
                      className={`p-3.5 rounded-xl border text-left font-bold text-xs flex items-center gap-2 transition cursor-pointer ${
                        paymentMethod === "COD"
                          ? "border-red-600 bg-red-50 text-red-600"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <Truck size={18} /> Trả Tiền Mặt (COD)
                    </button>
                  </div>

                  {/* HIỂN THỊ MÃ QR NGÂN HÀNG VIETINBANK */}
                  {paymentMethod === "VIETQR" && (
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-center">
                      <p className="text-xs font-bold text-gray-700 mb-3">
                        Quét mã QR bằng App Ngân Hàng (Tự động điền số tiền <span className="text-red-600">{totalAmount.toLocaleString("vi-VN")}đ</span>)
                      </p>
                      <img
                        src={qrUrl}
                        alt="Mã QR Thanh Toán Ngân Hàng VietinBank - TĨNH COMPUTER"
                        className="w-56 h-56 mx-auto rounded-xl shadow-md border bg-white p-2"
                      />
                      <div className="mt-3 text-xs text-gray-600 space-y-1 font-semibold">
                        <p>Ngân hàng: <strong className="text-blue-700">VietinBank</strong> | STK: <strong className="text-blue-600 text-sm">{ACCOUNT_NO}</strong></p>
                        <p>Chủ TK: <strong className="text-gray-900">{ACCOUNT_NAME}</strong></p>
                        <p className="text-[11px] text-gray-400 font-normal italic pt-1">
                          Nội dung CK: THANH TOAN DON HANG {customer.phone || "SĐT KHÁCH"}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Cột 2: TỔNG ĐƠN HÀNG & FORM ĐIỀN THÔNG TIN */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 sticky top-24 space-y-4">
                <h2 className="font-extrabold text-gray-800 uppercase text-xs tracking-wider border-b pb-2">
                  TỔNG ĐƠN HÀNG
                </h2>

                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-gray-600">Thành tiền:</span>
                  <span className="text-xl text-red-600 font-black">
                    {totalAmount.toLocaleString("vi-VN")} đ
                  </span>
                </div>

                {!showCheckoutForm ? (
                  <button
                    onClick={() => setShowCheckoutForm(true)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3.5 rounded-xl transition text-sm shadow cursor-pointer uppercase tracking-wider"
                  >
                    TIẾN HÀNH THANH TOÁN
                  </button>
                ) : (
                  <form onSubmit={handleOrderSubmit} className="space-y-3.5 text-xs pt-2 border-t">
                    <h3 className="font-extrabold text-gray-800 uppercase text-xs">
                      Thông tin nhận hàng
                    </h3>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Họ và tên người nhận *</label>
                      <input
                        type="text"
                        required
                        placeholder="VD: Nguyễn Quốc Tĩnh"
                        value={customer.name}
                        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 outline-none font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Số điện thoại liên hệ *</label>
                      <input
                        type="text"
                        required
                        placeholder="0989068821"
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 outline-none font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Địa chỉ giao hàng tận nơi *</label>
                      <textarea
                        rows={2}
                        required
                        placeholder="Số nhà, đường, quận/huyện..."
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 outline-none font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Ghi chú (Không bắt buộc)</label>
                      <input
                        type="text"
                        placeholder="Giao giờ hành chính..."
                        value={customer.note}
                        onChange={(e) => setCustomer({ ...customer, note: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-500 outline-none font-semibold"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3.5 rounded-xl transition text-sm shadow cursor-pointer uppercase flex items-center justify-center gap-2 mt-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" /> Đang gửi đơn hàng...
                        </>
                      ) : (
                        "XÁC NHẬN ĐẶT HÀNG NGAY"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}