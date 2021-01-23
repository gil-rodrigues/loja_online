/* eslint-disable no-console */
import 'reflect-metadata';
import cors from 'cors';
import { errors } from 'celebrate';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import AppError from '@shared/infra/errors/AppError';

import routes from './routes';
import '@shared/infra/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});

app.listen(3333, () => {
  console.log('Server started on 3333!');
});
