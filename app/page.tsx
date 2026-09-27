import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <div>
        <Header />
        <HeroSection />
        <ProductGrid />
      </div>
      <Footer />
    </main>
  );
}