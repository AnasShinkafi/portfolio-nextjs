// import EmailTemplate from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = String(process.env.FROM);

export async function POST(req: Request, res: Response) {
    const { body } = await req.json();
    const { email, subject, message } = body as any;
    try {
        const emailBody = `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New Message submitted</p>
        <p>${message}</p>
    `;
    
    const data = await resend.emails.send({
        from: fromEmail,
        to: ["anasisahskf59@gmail.com", email],
        subject: 'Hello World',
        text: 'Text version of your email content', // Provide a plain text version for compatibility
        html: emailBody,
    });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}




