import express from 'express';
import { config } from 'dotenv';

config();
const app = express();
const PORT = 8001;

app.use(express.json());

app.listen(PORT, () => console.log('Hello World!'));