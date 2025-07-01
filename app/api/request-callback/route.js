// app/api/request-callback/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Load environment variables
const resendApiKey = process.env.RESEND_API_KEY;
const senderEmail = process.env.EMAIL_SENDER;
const recipientEmail = process.env.CONTACT_FORM_RECIPIENT;

// Basic check during server startup/build
if (!resendApiKey || !senderEmail || !recipientEmail) {
  console.error("Missing required environment variables for callback email.");
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
    const { name, email, phone, state, formSource, ...otherFields } = body;

    // --- Core Validation ---
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: Name, Email, and Mobile are required.' },
        { status: 400 }
      );
    }
    if (!state) {
         console.warn("State field missing in callback request, proceeding without it.");
    }

    // --- Determine Email Content ---
    const sourceContext = formSource || 'General Inquiry';
    const emailSubject = `Callback Request: ${sourceContext} - ${name}`;

    // --- Build HTML Dynamically ---
    let emailHtml = `
      <h1>Callback Request: ${sourceContext}</h1>
      <p>A user has requested a call back regarding ${sourceContext}.</p>
      <hr>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${phone}</p>
    `;

    if (state) {
        emailHtml += `<p><strong>State:</strong> ${state}</p>`;
    }

    const otherDetails = Object.entries(otherFields)
      .map(([key, value]) => value ? `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>` : '')
      .join('');

    if (otherDetails) {
        emailHtml += `<h2>Other Details:</h2>${otherDetails}`;
    }

    emailHtml += `<hr><p>Please contact the user at the provided mobile number or email address.</p>`;

    // --- Send Email ---
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      subject: emailSubject,
      html: emailHtml,
      reply_to: email,
    });

    if (error) {
      console.error(`Resend Error (Callback - ${sourceContext}):`, error);
      return NextResponse.json(
        { error: 'Failed to send callback request.', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Callback request submitted successfully! We will contact you shortly.' },
      { status: 200 }
    );

  } catch (err) {
    console.error('API Route Error (Request Callback):', err);
     if (err instanceof SyntaxError) {
       return NextResponse.json({ error: 'Invalid request format.' }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'An unexpected error occurred processing your request.' },
      { status: 500 }
    );
  }
}