import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // TODO: Send email using service like SendGrid, Resend, or AWS SES
    // Example with console log for now
    console.log("Contact form submission:", { name, email, subject, message });

    // TODO: Save to database
    // await db.query('INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)', [name, email, subject, message]);

    return NextResponse.json(
      { success: true, message: "Message received" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
