import * as Item from "../models/itemModel.js";

export const createItem = async (req, res) => {
  try {
    const item = await Item.createItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.getItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await Item.getItemById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item não encontrado" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    const item = await Item.updateItem(req.params.id, req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    await Item.deleteItem(req.params.id);
    res.json({ message: "Item removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
