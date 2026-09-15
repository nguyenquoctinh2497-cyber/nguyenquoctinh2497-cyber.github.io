-- CreateTable
CREATE TABLE "ShopInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "shopName" TEXT NOT NULL DEFAULT 'TĨNH COMPUTER',
    "hotline" TEXT NOT NULL DEFAULT '0989068821',
    "phone" TEXT NOT NULL DEFAULT '0989068821',
    "email" TEXT NOT NULL DEFAULT 'nguyenquoctinh2497@gmail.com',
    "address" TEXT NOT NULL DEFAULT 'K18 Phan Tứ, phường Ngũ Hành Sơn, Đà Nẵng',
    "bannerText" TEXT NOT NULL DEFAULT 'TĨNH COMPUTER - Chuyên mua bán, sửa chữa PC, Laptop, lắp đặt Camera, Wifi, thi công hệ thống điện nhẹ & xử lý sự cố tận nơi',
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customer" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "totalPrice" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Chờ xử lý',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
