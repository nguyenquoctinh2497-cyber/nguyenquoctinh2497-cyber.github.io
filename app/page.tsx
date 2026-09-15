import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 pb-10">
      <Header />
      <HeroSection />
      <ProductGrid />
    </main>
  );
}