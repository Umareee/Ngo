
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  try {
    const data = await resend.sendEmail({
      from: 'umersaad9@gmail.com',
      to: 'umersaad9222@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
