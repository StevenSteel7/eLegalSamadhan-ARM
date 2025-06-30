import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Load environment variables
const resendApiKey = process.env.RESEND_API_KEY;
const senderEmail = process.env.EMAIL_SENDER;
const recipientEmail = process.env.CONTACT_FORM_RECIPIENT;

// Basic check during server startup/build
if (!resendApiKey || !senderEmail || !recipientEmail) {
  console.error("Missing required environment variables for contact form email.");
}

const resend = new Resend(resendApiKey);

export async function POST(request) {
  // Runtime check for environment variables
  if (!resendApiKey || !senderEmail || !recipientEmail) {
    return NextResponse.json(
      { error: 'Server configuration error for sending email.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Basic Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: Name, Email, Subject, and Message are required.' },
        { status: 400 }
      );
    }

    // Construct email content
    const emailSubject = `New Contact Form Submission: ${subject}`;
    const emailHtml = `
      <h1>New Contact Form Message</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Subject:</strong> ${subject}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `; // Replace newlines with <br> for HTML formatting

    const { data, error } = await resend.emails.send({
      from: senderEmail, // e.g., "E-Legal Samadhan Contact <noreply@yourdomain.com>"
      to: [recipientEmail],
      subject: emailSubject,
      html: emailHtml,
      reply_to: email, // Set the reply-to field to the user's email
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { error: 'Failed to send message.', details: error.message },
        { status: 500 }
      );
    }

    console.log('Contact email sent successfully:', data);
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (err) {
    console.error('API Route Error:', err);
     if (err instanceof SyntaxError) {
       return NextResponse.json({ error: 'Invalid request format.' }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'An unexpected error occurred processing your request.' },
      { status: 500 }
    );
  }
}