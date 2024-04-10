import { NextApiRequest, NextApiResponse } from 'next';
import { sendMail } from '../../service/mailService';

interface CustomNextApiRequest extends NextApiRequest {
  auth_data?: any; // Change 'any' to the actual type of auth_data if known
}

const handler = async (req: CustomNextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { method } = req;
    switch (method) {
      case 'POST': {
        // Do something
        await sendMail(
          'TEST',
          'dontkillme@bunnyfiedlabs.com',
          'THIS IS A TEST FOR MY MEDIUM USERS'
        );
        res.status(200).send('Success');
        break;
      }
      case 'GET': {
        // Do something
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err: any) {
    res.status(400).json({
      error_code: 'api_one',
      message: err.message,
    });
  }
};

export default handler;
