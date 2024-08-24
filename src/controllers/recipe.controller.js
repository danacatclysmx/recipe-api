import {
  createRecipe,
  deleteRecipe,
  getRecipes,
} from "../services/recipe.service.js";

export async function handleGetRecipes(req, res) {
  try {
    const recipes = await getRecipes();
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send("error al obtener las recetas");
  }
}
export async function handleCreateRecipe(req, res) {
  const { title, instructions, ingredients } = req.body;
  try {
    const response = await createRecipe(title, instructions, ingredients);
    console.log(response);
    res.status(201).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("hubo un error al crear la receta");
  }
}
export async function handleDeleteRecipe(req, res) {
  const { id } = req.params;
  try {
    const response = await deleteRecipe(id);
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("hubo un error al eleminar la receta");
  }
}
