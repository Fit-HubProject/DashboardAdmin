import nc from "next-connect";
import {getAllRecipes, recipe} from '../../../controller/recipe' 
const  handler = nc();
handler.get(getAllRecipes)

export default handler;