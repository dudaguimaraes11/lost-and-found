import express from "express";
import * as ItemController from "../controllers/itemController.js";

const router = express.Router();

router.get("/", ItemController.getAllItems);
router.get("/:id", ItemController.getItemById);
router.post("/", ItemController.createItem);
router.delete("/:id", ItemController.deleteItem);
router.put("/:id", ItemController.updateItem);

export default router;
