// server.js

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();
const PORT = 5000;
const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true 
};

app.use(cors(corsOptions));
// app.use(cors());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
//app.use(bodyParser.json());

mongoose.connect('mongodb+srv://vinayamireddy:nencheppa@cluster0.6dyhe1t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log(err));

// Routes
app.use('/', authRoutes);
app.use('/employee', employeeRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
