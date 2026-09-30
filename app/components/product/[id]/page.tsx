"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  PhoneCall,
  Wrench,
  Gift,
  ChevronRight,
  ShoppingCart,
  FileText,
  CheckCircle2,
  Star,
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
  description?: string;
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
  const [activeTab, setActiveTab] = useState<"description" | "specs">("description");

  useEffect(() => {
    const loadProductData = async () => {
      let foundProduct: Product | null = null;

      // 1. Thử tải từ API SQLite
      try {
        const res = await fetch("/api/products", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            foundProduct = data.find((p: Product) => String(p.id) === String(productId)) || null;
          }
        }
      } catch (e) {
        console.error("Lỗi API SQLite:", e);
      }

      // 2. Dự phòng: Tìm từ LocalStorage
      if (!foundProduct) {
        const saved = localStorage.getItem("tinh_computer_products");
        if (saved) {
          try {
            const list: Product[] = JSON.parse(saved);
            foundProduct = list.find((p) => String(p.id) === String(productId)) || null;
          } catch (e) {
            console.error(e);
          }
        }
      }

      // 3. Dữ liệu fallback mặc định nếu chưa tìm thấy
      if (!foundProduct) {
        foundProduct = {
          id: productId,
          name: "Màn hình máy tính Aiwa 24inch VA FullHD 100Hz - AW-MF2427-V chân V hiện đại",
          price: "1.650.000đ",
          originalPrice: "1.750.000đ",
          category: "Màn hình PC",
          brand: "AIWA",
          image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop",
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
        Đang tải thông tin chi tiết sản phẩm...
      </div>
    );
  }

  const galleryImages = [
    product.image,
    product.image,
  ];

  return (
    <div className="bg-gray-100 py-4 font-sans min-h-screen">
      <div className="container mx-auto px-2 space-y-4">
        
        {/* Breadcrumb điều hướng */}
        <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-white p-2.5 rounded-lg border border-gray-200">
          <Link href="/" className="hover:text-red-600">Trang chủ</Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <Link href={`/category/${product.category}`} className="hover:text-red-600">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </div>

        {/* ================= KHỐI 1: TỔNG QUAN SẢN PHẨM (3 CỘT) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* CỘT 1: HÌNH ẢNH SẢN PHẨM (4 Cột) */}
          <div className="lg:col-span-4 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <div className="w-full aspect-square border rounded-lg overflow-hidden bg-gray-50 mb-3">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="w-full h-full object-contain p-2"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`border-2 rounded overflow-hidden aspect-square bg-gray-50 transition ${
                    selectedImage === img ? "border-red-600" : "border-gray-200"
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* CỘT 2: THÔNG SỐ RÚT GỌN & NÚT MUA (5 Cột) */}
          <div className="lg:col-span-5 bg-white p-4 rounded-lg border border-gray-200 shadow-sm space-y-4">
            <div>
              <h1 className="text-base md:text-lg font-black text-gray-900 uppercase leading-snug">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-500">
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span>(5.0 đánh giá)</span>
                <span>|</span>
                <span>Tình trạng: <strong className="text-emerald-600">Còn hàng</strong></span>
              </div>
            </div>

            <div className="bg-red-50 p-3 rounded-lg border border-red-100 flex items-baseline gap-3">
              <span className="text-2xl font-black text-red-600">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Thông số vắn tắt */}
            <div className="space-y-1.5 border-t border-gray-100 pt-3 text-xs">
              <h3 className="font-bold text-gray-900 uppercase">Thông số kỹ thuật chính:</h3>
              <ul className="text-gray-700 space-y-1 pl-1">
                {product.specs && product.specs.length > 0 ? (
                  product.specs.slice(0, 5).map((spec, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-red-600 font-bold">•</span>
                      <span>{spec}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start gap-1.5"><span className="text-red-600 font-bold">•</span> Thương hiệu: {product.brand || "Chính hãng"}</li>
                    <li className="flex items-start gap-1.5"><span className="text-red-600 font-bold">•</span> Bảo hành: 36 Tháng chính hãng</li>
                  </>
                )}
              </ul>
            </div>

            {/* Ưu đãi khuyến mãi */}
            <div className="border border-dashed border-red-300 bg-red-50/40 p-3 rounded-lg space-y-1 text-xs">
              <p className="font-bold text-red-700 flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-red-600" /> ƯU ĐÃI KHI MUA TẠI TĨNH COMPUTER:
              </p>
              <p className="text-gray-700">✓ Đặt hàng online giảm ngay 10% hoặc tặng Voucher 100K</p>
              <p className="text-gray-700">✓ Miễn phí giao hàng & hỗ trợ cài đặt tận nơi Đà Nẵng</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg text-xs uppercase flex items-center justify-center gap-2 shadow-md transition">
                <ShoppingCart className="w-4 h-4" /> Mua Ngay
              </button>
              <a
                href="tel:0989068821"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg text-xs uppercase flex items-center justify-center gap-2 shadow-md transition"
              >
                <PhoneCall className="w-4 h-4" /> Gọi 0989.068.821
              </a>
            </div>
          </div>

          {/* CỘT 3: CHÍNH SÁCH BẢO HÀNH & GIAO HÀNG (3 Cột) */}
          <div className="lg:col-span-3 bg-white p-3.5 rounded-lg border border-gray-200 shadow-sm space-y-3 text-xs">
            <h3 className="font-bold text-gray-900 border-b pb-2 uppercase tracking-wide">
              Chính Sách Tĩnh Computer
            </h3>

            <div className="flex items-start gap-2.5">
              <Truck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-800">Giao hàng siêu tốc 30 phút</p>
                <p className="text-gray-500 text-[11px]">Nội thành Đà Nẵng</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 border-t pt-2.5">
              <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-800">Hàng bảo hành chính hãng</p>
                <p className="text-gray-500 text-[11px]">Cam kết 1 đổi 1 uy tín</p>
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
                <p className="font-bold text-gray-800">Tư vấn kỹ thuật 24/7</p>
                <p className="text-red-600 font-bold text-sm">0989.068.821</p>
              </div>
            </div>
          </div>

        </div>

        {/* ================= KHỐI 2: MÔ TẢ CHI TIẾT & BẢNG THÔNG SỐ (CHUẨN TRƯỜNG GIANG) ================= */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          
          {/* Thanh Chuyển Tab */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-5 py-3 text-xs font-bold uppercase transition border-b-2 ${
                activeTab === "description"
                  ? "border-red-600 text-red-600 bg-white"
                  : "border-transparent text-gray-600 hover:text-red-600"
              }`}
            >
              Mô Tả Chi Tiết Sản Phẩm
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-5 py-3 text-xs font-bold uppercase transition border-b-2 ${
                activeTab === "specs"
                  ? "border-red-600 text-red-600 bg-white"
                  : "border-transparent text-gray-600 hover:text-red-600"
              }`}
            >
              Bảng Thông Số Kỹ Thuật Đầy Đủ
            </button>
          </div>

          {/* Nội dung Tab */}
          <div className="p-5 text-xs text-gray-700 leading-relaxed space-y-4">
            
            {activeTab === "description" && (
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-gray-900 uppercase">
                  Đánh giá chi tiết sản phẩm {product.name}
                </h2>
                
                <p>
                  <strong>{product.name}</strong> là dòng sản phẩm cao cấp được phân phối chính hãng tại cửa hàng <strong>Tĩnh Computer Đà Nẵng</strong>. Với thiết kế hiện đại, chất lượng hiển thị sắc nét cùng độ bền vượt trội, đây là lựa chọn hoàn hảo cho nhu cầu công việc, học tập và giải trí đỉnh cao.
                </p>

                <div className="w-full max-w-xl mx-auto my-4 border rounded-lg overflow-hidden bg-gray-50 p-2 text-center">
                  <img src={product.image} alt={product.name} className="max-h-80 mx-auto object-contain" />
                  <p className="text-[11px] text-gray-500 mt-2 italic">Hình ảnh thực tế sản phẩm {product.name} tại Tĩnh Computer</p>
                </div>

                <h3 className="text-xs font-bold text-gray-900 uppercase">Những điểm nổi bật của sản phẩm:</h3>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Thiết kế sang trọng:</strong> Viền siêu mỏng, kiểu dáng gọn gàng tiết kiệm diện tích bàn làm việc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Hiệu năng ổn định:</strong> Trang bị công nghệ mới nhất giúp xử lý tác vụ mượt mà không lo giật lag.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Tiết kiệm điện năng:</strong> Đạt tiêu chuẩn tối ưu năng lượng, vận hành êm ái suốt thời gian dài.</span>
                  </li>
                </ul>

                <p className="pt-2 border-t text-gray-600">
                  Quý khách hàng tại Đà Nẵng có nhu cầu trải nghiệm trực tiếp hoặc đặt mua online xin vui lòng gọi ngay hotline <strong className="text-red-600">0989.068.821</strong> để nhận ưu đãi giao hàng miễn phí tận nơi!
                </p>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="space-y-3">
                <h2 className="text-sm font-bold text-gray-900 uppercase mb-3">
                  Bảng chi tiết thông số kỹ thuật
                </h2>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left text-xs border-collapse">
                    <tbody>
                      {product.specs && product.specs.length > 0 ? (
                        product.specs.map((item, index) => {
                          const parts = item.split(":");
                          const label = parts[0] ? parts[0].trim() : "";
                          const value = parts.slice(1).join(":").trim();

                          return (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                              <td className="py-2.5 px-4 font-bold text-gray-800 w-1/3 border-b border-gray-200">
                                {label}
                              </td>
                              <td className="py-2.5 px-4 text-gray-700 border-b border-gray-200">
                                {value || item}
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <>
                          <tr className="bg-gray-50"><td className="py-2.5 px-4 font-bold text-gray-800 w-1/3 border-b">Thương hiệu</td><td className="py-2.5 px-4 text-gray-700 border-b">{product.brand || "Chính hãng"}</td></tr>
                          <tr className="bg-white"><td className="py-2.5 px-4 font-bold text-gray-800 w-1/3 border-b">Bảo hành</td><td className="py-2.5 px-4 text-gray-700 border-b">36 Tháng chính hãng</td></tr>
                          <tr className="bg-gray-50"><td className="py-2.5 px-4 font-bold text-gray-800 w-1/3 border-b">Xuất xứ</td><td className="py-2.5 px-4 text-gray-700 border-b">Chính hãng</td></tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}