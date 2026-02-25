import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json({ error: "الصورة مطلوبة" }, { status: 400 });
    }

    const formData = new FormData();
    formData.append("base64Image", `data:image/jpeg;base64,${image}`);
    formData.append("language", "ara"); // دعم اللغة العربية
    formData.append("apikey", "K83606833488957"); // اتأكد ان الـ Key بتاعك صح
    formData.append("isOverlayRequired", "false");
    formData.append("ocrEngine", "1"); // جرب 1 لو 2 مطلعش نتيجة كويسة

    const response = await fetch("https://api.ocr.space/parse/image", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.OCRExitCode === 1) {
      const extractedText = data.ParsedResults[0].ParsedText;
      return NextResponse.json({ text: extractedText });
    } else {
      console.error("OCR Error Details:", data.ErrorMessage);
      return NextResponse.json({ 
        error: data.ErrorMessage || "تعذر قراءة النص من الصورة" 
      }, { status: 400 });
    }
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "حدث خطأ في السيرفر الداخلي" }, { status: 500 });
  }
}