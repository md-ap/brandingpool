import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export const runtime = 'nodejs';

export async function POST(request: NextRequest, res: any) {
    const { email, name, phone, preferredDate, preferredTime, contactMethod, project } = await request.json();

    const transport = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: 'alejandro@mintitmedia.com',
        // cc: email, (uncomment this line if you want to send a copy to the sender)
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

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transport.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });

    await new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
            if (!err) {
                resolve('Email sent');
            } else {
                reject(err.message);
            }
        });
    });
    res.status(200).json({ status: "OK" });
}
