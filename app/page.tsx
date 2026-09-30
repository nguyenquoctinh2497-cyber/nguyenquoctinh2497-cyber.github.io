import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoryGrid from "./components/CategoryGrid";
import PromoBanners from "./components/PromoBanners";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      {/* 1. Header & menu */}
      <Header />

      {/* 2. Hero: menu danh mục dọc (desktop) + slider + banner phụ */}
      <HeroSection />

      {/* 3. Lưới icon danh mục: chỉ hiện trên mobile/tablet,
            vì desktop đã có menu dọc trong HeroSection */}
      <div className="lg:hidden">
        <CategoryGrid />
      </div>

      {/* 4. Hàng 4 banner dịch vụ (điện thoại cũ, build PC, laptop cũ, sửa chữa) */}
      <div className="mx-auto max-w-7xl px-3 py-3">
        <PromoBanners />
      </div>

      {/* 5. Danh sách sản phẩm */}
      <ProductGrid />

      {/* 6. Chân trang */}
      <Footer />
    </main>
  );
}