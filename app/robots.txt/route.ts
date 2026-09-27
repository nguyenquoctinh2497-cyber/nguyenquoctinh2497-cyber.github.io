import { NextResponse } from "next/server";

export async function GET() {
  const robotsText = `User-agent: *
Allow: /

Sitemap: https://tinhcomputer.vn/sitemap.xml`;

  return new NextResponse(robotsText, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}