import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createItem = async (data) => {
  return await prisma.item.create({ data });
};

export const getItems = async (filters = {}) => {
  const { status, category, location } = filters;
  const whereClause = {};

  if (status) {
    whereClause.status = status;
  }

  if (category) {
    whereClause.category = category;
  }

  if (location) {
    whereClause.location = {
      contains: location,
      mode: "insensitive",
    };
  }

  return await prisma.item.findMany({
    where: whereClause,
    include: { owner: true, foundBy: true },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getItemById = async (id) => {
  return await prisma.item.findUnique({
    where: { id: Number(id) },
    include: { owner: true, foundBy: true },
  });
};

export const updateItem = async (id, data) => {
  return await prisma.item.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteItem = async (id) => {
  return await prisma.item.delete({ where: { id: Number(id) } });
};
