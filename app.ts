import express from 'express';
const cors = require('cors');
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes';
import connectDB from './config/db';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

export default app;
