import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const DEFAULT_RECIPIENT = "touseefbashir919@gmail.com";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const subject = body.subject?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_TO_EMAIL ?? DEFAULT_RECIPIENT;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please set SMTP_USER and SMTP_PASS.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `The DevSpark Website <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `New Project Inquiry: ${subject}`,
      text: [
        "New message from portfolio contact form",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#0f172a;">
          <h2 style="margin:0 0 10px;">New message from The DevSpark portfolio</h2>
          <p style="margin:0 0 6px;"><strong>Name:</strong> ${name}</p>
          <p style="margin:0 0 6px;"><strong>Email:</strong> ${email}</p>
          <p style="margin:0 0 12px;"><strong>Subject:</strong> ${subject}</p>
          <p style="margin:0 0 6px;"><strong>Message:</strong></p>
          <p style="margin:0;white-space:pre-line;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Unable to send message right now. Please try again." },
      { status: 500 }
    );
  }
}
