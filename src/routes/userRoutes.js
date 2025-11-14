import express from "express";
import * as UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.delete("/:id", UserController.deleteUser);
router.put("/:id", UserController.updateUser);

export default router;
