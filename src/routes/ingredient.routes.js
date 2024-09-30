import { Router } from "express";
import { body, param } from "express-validator";
import {
  handleCreateIngredient,
  handleDeleteIngredient,
  handleDeleteRecipeIngredient,
  handleGetIngredients,
} from "../controllers/ingredient.controller.js";

const router = Router();

router.get("/", handleGetIngredients);

router.post(
  "/",
  [
    body("name")
      .notEmpty()
      .withMessage("El nombre del ingrediente es obligatorio"),
  ],
  handleCreateIngredient
);

router.delete("/:recipeId/:ingredientId", handleDeleteRecipeIngredient);

router.delete("/:id", handleDeleteIngredient);

export default router;
