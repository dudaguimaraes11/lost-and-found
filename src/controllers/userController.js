import * as User from "../models/userModels.js";

/* ===============================
  1. GET ALL USERS
================================ */
export const getUsers = async (req, res) => {
  try {
    const users = await User.getUsers();
    res.status(200).json({
      total: users.length,
      users,
      message: "Usuários encontrados",
      status: 200,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ===============================
  2. GET USER BY ID
================================ */
export const getUserById = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: "Usuário não encontrado",
      });
    }

    return res.status(200).json({
      user,
      message: "Usuário encontrado",
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/* ===============================
  3. CREATE USER
================================ */
export const createUser = async (req, res) => {
  try {
    await User.createUser(req.body);

    res.status(201).json({
      message: "Usuário criado com sucesso",
      status: 201,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* ===============================
  4. DELETE USER
================================ */
export const deleteUser = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: "Usuário não encontrado",
      });
    }

    await User.deleteUser(req.params.id);

    return res.status(200).json({
      message: "Usuário deletado com sucesso",
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/* ===============================
  5. UPDATE USER
================================ */
export const updateUser = async (req, res) => {
  try {
    // Atenção: A variável 'user' não estava definida neste bloco.
    // Presumindo que o método User.updateUser retorna o usuário atualizado:
    const user = await User.updateUser(req.params.id, req.body);

    res.status(200).json({
      user,
      message: "Usuário atualizado com sucesso",
      status: 200,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};