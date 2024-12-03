import express from 'express';
import router from './src/routes/routes.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use(express.json());
app.use(router);


const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});