export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    let shop = await prisma.shopInfo.findUnique({
      where: { id: 1 },
    });
    if (!shop) {
      shop = await prisma.shopInfo.create({
        data: { id: 1 },
      });
    }
    return NextResponse.json(shop);
  } catch (error) {
    return NextResponse.json({ error: "Lỗi kết nối DB" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const updated = await prisma.shopInfo.upsert({
      where: { id: 1 },
      update: {
        shopName: body.shopName,
        hotline: body.hotline,
        phone: body.phone,
        email: body.email,
        address: body.address,
        bannerText: body.bannerText,
      },
      create: {
        id: 1,
        shopName: body.shopName,
        hotline: body.hotline,
        phone: body.phone,
        email: body.email,
        address: body.address,
        bannerText: body.bannerText,
      },
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Lỗi cập nhật DB" }, { status: 500 });
  }
}