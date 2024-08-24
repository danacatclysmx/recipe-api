import { Router } from "express";
import {
  handleCreateRecipe,
  handleDeleteRecipe,
  handleGetRecipes,
} from "../controllers/recipe.controller.js";

const router = Router();

// ruta para insertar una nueva receta

router.get("/", handleGetRecipes);
router.post("/", handleCreateRecipe);
router.delete("/:id", handleDeleteRecipe);
export default router;
