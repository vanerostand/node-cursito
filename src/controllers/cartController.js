import * as cartModel from '../models/cartModel.js';

export const getCart = async (req, res) => {
  const cart = await cartModel.getCart(req.params.id);
  res.json(cart);
}

export const getCarts = async (req, res) => {
  const carts = await cartModel.getCarts();
  res.json(carts);
}

export const createCart = async (req, res) => {
  const cart = await cartModel.createCart(req.body);
  res.json({ message: 'Cart created', cart });
}

export const updateCart = async (req, res) => {
  const cart = await cartModel.updateCart(req.params.id, req.body);
  res.json({ message: 'Cart updated', cart });
}

export const deleteCart = async (req, res) => {
  const cart = await cartModel.deleteCart(req.params.id);
  res.json({ message: 'Cart deleted', cart });
}