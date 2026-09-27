import "./globals.css";
import FloatingContact from "./components/FloatingContact";

export const metadata = {
  title: "Tĩnh Computer - Camera, PC, Laptop Chính Hãng",
  description: "Chuyên mua bán, sửa chữa PC, Laptop, lắp đặt Camera Wifi tận nơi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="antialiased bg-gray-100 text-gray-900">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}