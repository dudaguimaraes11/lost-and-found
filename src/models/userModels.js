import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/* ===============================
   1. GET ALL USERS
================================ */
export const getUsers = async () => {
  return await prisma.user.findMany({
    include: { items: true, found: true },
  });
};

/* ===============================
   2. GET USER BY ID
================================ */
export const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { items: true, found: true },
  });
};

/* ===============================
   3. CREATE USER
================================ */
export const createUser = async (data) => {
  return await prisma.user.create({
    data,
  });
};

/* ===============================
   4. DELETE USER
================================ */
export const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: { id: Number(id) },
  });
};

/* ===============================
   5. UPDATE USER
================================ */
export const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: { id: Number(id) },
    data,
  });
};
