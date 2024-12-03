import { prisma } from '../prisma/client.js';

export const getProduct = async (id) => {
  const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
  return product;
}

export const getProducts = async () => {
  const product = await prisma.product.findMany();
  console.log(product);
  return product;
}

export const createProduct = async (data) => {
  const product = await prisma.product.create({ data })
  return product;
}

export const updateProduct = async (id, data) => {
  const product = await prisma.product.update({
    where: { id: parseInt(id) },
    data,
  });
  return product;
}

export const deleteProduct = async (id) => {
  const product = await prisma.product.delete({ where: { id: parseInt(id) } });
  return product;
}