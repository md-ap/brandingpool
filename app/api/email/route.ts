import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, name, phone, preferredDate, preferredTime, contactMethod, project } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        /*
          setting service as 'gmail' is same as providing these setings:
          host: "smtp.gmail.com",
          port: 465,
          secure: true
          If you want to use a different email provider other than gmail, you need to provide these manually.
          Or you can go use these well known services and their settings at
          https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
      */
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        // to: 'hola@somospool.com',
        to: 'alexromo.sgm@gmail.com',
        cc: 'alejandro@mintitmedia.com',
        subject: `Message from ${name} (${email})`,
        text: `
            Names: ${name}
            Email: ${email}
            Phone: ${phone}
            Preferred Date: ${preferredDate}
            Preferred Time: ${preferredTime}
            Project: ${project},
            Contact Method: ${contactMethod}
        `,
    };

    const sendMailPromise = async () => {
        return await new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err, info) {
                if (!err) {
                    console.log(info)
                    resolve('Email sent');
                } else {
                    reject(err);
                }
            });
        });
    }


    try {
        sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
