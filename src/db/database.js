import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = await open({
  filename: "./recipes.sqlite",
  driver: sqlite3.Database,
});

export async function initializeDatabase() {
  await db.exec(`
     CREATE TABLE IF NOT EXISTS recipes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        instructions TEXT
     )   
        `);
  await db.exec(`
            CREATE TABLE IF NOT EXISTS ingredients(
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               name TEXT,
               quantity INTEGER,
               recipe_id INTEGER ,
               FOREIGN KEY (recipe_id) REFERENCES recipes(id)
               ON UPDATE CASCADE 
               ON DELETE CASCADE
            )   
               `);
}
export default db;
