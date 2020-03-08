import { Request, Response } from 'express';

import { deleteBook } from '../models/book';

const handler = (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        deleteBook(id);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};

export default handler;