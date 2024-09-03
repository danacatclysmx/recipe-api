import db from "../db/database.js";
import {
  createIngredient,
  addIngredientToRecipe,
} from "./ingredient.service.js";

export async function getRecipes() {
  const response = await db.all("SELECT * FROM recipes");
  return response;
}

export async function createRecipe(title, instructions, ingredients) {
  const result = await db.run(
    "INSERT INTO recipes (title,instructions) VALUES (?,?) ",
    [title, instructions]
  );
  const recipeId = result.lastID;
  console.log(result);
  // VAMOS A ASOCIAR INGREDIENTES A LA RECETA
  for (const ingredient of ingredients) {
    const ingredientId = (await createIngredient(ingredient.name)).id;
    await addIngredientToRecipe(recipeId, ingredientId, ingredient.quantity);
  }
  return { id: recipeId, message: "la receta se creo correctamentre" };
}
export async function deleteRecipe(id) {
  await db.run("DELETE FROM recipes WHERE id=?", [id]);
  return { message: "la receta se borro correctamente" };
}
