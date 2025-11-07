import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUser = async (data) => {
  return await prisma.user.create({ data });
};

export const getUsers = async () => {
  return await prisma.user.findMany({
    include: { items: true, found: true },
  });
};

export const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { items: true, found: true },
  });
};

export const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id: Number(id) } });
};
