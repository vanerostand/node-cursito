import express from 'express';
import * as cartController from '../controllers/cartController.js';
const cartRouter = express.Router()

cartRouter.get('/', cartController.getCarts);
cartRouter.get('/:id', cartController.getCart);

cartRouter.patch('/:id', cartController.updateCart);
cartRouter.delete('/:id', cartController.deleteCart);

cartRouter.post('/create', cartController.createCart);

export default cartRouter;