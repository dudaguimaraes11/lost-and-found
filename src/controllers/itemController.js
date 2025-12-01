import * as Item from "../models/itemModel.js";

/* ===============================
  1. GET ALL ITEMS
================================ */
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.getItems(req.query);

    return res.status(200).json({
      total: items.length,
      items,
      message: "Itens encontrados",
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Erro ao buscar itens",
    });
  }
};

/* ===============================
  2. GET ITEM BY ID
================================ */
export const getItemById = async (req, res) => {
  try {
    const item = await Item.getItemById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Item não encontrado",
      });
    }

    return res.status(200).json({
      item,
      message: "Item encontrado",
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Erro ao buscar item",
    });
  }
};

/* ===============================
  3. CREATE ITEM
================================ */
export const createItem = async (req, res) => {
  try {
    await Item.createItem(req.body);

    return res.status(201).json({
      message: "Item criado com sucesso",
      status: 201,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Erro ao criar item",
    });
  }
};

/* ===============================
  4. DELETE ITEM
================================ */
export const deleteItem = async (req, res) => {
  try {
    const item = await Item.getItemById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Item não encontrado",
        error: "Not Found",
      });
    }

    await Item.deleteItem(req.params.id);

    return res.status(200).json({
      message: "Item deletado com sucesso",
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Erro ao deletar item",
    });
  }
};

/* ===============================
  5. UPDATE ITEM
================================ */
export const updateItem = async (req, res) => {
  try {
    const item = await Item.updateItem(req.params.id, req.body);

    return res.status(200).json({
      item,
      message: "Item atualizado com sucesso",
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Erro ao atualizar item",
    });
  }
};