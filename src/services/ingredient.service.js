import db from "../db/database.js";

export async function getIngredients() {
  const response = await db.all("SELECT * FROM ingredients");
  return response;
}

export async function createIngredient(name) {
  const result = await db.run("INSERT INTO ingredients (name) VALUES (?)", [
    name,
  ]);
  return { id: result.lastID, message: "El ingrediente se creó correctamente" };
}

export async function deleteIngredient(id) {
  await db.run("DELETE FROM ingredients WHERE id=?", [id]);
  return { message: "El ingrediente se borró correctamente" };
}
