
import { client } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { quoteData, pdfUrl, clerkId } = await request.json();

      const user = await client.user.findUnique({
        where: { clerkId: clerkId },
      });


    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
        },
        { status: 404 }
      );
    }
    const normalizedData = await normalizeData(quoteData);

  const quotation = await Promise.all(
    normalizedData.map(async (data) => {
      return await client.quotation.create({
        data: {
          name: data.name,
          subtotal: data.subtotal,
          vat: data.vat,
          grand_total: data.grand_total,
          explanation: data.explanation,
          additional_notes: data.additional_notes,
          pdfUrl: pdfUrl,
          userId: user.id,
          components: {
            create: data.components,
          },
        },
      });
    })
  );

    return NextResponse.json({
      success: true,
      message: "Quotation saved successfully",
      quotation,
    });
  } catch (error) {
    console.error("Error saving quotation:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to save quotation",
    });
  }
}


  function normalizeData(quoteData: any) {
  return Object.values(quoteData).map((option: any) => {
    const batteryComponents = option.battery?.components || [];
    const solarPanelComponents = option.solar_panel?.components || [];
    const inverterComponents = option.inverter?.components || [];
    const otherComponents = option.other_components || [];
    return {
      name: option.name,
      subtotal: option.subtotal,
      vat: option.vat,
      grand_total: option.grand_total,
      explanation: option.explanation,
      additional_notes: option.additional_notes,
      components: [
        ...batteryComponents,
        ...solarPanelComponents,
        ...inverterComponents,
        ...otherComponents,
      ].map((component: any) => ({
        product_model: component.product_model,
        item_category_code: component.item_category_code,
        description: component.description,
        quantity: component.quantity,
        unit_price: component.unit_price,
        gross_price: component.gross_price,
      })),
    };
  });
}
