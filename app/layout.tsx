import "./globals.css";
import { ShopProvider } from "./context/ShopContext";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "Tĩnh Computer - Sửa chữa PC, Laptop & Camera Đà Nẵng",
  description: "Chuyên mua bán, sửa chữa PC, Laptop, Camera, Wifi tận nơi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <ShopProvider>
          <CartProvider>{children}</CartProvider>
        </ShopProvider>
      </body>
    </html>
  );
}