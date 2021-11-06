import nc from "next-connect";
import {getAllRecipes, recipe,deleteRecipebyId,updateRecipebyId} from '../../../controller/recipe';

const  handler = nc();
handler.get(getAllRecipes)
handler.delete(deleteRecipebyId)
handler.put(updateRecipebyId)
export default handler;