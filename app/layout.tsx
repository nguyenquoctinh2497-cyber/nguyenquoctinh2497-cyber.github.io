import type { Metadata } from "next";
import "./globals.css";
import FloatingContact from "./components/FloatingContact";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Sửa Máy Tính Đà Nẵng & Lắp Đặt Camera Giá Rẻ - Tĩnh Computer",
  description: "Tĩnh Computer chuyên sửa chữa máy tính, laptop, PC gaming, camera quan sát và thi công mạng điện nhẹ uy tín tận nơi tại Đà Nẵng. Hotline: 0989.068.821",
  keywords: [
    "sửa máy tính đà nẵng",
    "lắp đặt camera đà nẵng",
    "sửa laptop đà nẵng",
    "sửa máy tính tận nhà đà nẵng",
    "lắp camera gia đình đà nẵng",
    "tĩnh computer",
    "tinhcomputer.vn",
  ],
  authors: [{ name: "Tĩnh Computer" }],
  openGraph: {
    title: "Sửa Máy Tính Đà Nẵng & Lắp Đặt Camera Giá Rẻ - Tĩnh Computer",
    description: "Dịch vụ sửa máy tính, PC, Laptop và lắp đặt camera an ninh uy tín tận nơi tại Đà Nẵng. Gọi ngay 0989.068.821.",
    url: "https://tinhcomputer.vn",
    siteName: "Tĩnh Computer",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="antialiased bg-gray-100 min-h-screen">
        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  );
}