import * as User from "../models/userModels.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.createUser(req.body);
    res.status(201).json({
      message: "Usuário criado com sucesso",
      status: 201,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.getUsers();
    res.status(201).json({
      users: users.length,
      usersList: users,
      message: "Usuários encontrados",
      status: 201,
      error: null,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.status.json({
      user,
      message: "Usuário encontrado",
      status: 201,
      error: null,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.updateUser(req.params.id, req.body);
    res.status(201).json({
      message: "Usuário atualizado com sucesso",
      status: 201,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.deleteUser(req.params.id);
    res.json({ message: "Usuário removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
