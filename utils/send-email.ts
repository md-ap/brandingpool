import { FormData } from '@/components/contact';
import emailjs from '@emailjs/browser';

export const sendEmail = async (data: FormData) => {
  try {
    // You'll need to replace these with your actual EmailJS credentials
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS credentials not configured');
    }

    const templateParams = {
      to_name: 'Branding Pool Team',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      preferred_date: data.preferredDate,
      preferred_time: data.preferredTime,
      contact_method: data.contactMethod,
      project: data.project,
    };

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    if (response.status === 200) {
      console.log('Email sent successfully');
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
