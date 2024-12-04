import { prisma } from '../prisma/client.js';

export const getCart = async (id) => {
  const cart = await prisma.cart.findUnique({ where: { id: parseInt(id) } });
  return cart;
}

export const getCarts = async () => {
  const cart = await prisma.cart.findMany();
  return cart;
}

export const createCart = async (data) => {
  const cart = await prisma.cart.create({ data })
  return cart;
}

export const updateCart = async (id, data) => {
  const cart = await prisma.cart.update({
    where: { id: parseInt(id) },
    data,
  });
  return cart;
}

export const deletecart = async (id) => {
  const cart = await prisma.cart.delete({ where: { id: parseInt(id) } });
  return cart;
}