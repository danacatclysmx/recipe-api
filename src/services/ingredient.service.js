import db from "../db/database.js";

export async function getIngredients() {
  const response = await db.all("SELECT * FROM ingredients");
  return response;
}

export async function createIngredient(name) {
  const lowerName = name.toLowerCase();
  const result = await db.run(
    "INSERT INTO ingredients (name) VALUES (?) ON CONFLICT(name) DO NOTHING",
    [lowerName]
  );
  if (result.lastID) {
    return {
      id: result.lastID,
      message: "El ingrediente se creó correctamente",
    };
  }
  const ingredient = await db.get("SELECT id FROM ingredients WHERE name = ?", [
    lowerName,
  ]);
  return { id: ingredient.id, message: "El ingrediente se creó correctamente" };
}

export async function deleteIngredient(id) {
  await db.run("DELETE FROM ingredients WHERE id=?", [id]);
  return { message: "El ingrediente se borró correctamente" };
}

export async function getIngredientsByRecipe(recipeId) {
  return await db.all(
    `SELECT i.id,i.name,ri.quantity FROM ingredients AS i JOIN recipe_ingredients AS ri ON i.id = ri.ingredients_id WHERE ri.recipeid = ?`,
    [recipeId]
  );
}

export async function addIngredientToRecipe(recipeId, ingredientId, quantity) {
  await db.run(
    "INSERT INTO recipe_ingredients (recipe_id, ingredient_id,quantity) VALUES(?,?,?)",
    [recipeId, ingredientId, quantity]
  );
}

export async function deleteRecipeIngredient(recipeId, ingredientId) {
  await db.run(
    "DELETE FROM recipe_ingredients WHERE recipe_id = ? AND ingredient_id = ?",
    [recipeId, ingredientId]
  );
  return { message: "El ingrediente se borró correctamente de la receta " };
}
