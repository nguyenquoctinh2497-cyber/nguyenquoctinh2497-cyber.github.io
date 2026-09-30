import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoryGrid from "./components/CategoryGrid";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* 1. Thanh Header & Menu Mobile/Desktop */}
      <Header />

      {/* 2. Banner quảng cáo chính */}
      <HeroSection />

      {/* 3. Lưới 10 Icon danh mục tròn (CategoryGrid) */}
      <CategoryGrid />

      {/* 4. Danh sách sản phẩm */}
      <ProductGrid />

      {/* 5. Chân trang */}
      <Footer />
    </main>
  );
}