import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = await open({
  filename: "./recipes.sqlite",
  driver: sqlite3.Database,
});

export async function initializeDatabase() {
  // Eliminar tablas si existen
  //await db.exec(`DROP TABLE IF EXISTS recipe_ingredients`);
  //await db.exec(`DROP TABLE IF EXISTS ingredients`);
  //await db.exec(`DROP TABLE IF EXISTS recipes`);

  // Crear la tabla de recetas
  await db.exec(`
       CREATE TABLE IF NOT EXISTS recipes (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           title TEXT,
           instructions TEXT
       )
   `);

  // Crear la tabla de ingredientes
  await db.exec(`
       CREATE TABLE IF NOT EXISTS ingredients (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name TEXT UNIQUE
       )
   `);

  // Crear la tabla intermedia de recetas e ingredientes
  await db.exec(`
       CREATE TABLE IF NOT EXISTS recipe_ingredients (
           recipe_id INTEGER,
           ingredient_id INTEGER,
           quantity TEXT,
           FOREIGN KEY(recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
           FOREIGN KEY(ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE,
           PRIMARY KEY(recipe_id, ingredient_id)
  )
`);
}
export default db;
