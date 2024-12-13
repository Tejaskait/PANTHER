import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Validate Environment Variables
if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI is not defined in the .env file');
}

// Basic Route
app.get('/', (req, res) => res.send('Server is running!'));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'An error occurred' });
});

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });
 