import * as productModel from '../models/productModel.js';

export const getProduct = async (req, res) => {
  const product = await productModel.getProduct(req.params.id);
  res.json(product);
}

export const getProducts = async (req, res) => {
  const products = await productModel.getProducts();
  res.json(products);
}

export const createProduct = async (req, res) => {
  const product = await productModel.createProduct(req.body);
  res.json({ message: 'Product created', product });
}

export const updateProduct = async (req, res) => {
  const product = await productModel.updateProduct(req.params.id, req.body);
  res.json({ message: 'Product updated', product });
}

export const deleteProduct = async (req, res) => {
  const product = await productModel.deleteProduct(req.params.id);
  res.json({ message: 'Product deleted', product });
}