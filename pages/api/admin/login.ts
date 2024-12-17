import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (email === 'admin@example.com' && password === 'password123') {
      return res.status(200).json({
        success: true,
        message: 'Login successful',
      });
    }

    return res.status(401).json({
      success: false,
      message: 'Invalid email or password',
    });
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).json({
    success: false,
    message: `Method ${req.method} Not Allowed`,
  });
}
