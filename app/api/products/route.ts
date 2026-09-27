import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 1. Lấy danh sách sản phẩm
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: 'desc' },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Lỗi lấy danh sách sản phẩm' }, { status: 500 });
  }
}

// 2. Thêm sản phẩm mới vào Database
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, price, category, image, description } = body;

    // Đã bỏ thuộc tính 'brand' vì Schema Prisma không khai báo cột này
    const newProduct = await prisma.product.create({
      data: {
        name: name || '',
        price: String(price), // Dùng kiểu String đúng theo schema.prisma
        category: category || '',
        image: image || '',
        description: description || null,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: any) {
    console.error('Lỗi khi lưu sản phẩm:', error);
    return NextResponse.json({ error: error?.message || 'Lỗi server' }, { status: 500 });
  }
}