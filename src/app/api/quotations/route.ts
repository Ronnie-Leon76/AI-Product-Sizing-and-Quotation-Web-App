import { client } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
   
    const quotations = await client.quotation.findMany({
      select: {
        id: true,
        name: true,
        subtotal: true,
        grand_total: true,
        pdfUrl: true,
      },
    });

   
    return NextResponse.json({
      success: true,
      quotations,
    });
  } catch (error) {
    console.error("Failed to fetch quotations:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch quotations",
    });
  } finally {
    await client.$disconnect();
  }
}
