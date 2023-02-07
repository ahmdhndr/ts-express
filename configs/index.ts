import { config } from 'dotenv';

config();

export const { NODE_ENV, PORT } = process.env;
