import { Request, Response } from 'express';

import { fetchBook } from '../models/book';

const handler = async (req: Request, res: Response) => {
    try {
        const book = await fetchBook(req.params.id);
        res.json(book);
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
};

export default handler;