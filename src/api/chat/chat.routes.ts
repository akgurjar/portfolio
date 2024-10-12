import { type Request, type Response, Router } from 'express';

export const prefix = '/chat';

export const router = Router();

router.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Wait');
});
