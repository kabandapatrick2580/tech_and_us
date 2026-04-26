import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "kabanda.patrick2580@gmail.com";

export async function POST(request: NextRequest) {
  const body = await request.json() as {
    name?: string;
    email?: string;
    company?: string;
    projectType?: string;
    message?: string;
  };

  const { name, email, company, projectType, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Tech & Us Contact <onboarding@resend.dev>",
    to: [TO_EMAIL],
    replyTo: email,
    subject: `New inquiry from ${name}${company ? ` — ${company}` : ""}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
        <h2 style="border-bottom: 2px solid #3b82f6; padding-bottom: 8px; color: #111827;">
          New Project Inquiry
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 8px 0; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Company</td>
            <td style="padding: 8px 0;">${company}</td>
          </tr>` : ""}
          ${projectType ? `
          <tr>
            <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Project Type</td>
            <td style="padding: 8px 0;">${projectType}</td>
          </tr>` : ""}
        </table>

        <div style="background: #f9fafb; border-left: 3px solid #3b82f6; padding: 16px 20px; border-radius: 4px; margin: 24px 0;">
          <p style="margin: 0 0 6px; color: #6b7280; font-size: 13px;">Message</p>
          <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>

        <p style="color: #9ca3af; font-size: 12px; margin-top: 32px;">
          Sent via the Tech &amp; Us contact form · Reply directly to this email to respond to ${name}.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
