import express from 'express';
const router = express.Router();
import userRoutes from './userRoutes.js';
import productRoutes from './productRoutes.js';
import cartRoutes from './cartRoutes.js';

router.get('/', (req, res) => {
  res.send("Welcome to the API");
});

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/carts', cartRoutes);

export default router;
