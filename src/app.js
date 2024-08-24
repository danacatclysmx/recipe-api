import express from "express";
import dotenv from "dotenv";
import { initializeDatabase } from "./db/database.js";
import recipeRoutes from "./routes/recipe.routes.js";
// cargo las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

try {
  // inicializar la base de datos
  await initializeDatabase();
  // rutas
  app.use("/api/recipe", recipeRoutes);
  app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
  });
} catch (error) {
  console.error("error al inicializar la aplicacion ", error);
}
