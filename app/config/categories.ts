export interface CategoryItem {
  slug: string;
  name: string;
  brands: string[];
}

export const CATEGORIES: CategoryItem[] = [
  { slug: "hang-cu-sale-50", name: "Hàng cũ Sale 50%", brands: ["ASUS", "Dell", "HP", "Lenovo", "Acer", "Khác"] },
  { slug: "laptop-moi", name: "Laptop Mới", brands: ["ASUS", "MSI", "Dell", "HP", "Lenovo", "Acer", "Gigabyte", "Khác"] },
  { slug: "pc-may-tinh-ban", name: "PC - Máy tính bàn", brands: ["TĨNH PC", "ROG Strix", "Gigabyte", "MSI", "Khác"] },
  { slug: "man-hinh-pc", name: "Màn hình PC", brands: ["Dell", "ASUS", "LG", "Samsung", "AOC", "ViewSonic", "Khác"] },
  { slug: "linh-kien-pc", name: "Linh kiện PC", brands: ["Intel", "AMD", "NVIDIA", "Kingston", "Corsair", "Gigabyte", "MSI", "Khác"] },
  { slug: "pc-phu-kien-may-tinh", name: "PC - Phụ kiện máy tính", brands: ["Logitech", "Razer", "Dareu", "Fuhlen", "Khác"] },
  { slug: "macbook-moi", name: "Macbook mới", brands: ["Apple"] },
  { slug: "dien-thoai-tablet", name: "Điện thoại, Tablet", brands: ["Apple", "Samsung", "Xiaomi", "OPPO", "Khác"] },
  { slug: "camera-quan-sat", name: "Camera quan sát", brands: ["Imou", "Ezviz", "Hikvision", "Dahua", "KBVision", "Khác"] },
  { slug: "may-in-thiet-bi-mang", name: "Máy in/Chiếu - TB Mạng", brands: ["TP-Link", "Ruijie", "Tenda", "Canon", "HP", "Brother", "Khác"] },
];