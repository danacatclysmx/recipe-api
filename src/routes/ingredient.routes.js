import { Router } from "express";
import {
  handleCreateIngredient,
  handleDeleteIngredient,
  handleGetIngredients,
} from "../controllers/ingredient.controller.js";

const router = Router();

router.get("/", handleGetIngredients);

router.post("/", handleCreateIngredient);

router.delete("/:id", handleDeleteIngredient);

export default router;
