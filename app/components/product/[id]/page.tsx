"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  PhoneCall,
  Wrench,
  CheckCircle2,
  Gift,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  category: string;
  brand?: string;
  image: string;
  specs?: string[];
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    // 1. Tải dữ liệu từ SQLite API / LocalStorage
    const loadProductData = async () => {
      let foundProduct: Product | null = null;

      try {
        const res = await fetch("/api/products", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            foundProduct = data.find((p: Product) => p.id === productId) || null;
          }
        }
      } catch (e) {
        console.error("Lỗi tải API:", e);
      }

      if (!foundProduct) {
        const saved = localStorage.getItem("tinh_computer_products");
        if (saved) {
          try {
            const list: Product[] = JSON.parse(saved);
            foundProduct = list.find((p) => p.id === productId) || null;
          } catch (e) {
            console.error(e);
          }
        }
      }

      // Dữ liệu mẫu fallback nếu xem trực tiếp
      if (!foundProduct) {
        foundProduct = {
          id: productId,
          name: "Màn hình máy tính Aiwa 24inch VA FullHD 100Hz - AW-MF2427-V chân V hiện đại",
          price: "1.650.000đ",
          originalPrice: "1.750.000đ",
          category: "Màn hình PC",
          brand: "AIWA",
          image:
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop",
          specs: [
            "Thương hiệu: AIWA",
            "Mã sản phẩm: AW-MF2427-V",
            "Kích thước màn hình: 23.8 inch",
            "Tấm nền: VA (FullHD 1920x1080)",
            "Tần số quét: 100Hz",
            "Thời gian phản hồi: 5ms",
            "Góc nhìn: 178°(H) / 178°(V)",
            "Cổng kết nối: 1x HDMI, 1x VGA",
            "Bảo hành: 36 Tháng chính hãng",
          ],
        };
      }

      setProduct(foundProduct);
      if (foundProduct?.image) {
        setSelectedImage(foundProduct.image);
      }
    };

    loadProductData();
  }, [productId]);

  if (!product) {
    return (
      <div className="py-12 text-center text-gray-500 font-sans">
        Đang tải thông tin sản phẩm...
      </div>
    );
  }

  // Danh sách hình ảnh gallery xem thử
  const galleryImages = [
    product.image,
    "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop",
  ];

  return (
    <div className="bg-gray-100 py-4 font-sans min-h-screen">
      <div className="container mx-auto px-2">
        {/* Breadcrumb đường dẫn */}
        <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-3 bg-white p-2.5 rounded-lg border border-gray-200">
          <Link href="/" className="hover:text-red-600">
            Trang chủ
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <Link href="/category/man-hinh-pc" className="hover:text-red-600">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </div>

        {/* Khối Thông Tin Sản Phẩm Chia 3 Cột Chuẩn Trường Giang */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* CỘT 1: BÊN TRÁI - GALLERY ẢNH SẢN PHẨM (4 Cột) */}
          <div className="lg:col-span-4 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <div className="w-full aspect-square border rounded-lg overflow-hidden bg-gray-50 mb-3">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* Ảnh Thumbnails Nhỏ bên dưới */}
            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`border-2 rounded overflow-hidden aspect-square bg-gray-50 transition ${
                    selectedImage === img ? "border-red-600" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* CỘT 2: Ở GIỮA - CHI TIẾT THÔNG SỐ & GIÁ BÁN (5 Cột) */}
          <div className="lg:col-span-5 bg-white p-4 rounded-lg border border-gray-200 shadow-sm space-y-4">
            <div>
              <h1 className="text-base md:text-lg font-black text-gray-900 uppercase leading-snug">
                {product.name}
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Tình trạng: <span className="text-emerald-600 font-bold">Còn hàng</span> | Thương hiệu:{" "}
                <span className="text-red-600 font-bold">{product.brand || "Chính hãng"}</span>
              </p>
            </div>

            {/* Khối Giá Bán */}
            <div className="bg-red-50 p-3 rounded-lg border border-red-100 flex items-baseline gap-3">
              <span className="text-2xl font-black text-red-600">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              )}
              <span className="ml-auto bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                GIẢM SỐC
              </span>
            </div>

            {/* Thông Số Kỹ Thuật Dạng Bullet Point */}
            <div className="space-y-1.5 border-t border-gray-100 pt-3">
              <h3 className="text-xs font-bold text-gray-900 uppercase">
                Thông số kỹ thuật nổi bật:
              </h3>
              <ul className="text-xs text-gray-700 space-y-1 pl-1">
                {product.specs ? (
                  product.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-red-600 font-bold">•</span>
                      <span>{spec}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start gap-1.5"><span className="text-red-600 font-bold">•</span> Thương hiệu: {product.brand || "Chính hãng"}</li>
                    <li className="flex items-start gap-1.5"><span className="text-red-600 font-bold">•</span> Bảo hành: 24 - 36 Tháng uy tín</li>
                    <li className="flex items-start gap-1.5"><span className="text-red-600 font-bold">•</span> Hỗ trợ: Giao hàng & Lắp đặt tận nơi Đà Nẵng</li>
                  </>
                )}
              </ul>
            </div>

            {/* Khối Khuyến Mãi Ưu Đãi */}
            <div className="border border-dashed border-red-300 bg-red-50/40 p-3 rounded-lg space-y-1.5 text-xs">
              <p className="font-bold text-red-700 flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-red-600" /> ƯU ĐÃI ĐẶC BIỆT KHI MUA TẠI TĨNH COMPUTER:
              </p>
              <p className="text-gray-700">✓ Đặt hàng online giảm ngay 10% hoặc tặng Voucher 100K</p>
              <p className="text-gray-700">✓ Trả góp lãi suất 0% qua thẻ tín dụng thủ tục nhanh chóng</p>
              <p className="text-gray-700">✓ Miễn phí giao hàng & hỗ trợ cài đặt phần mềm tận nhà tại Đà Nẵng</p>
            </div>

            {/* Nút Mua Hàng & Gọi Tư Vấn */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg text-xs uppercase flex items-center justify-center gap-2 shadow-md transition">
                <ShoppingCart className="w-4 h-4" /> Mua Ngay Lấy Liền
              </button>
              <a
                href="tel:0989068821"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg text-xs uppercase flex items-center justify-center gap-2 shadow-md transition"
              >
                <PhoneCall className="w-4 h-4" /> Gọi 0989.068.821
              </a>
            </div>
          </div>

          {/* CỘT 3: BÊN PHẢI - CHÍNH SÁCH VẬN CHUYỂN & CHẤT LƯỢNG (3 Cột) */}
          <div className="lg:col-span-3 bg-white p-3.5 rounded-lg border border-gray-200 shadow-sm space-y-3 text-xs">
            <h3 className="font-bold text-gray-900 border-b pb-2 uppercase tracking-wide">
              Chính Sách Tĩnh Computer
            </h3>

            <div className="flex items-start gap-2.5">
              <Truck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-800">Giao hàng siêu tốc 30 phút</p>
                <p className="text-gray-500 text-[11px]">Áp dụng nội thành Đà Nẵng</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 border-t pt-2.5">
              <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-800">Hàng bảo hành chính hãng</p>
                <p className="text-gray-500 text-[11px]">Cam kết 1 đổi 1 nhanh chóng</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 border-t pt-2.5">
              <CreditCard className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-800">Thanh toán linh hoạt</p>
                <p className="text-gray-500 text-[11px]">Tiền mặt, Chuyển khoản, QRPay</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 border-t pt-2.5">
              <Wrench className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-800">Tư vấn & Hỗ trợ kỹ thuật 24/7</p>
                <p className="text-red-600 font-bold text-sm">0989.068.821</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}