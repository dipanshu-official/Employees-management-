// 1️⃣ Express import karte hain
import express from 'express';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import User from './models/user.models.js';
import authRoutes from './routes/auth.js'
import cors from 'cors'

import connectDB from './db/database.js';

configDotenv()
connectDB();
// 2️⃣ Express app banate hain
const app = express();

app.use(cors());
app.use(express.json());

// 3️⃣ Port define karte hain
const PORT = process.env.PORT || 3000;

// 4️⃣ Ek test route banate hain
app.get('/', (req, res) => {
  res.send('Server chal raha hai meri jaan! 🔥');
});

app.use('/api' , authRoutes)

// 5️⃣ Server ko chalu karte hain
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
