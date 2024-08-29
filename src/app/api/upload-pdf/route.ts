import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { v4 as uuidv4 } from "uuid";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
  
    const formData = await request.formData();
    const file = formData.get("file") as Blob;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" });
    }

  
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          resource_type: "raw",
          public_id: `pdfs/${uuidv4()}`,
          overwrite: true,
        },
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

   return NextResponse.json({ success: true, url: (result as any).secure_url });
  } catch (error) {
    console.error("Error uploading PDF to Cloudinary:", error);
    return NextResponse.json({ success: false, error: "Failed to upload PDF" });
  }
}
