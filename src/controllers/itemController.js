import * as Item from "../models/itemModel.js";

export const createItem = async (req, res) => {
  try {
    const item = await Item.createItem(req.body);
    res.status(201).json({
      message: "Item criado com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Erro ao criar item",
    });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const items = await Item.getItems(req.query);

    res.json({
      total: items.length,
      items: items,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Erro ao buscar itens",
    });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await Item.getItemById(req.params.id);
    if (!item)
      return res.status(404).json({
        message: "Item não encontrado",
      });
    res.json(item);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Erro ao buscar item",
    });
  }
};

export const updateItem = async (req, res) => {
  try {
    const item = await Item.updateItem(req.params.id, req.body);
    res.json({
      message: "Item atualizado com sucesso",
      item: item,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      // ✨ CORREÇÃO: Mensagem de erro adicionada
      message: "Erro ao atualizar item",
    });
  }
};

export const deleteItem = async (req, res) => {
  try {
    await Item.deleteItem(req.params.id);
    res.json({
      message: "Item deletado com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Erro ao deletar item",
    });
  }
};
