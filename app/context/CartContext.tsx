"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: string;
  numericPrice?: number;
  quantity: number;
  image?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  totalAmount: number;
  totalCount: number;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  totalAmount: 0,
  totalCount: 0,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Đọc giỏ hàng từ LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("tinh_computer_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Lỗi đọc giỏ hàng:", e);
      }
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("tinh_computer_cart", JSON.stringify(newCart));
  };

  // Hàm hỗ trợ tách lấy số chuẩn từ giá tiền (ví dụ "29.990.000đ" -> 29990000)
  const parsePriceToNumber = (item: Omit<CartItem, "quantity">) => {
    if (typeof item.numericPrice === "number" && !isNaN(item.numericPrice) && item.numericPrice > 0) {
      return item.numericPrice;
    }
    const cleanStr = String(item.price || "").replace(/\D/g, "");
    return parseInt(cleanStr, 10) || 0;
  };

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    const validPrice = parsePriceToNumber(product);
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += 1;
      updated[existingIndex].numericPrice = validPrice;
      saveCart(updated);
    } else {
      saveCart([...cart, { ...product, numericPrice: validPrice, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    saveCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    const updated = cart
      .map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean) as CartItem[];
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  // Tính tổng tiền an toàn 100%, không bao giờ bị NaN
  const totalAmount = cart.reduce((sum, item) => {
    const itemPrice = parsePriceToNumber(item);
    const qty = Number(item.quantity) || 1;
    return sum + itemPrice * qty;
  }, 0);

  const totalCount = cart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalAmount,
        totalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);