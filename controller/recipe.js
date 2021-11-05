import {executeQuery} from '../config/db';

const getAllRecipes= async (req,res)=>{
    let recipeData = await executeQuery('select * from recipe',[])
    res.send(recipeData)
}

export {getAllRecipes};