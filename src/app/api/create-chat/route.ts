import { client } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json({
        success: false,
        error: "userId is required to create or find a chat.",
      });
    }

  
    const user = await client.user.findUnique({
      where: {
        clerkId: userId,
      },
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        error: "User does not exist.",
      });
    }

    
    const actualUserId = user.id;


    let chat = await client.chat.findFirst({
      where: {
        userId: actualUserId,
      },
    });

   
    if (!chat) {
      chat = await client.chat.create({
        data: {
          userId: actualUserId,
        },
      });
    }

    return NextResponse.json({
      success: true,
      chatId: chat.id,
    });
  } catch (error) {
    console.error("Error creating or finding chat:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to create or find chat.",
    });
  }
}
