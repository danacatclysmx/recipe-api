import db from "../db/database.js";

export async function getRecipes() {
  const response = await db.all("SELECT * FROM recipes");
  return response;
}

export async function createRecipe(title, instructions, ingredients) {
  const result = await db.run(
    "INSERT INTO recipes (title,instructions) VALUES (?,?) ",
    [title, instructions]
  );
  console.log(result);
  return { id: result.lastID, message: "la receta se creo correctamentre" };
}
export async function deleteRecipe(id) {
  await db.run("DELETE FROM recipes WHERE id=?", [id]);
  return { message: "la receta se borro correctamente" };
}
