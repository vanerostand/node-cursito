import express from 'express';
const router = express.Router();
import userRoutes from './userRoutes.js';

router.get('/', (req, res) => {
  res.send("Welcome to the API");
});

router.use('/users', userRoutes);

export default router;
