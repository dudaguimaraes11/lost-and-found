import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/* ===============================
   1. GET ALL ITEMS
================================ */
export const getItems = async (filters = {}) => {
  const { status, category, location, title } = filters;

  const result = {};

  if (status) {
    result.status = status;
  }

  if (title) {
    result.title = {
      contains: title,
      mode: "insensitive",
      accentInsensitive: true,
    };
  }

  if (category) {
    result.category = {
      equals: category,
      mode: "insensitive",
      accentInsensitive: true,
    };
  }

  if (location) {
    result.location = {
      equals: location,
      mode: "insensitive",
      accentInsensitive: true,
    };
  }

  return await prisma.item.findMany({
    where: result,
    include: { owner: true, foundBy: true },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/* ===============================
   2. GET ITEM BY ID
================================ */
export const getItemById = async (id) => {
  return await prisma.item.findUnique({
    where: { id: Number(id) },
    include: { owner: true, foundBy: true },
  });
};

/* ===============================
   3. CREATE ITEM
================================ */
export const createItem = async (data) => {
  return await prisma.item.create({
    data,
  });
};

/* ===============================
   4. DELETE ITEM
================================ */
export const deleteItem = async (id) => {
  const itemExists = await prisma.item.findUnique({
    where: { id: Number(id) },
  });

  if (!itemExists) {
    return { error: "Item não encontrado" };
  }

  return await prisma.item.delete({
    where: { id: Number(id) },
  });
};

/* ===============================
   5. UPDATE ITEM
================================ */
export const updateItem = async (id, data) => {
  return await prisma.item.update({
    where: { id: Number(id) },
    data,
  });
};
