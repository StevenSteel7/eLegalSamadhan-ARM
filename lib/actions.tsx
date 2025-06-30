// lib/actions.js (or directly in ContactPage.jsx above the component)
'use server'; // Mark this module's exports as Server Actions

import { Resend } from 'resend'; // Using Resend as example (recommended)
// OR: import nodemailer from 'nodemailer';

export async function sendContactEmail(prevState :any, formData :any) {
  // Get data directly from FormData object
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // --- Basic Validation ---
  if (!name || !email || !subject || !message) {
    return { message: 'Missing required fields', error: true };
  }
  // Add more validation...

  // --- Send Email (Example with Resend) ---
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Your verified sending domain
      to: process.env.CONTACT_EMAIL_RECIPIENT || 'soggsteven92@gmail.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    return { message: 'Message sent successfully!', success: true };
  } catch (error) {
    console.error('Resend Error:', error);
    return { message: 'Failed to send email.', error: true };
  }
}