import { Request, Response } from 'express';

import { createUser } from '../models/user';

const handler = (req: Request, res: Response) => {
  const { username, password, email, age } = req.body;
  try {
    createUser(username, password, email, age);
  } catch (err) {
    console.error(err);
  }
  res.end(`The user ${username} has been created.`);
};

export default handler;
