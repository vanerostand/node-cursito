import { prisma } from '../prisma/client.js';

export const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
}

export const getUser = async (id) => {
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  return user;
}

export const getUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
}

export const createUser = async (data) => {
  const user = await prisma.user.create({ data });
  return user;
}

export const updateUser = async (id, data) => {
  const user = await prisma.user.update({
    where: { id: parseInt(id) },
    data,
  });
  return user;
}

export const deleteUser = async (id) => {
  const user = await prisma.user.delete({ where: { id: parseInt(id) } });
  return user;
}


