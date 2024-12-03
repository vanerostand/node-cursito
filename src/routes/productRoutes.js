import express from 'express';
import * as productController from '../controllers/productController.js';
const productRouter = express.Router()

productRouter.get('/', productController.getProducts);
productRouter.get('/:id', productController.getProduct);

productRouter.patch('/:id', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

productRouter.post('/create', productController.createProduct);

export default productRouter;