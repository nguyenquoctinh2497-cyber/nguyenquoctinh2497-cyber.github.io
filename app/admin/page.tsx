"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Image as ImageIcon,
  Settings,
  Plus,
  Trash2,
  Edit,
  Search,
  Upload,
  ArrowUpRight,
  TrendingUp,
  Users,
  DollarSign,
  LogOut,
  Home,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  category: string;
  brand: string;
  image: string;
  inStock: boolean;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "products" | "orders">("products");
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Form state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [category, setCategory] = useState("Laptop Mới / Cũ");
  const [brand, setBrand] = useState("ASUS");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  // Load products from localStorage or initial list
  useEffect(() => {
    const saved = localStorage.getItem("tinh_computer_products");
    if (saved) {
      try {
        setProducts(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      const defaultProducts: Product[] = [
        {
          id: "1",
          name: "PC Gaming Core i5 12400F / RAM 16GB / RTX 3060 12GB",
          price: "13.500.000 đ",
          originalPrice: "15.000.000 đ",
          category: "PC - Máy tính bàn",
          brand: "Custom PC",
          image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&auto=format&fit=crop",
          inStock: true,
        },
        {
          id: "2",
          name: "Laptop Dell Inspiron 15 3520 i5-1235U / RAM 8GB / SSD 512GB",
          price: "12.900.000 đ",
          originalPrice: "14.200.000 đ",
          category: "Laptop Mới / Cũ",
          brand: "Dell",
          image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop",
          inStock: true,
        },
        {
          id: "3",
          name: "Camera An Ninh Imou 2 Mắt 10MP Ngoài Trời",
          price: "1.250.000 đ",
          originalPrice: "1.600.000 đ",
          category: "Camera quan sát",
          brand: "Imou",
          image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&auto=format&fit=crop",
          inStock: true,
        },
      ];
      setProducts(defaultProducts);
      localStorage.setItem("tinh_computer_products", JSON.stringify(defaultProducts));
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) return;

    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      price,
      originalPrice: originalPrice || undefined,
      category,
      brand,
      image: imagePreview || "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500&auto=format&fit=crop",
      inStock: true,
    };

    const updated = [newProduct, ...products];
    setProducts(updated);
    localStorage.setItem("tinh_computer_products", JSON.stringify(updated));

    // Reset form
    setName("");
    setPrice("");
    setOriginalPrice("");
    setImagePreview(null);
    setShowAddForm(false);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi cơ sở dữ liệu?")) {
      const updated = products.filter((p) => p.id !== id);
      setProducts(updated);
      localStorage.setItem("tinh_computer_products", JSON.stringify(updated));
    }
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex font-sans">
      
      {/* 1. SIDEBAR CỐ ĐỊNH BÊN TRÁI */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between shrink-0">
        <div>
          {/* Header Logo Admin */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-red-600/30">
                T
              </div>
              <div>
                <h1 className="font-bold text-sm tracking-wide text-white">TĨNH COMPUTER</h1>
                <p className="text-[10px] text-red-400 font-semibold uppercase tracking-wider">Admin Portal</p>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="p-3 space-y-1">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition ${
                activeTab === "dashboard"
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Tổng Quan Dashboard
            </button>

            <button
              onClick={() => setActiveTab("products")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition ${
                activeTab === "products"
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <Package className="w-4 h-4" />
                Quản Lý Sản Phẩm
              </div>
              <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded-full font-bold">
                {products.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition ${
                activeTab === "orders"
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-4 h-4" />
                Quản Lý Đơn Hàng
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full font-bold">
                0
              </span>
            </button>
          </nav>
        </div>

        {/* Footer Sidebar */}
        <div className="p-3 border-t border-slate-800 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:bg-slate-900 hover:text-slate-200 transition"
          >
            <Home className="w-4 h-4 text-slate-500" />
            Xem Trực Tiếp Website
          </Link>
        </div>
      </aside>

      {/* 2. KHỐI NỘI DUNG CHÍNH (MAIN CONTENT) */}
      <main className="flex-1 overflow-y-auto bg-slate-900">
        
        {/* Top Navbar Header */}
        <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-base text-slate-100">
              {activeTab === "dashboard" && "Tổng Quan Doanh Thu & Thống Kê"}
              {activeTab === "products" && "Danh Sách & Quản Lý Sản Phẩm"}
              {activeTab === "orders" && "Danh Sách Đơn Đặt Hàng"}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {activeTab === "products" && (
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-2 transition shadow-lg shadow-red-600/20"
              >
                <Plus className="w-4 h-4" />
                {showAddForm ? "Đóng Form" : "Thêm Sản Phẩm Mới"}
              </button>
            )}
          </div>
        </header>

        {/* Dynamic Body Content */}
        <div className="p-6 space-y-6">
          
          {/* STATS CARDS OVERVIEW */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs font-medium">Tổng Sản Phẩm</span>
                <Package className="w-4 h-4 text-red-500" />
              </div>
              <p className="text-2xl font-black text-white mt-2">{products.length}</p>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1 font-medium">
                <TrendingUp className="w-3 h-3" />
                <span>Đang hiển thị trên Web</span>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs font-medium">Đơn Hàng Mới</span>
                <ShoppingCart className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-2xl font-black text-white mt-2">0</p>
              <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                <span>Chờ xử lý</span>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs font-medium">Truy Cập Tháng</span>
                <Users className="w-4 h-4 text-blue-500" />
              </div>
              <p className="text-2xl font-black text-white mt-2">54</p>
              <div className="flex items-center gap-1 text-[11px] text-blue-400 mt-1 font-medium">
                <ArrowUpRight className="w-3 h-3" />
                <span>60% Mobile (iOS)</span>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs font-medium">Trạng Thái Hệ Thống</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-sm font-bold text-emerald-400 mt-2">Hoạt động tốt</p>
              <p className="text-[11px] text-slate-500 mt-1">Google Indexed OK</p>
            </div>
          </div>

          {/* TAB 1: PRODUCT MANAGEMENT */}
          {activeTab === "products" && (
            <div className="space-y-5">
              
              {/* Form Thêm Sản Phẩm Mới (Hiện khi bấm nút Thêm) */}
              {showAddForm && (
                <div className="bg-slate-950 border border-red-900/50 p-5 rounded-xl shadow-xl space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="font-bold text-sm text-red-400 flex items-center gap-2">
                      <Plus className="w-4 h-4" /> THÊM SẢN PHẨM MỚI VÀO CƠ SỞ DỮ LIỆU
                    </h3>
                    <span className="text-xs text-slate-500">Điền thông tin chi tiết</span>
                  </div>

                  <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-6 space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Tên Sản Phẩm *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="VD: Laptop Dell Inspiron 15 3520 i5-1235U"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-red-600"
                        required
                      />
                    </div>

                    <div className="md:col-span-3 space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Giá Bán Khuyến Mãi *</label>
                      <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="VD: 12.900.000 đ"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-red-600"
                        required
                      />
                    </div>

                    <div className="md:col-span-3 space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Giá Niêm Yết (Gốc)</label>
                      <input
                        type="text"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(e.target.value)}
                        placeholder="VD: 14.500.000 đ"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-red-600"
                      />
                    </div>

                    <div className="md:col-span-4 space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Danh Mục Dịch Vụ</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-red-600"
                      >
                        <option value="Laptop Mới / Cũ">Laptop Mới / Cũ</option>
                        <option value="PC - Máy tính bàn">PC - Máy tính bàn</option>
                        <option value="Camera quan sát">Camera quan sát</option>
                        <option value="Màn hình PC">Màn hình PC</option>
                        <option value="Linh kiện PC">Linh kiện PC</option>
                        <option value="Hàng cũ Sale 50%">Hàng cũ Sale 50%</option>
                      </select>
                    </div>

                    <div className="md:col-span-4 space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Hãng Sản Xuất</label>
                      <input
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        placeholder="VD: ASUS, Dell, Imou, Gigabyte..."
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-red-600"
                      />
                    </div>

                    <div className="md:col-span-4 space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Hình Ảnh Sản Phẩm</label>
                      <div className="flex items-center gap-2">
                        <label className="flex-1 cursor-pointer bg-slate-900 border border-dashed border-slate-700 hover:border-red-500 rounded-lg p-2 text-center text-xs text-slate-400 transition flex items-center justify-center gap-2">
                          <Upload className="w-3.5 h-3.5 text-red-500" />
                          <span>Chọn tệp ảnh từ máy</span>
                          <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                        </label>
                      </div>
                    </div>

                    {imagePreview && (
                      <div className="md:col-span-12 flex items-center gap-3 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                        <img src={imagePreview} alt="Preview" className="w-12 h-12 object-cover rounded" />
                        <span className="text-xs text-emerald-400 font-medium">✓ Ảnh đã tải lên thành công!</span>
                      </div>
                    )}

                    <div className="md:col-span-12 pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setShowAddForm(false)}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition"
                      >
                        Hủy Bỏ
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg transition shadow-lg shadow-red-600/30"
                      >
                        Lưu Sản Phẩm Ngay
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* BẢNG DANH SÁCH SẢN PHẨM */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
                
                {/* Search & Filter Bar */}
                <div className="p-4 border-b border-slate-800 flex items-center justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Tìm kiếm sản phẩm theo tên, danh mục, hãng..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <span className="text-xs text-slate-400">
                    Hiển thị <strong className="text-white">{filteredProducts.length}</strong> sản phẩm
                  </span>
                </div>

                {/* Table Data */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-900/60 text-slate-400 font-semibold uppercase tracking-wider text-[10px] border-b border-slate-800">
                      <tr>
                        <th className="py-3 px-4">Hình Ảnh</th>
                        <th className="py-3 px-4">Tên Sản Phẩm</th>
                        <th className="py-3 px-4">Danh Mục</th>
                        <th className="py-3 px-4">Hãng</th>
                        <th className="py-3 px-4">Giá Bán</th>
                        <th className="py-3 px-4 text-center">Thao Tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                          <tr key={product.id} className="hover:bg-slate-900/40 transition">
                            <td className="py-3 px-4">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-11 h-11 object-cover rounded-lg border border-slate-800 bg-slate-900"
                              />
                            </td>
                            <td className="py-3 px-4 font-medium text-slate-100 max-w-xs truncate">
                              {product.name}
                            </td>
                            <td className="py-3 px-4 text-slate-400">{product.category}</td>
                            <td className="py-3 px-4">
                              <span className="bg-slate-900 border border-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded font-semibold">
                                {product.brand}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className="font-black text-red-400">{product.price}</span>
                              {product.originalPrice && (
                                <span className="block text-[10px] text-slate-500 line-through">
                                  {product.originalPrice}
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-center">
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                                title="Xóa sản phẩm"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-slate-500 text-xs">
                            Không tìm thấy sản phẩm nào phù hợp.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: OVERVIEW DASHBOARD */}
          {activeTab === "dashboard" && (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-center space-y-3">
              <h3 className="font-bold text-base text-white">Thống Kê Doanh Thu & Hệ Thống</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Website Tĩnh Computer đang hoạt động ổn định trên Vercel. Dữ liệu sản phẩm được lưu trữ đồng bộ.
              </p>
            </div>
          )}

          {/* TAB 3: ORDERS */}
          {activeTab === "orders" && (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 text-center space-y-2">
              <ShoppingCart className="w-8 h-8 text-slate-600 mx-auto" />
              <h3 className="font-bold text-sm text-slate-300">Chưa Có Đơn Hàng Mới</h3>
              <p className="text-xs text-slate-500">
                Các đơn đặt hàng trực tiếp từ website sẽ hiển thị đầy đủ tại đây.
              </p>
            </div>
          )}

        </div>
      </main>

    </div>
  );
}