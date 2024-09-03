import { Router } from "express";
import {
  handleCreateIngredient,
  handleDeleteIngredient,
  handleDeleteRecipeIngredient,
  handleGetIngredients,
} from "../controllers/ingredient.controller.js";

const router = Router();

router.get("/", handleGetIngredients);

router.post("/", handleCreateIngredient);

router.delete("/:recipeId/:ingredientId", handleDeleteRecipeIngredient);

router.delete("/:id", handleDeleteIngredient);

export default router;
