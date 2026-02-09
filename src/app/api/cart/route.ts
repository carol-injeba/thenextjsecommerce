import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const productId = form.get("productId");
    const quantity = form.get("quantity");

    if (!productId || !quantity) {
      return NextResponse.json(
        { error: "Missing productId or quantity" },
        { status: 400 },
      );
    }

    // In a real app you'd add to a database or session here.
    return NextResponse.json(
      { success: true, item: { productId, quantity } },
      { status: 201 },
    );
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export const runtime = "edge";
