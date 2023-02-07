import cors from 'cors';
// import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import MessageResponse from 'interfaces/MessageResponse';
import morgan from 'morgan';
import api from './api';
import * as middlewares from './middlewares';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get<Record<string, never>, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Welcome to Express + TypeScript',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
