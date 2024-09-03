import {
  createIngredient,
  deleteIngredient,
  getIngredients,
} from "../services/ingredient.service.js";

export async function handleGetIngredients(req, res) {
  try {
    const ingredients = await getIngredients();
    res.json(ingredients);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los ingredientes");
  }
}
export async function handleCreateIngredient(req, res) {
  const { name } = req.body;
  try {
    const response = await createIngredient(name);
    res.status(201).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al crear el ingrediente");
  }
}
export async function handleDeleteIngredient(req, res) {
  const { id } = req.params;
  try {
    const response = await deleteIngredient(id);
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Hubo un error al eliminar el ingrediente");
  }
}
