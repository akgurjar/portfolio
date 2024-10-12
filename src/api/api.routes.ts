import { type Response, Router } from 'express';
import * as chat from './chat/chat.routes';

export const prefix = '/api';

export const router = Router();

router.get('/', (_, res: Response) => {
  res.send('API is working');
});

router.use(chat.prefix, chat.router);
