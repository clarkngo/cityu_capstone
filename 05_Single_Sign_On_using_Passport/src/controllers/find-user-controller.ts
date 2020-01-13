import { Request, Response } from 'express';

import { findUser, UserModel } from '../models/user';

const handler = async (req: Request, res: Response) => {
  let user: UserModel | null = null;
  try {
    user = await findUser(req.query.username);
  } catch (err) {
    console.error(err);
  }
  res.json(user);
};

export default handler;
