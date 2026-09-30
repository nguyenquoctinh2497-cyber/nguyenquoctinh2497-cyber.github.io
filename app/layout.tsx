import type { Metadata } from "next";
import "./globals.css";
import MobileBottomBar from "./components/MobileBottomBar";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "Sửa Máy Tính Đà Nẵng & Lắp Đặt Camera - Tĩnh Computer",
  description: "Tĩnh Computer chuyên sửa chữa máy tính, laptop, PC gaming, camera quan sát tại Đà Nẵng.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="pb-14 md:pb-0">
        <CartProvider>
          {children}
          <MobileBottomBar />
        </CartProvider>
      </body>
    </html>
  );
}