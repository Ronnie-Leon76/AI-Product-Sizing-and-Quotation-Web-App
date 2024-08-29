import { client } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const chatId = searchParams.get("chatId");

    if (!chatId) {
      return NextResponse.json({
        success: false,
        error: "Chat ID is required",
      });
    }

  
    const chat = await client.chat.findUnique({
      where: { id: chatId },
      include: {
        messages: {
              select: {
                id: true,
            content: true, 
          },
        },
      },
    });

    if (!chat) {
      return NextResponse.json({
        success: false,
        error: "Chat not found",
      });
    }

    return NextResponse.json({
      success: true,
      messages: chat.messages
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch messages",
    });
  }
}
