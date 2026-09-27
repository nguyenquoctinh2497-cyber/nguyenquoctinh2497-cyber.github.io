import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tĩnh Computer - Camera, PC, Laptop Giá Tốt Đà Nẵng",
  description: "Chuyên cung cấp Laptop, PC Gaming, Camera quan sát và lắp đặt điện nhẹ uy tín tại Đà Nẵng.",
  icons: {
    icon: "/icon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}