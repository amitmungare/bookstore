import express from "express";
import bookRoute from './rotues/bookRoutes.js';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json())


app.use('/api/v1', bookRoute)

export default app

