import { type NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const sendGridApiKey = process.env.SENDGRID_API_KEY as string;
sgMail.setApiKey(sendGridApiKey);

export async function POST(request: NextRequest) {
    const { email, name, phone, preferredDate, preferredTime, contactMethod, project } = await request.json();

    const msg = {
        to: 'alejandro@mintitmedia.com',
        cc: 'alexromo.sgm@gmail.com',
        from: 'proyectos@somospool.com', // Use the email address or domain you verified with SendGrid
        subject: `Message from ${name} (${email})`,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Preferred Date: ${preferredDate}
            Preferred Time: ${preferredTime}
            Project: ${project},
            Contact Method: ${contactMethod}
        `,
    };

    try {
        await sgMail.send(msg);
        return NextResponse.json({ message: 'Email sent' });
    } catch (error) {
        // Type assertion for error
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            if ((error as any).response) {
                console.error('Error response body:', (error as any).response.body);
            }
        } else {
            console.error('Unknown error:', error);
        }
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
