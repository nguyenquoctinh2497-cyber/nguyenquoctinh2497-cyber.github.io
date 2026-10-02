import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: {
    default: "Sửa Máy Tính Đà Nẵng Giá Rẻ Uy Tín Số 1 - Tĩnh Computer",
    template: "%s | Tĩnh Computer Đà Nẵng",
  },
  description:
    "Cửa hàng Tĩnh Computer chuyên sửa máy tính, laptop, PC, camera quan sát uy tín giá rẻ tại Đà Nẵng. Sửa chữa tận nơi, lấy ngay, bảo hành chu đáo. Hotline: 0989.068.821",
  keywords: [
    "sửa máy tính đà nẵng",
    "sửa laptop đà nẵng",
    "sửa máy tính tận nhà đà nẵng",
    "sửa pc đà nẵng",
    "màn hình máy tính đà nẵng",
    "mua laptop cũ đà nẵng",
    "tĩnh computer đà nẵng",
  ],
  authors: [{ name: "Tĩnh Computer" }],
  metadataBase: new URL("https://tinhcomputer.vn"),
  openGraph: {
    title: "Sửa Máy Tính Đà Nẵng Giá Rẻ Uy Tín Số 1 - Tĩnh Computer",
    description:
      "Dịch vụ sửa chữa máy tính, laptop, PC tận nơi Đà Nẵng. Mua bán linh kiện, màn hình PC chính hãng giá tốt nhất.",
    url: "https://tinhcomputer.vn",
    siteName: "Tĩnh Computer",
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tinhcomputer.vn",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    "name": "Tĩnh Computer - Sửa Máy Tính Đà Nẵng",
    "image": "https://tinhcomputer.vn/main-banner.jpg",
    "@id": "https://tinhcomputer.vn",
    "url": "https://tinhcomputer.vn",
    "telephone": "0989068821",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Đà Nẵng",
      "addressLocality": "Đà Nẵng",
      "addressRegion": "Đà Nẵng",
      "postalCode": "550000",
      "addressCountry": "VN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.0544,
      "longitude": 108.2022,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "07:30",
      "closes": "21:00",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "128",
    },
  };

  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-gray-100 font-sans text-gray-900">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}