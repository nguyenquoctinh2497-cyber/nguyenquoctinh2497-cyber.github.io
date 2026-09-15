import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

// GET: Lấy danh sách Đơn hàng cho trang Admin
export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(orders);
  } catch (error) {
    console.error("Lỗi GET orders:", error);
    return NextResponse.json({ error: "Lỗi tải đơn hàng" }, { status: 500 });
  }
}

// POST: Lưu Đơn hàng mới từ trang Giỏ hàng vào Database
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newOrder = await prisma.order.create({
      data: {
        customerName: body.customerName,
        phone: body.phone,
        address: body.address,
        note: body.note || "",
        totalAmount: body.totalAmount,
        paymentMethod: body.paymentMethod, // 'VIETQR' hoặc 'COD'
        items: JSON.stringify(body.items),
        status: "PENDING",
      },
    });
    return NextResponse.json(newOrder);
  } catch (error) {
    console.error("Lỗi POST order:", error);
    return NextResponse.json({ error: "Lỗi tạo đơn hàng" }, { status: 500 });
  }
}