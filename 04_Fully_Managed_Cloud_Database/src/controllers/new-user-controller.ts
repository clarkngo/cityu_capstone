import { Request, Response } from 'express';

import { createUser } from '../models/user';

const handler = (req: Request, res: Response) => {
  const { username, password, email, age } = req.body;
  /*
    The above line actually can be written as follows:
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const age = req.body.age;
  */

  try {
    createUser(username, password, email, age);
    res.end(`The user ${username} has been created.`);
  } catch (err) {
    console.error(err);
    res.end(`Something went wrong. Please check your input data`);
  }
}

export default handler;
