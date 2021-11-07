import {executeQuery} from '../config/db';

const getAllRecipes= async (req,res)=>{
   try{ let recipeData = await executeQuery('select * from recipe',[])
    res.send(recipeData)
}
    catch (error){   
        res.status(500).json(error)
            }
}

const deleteRecipebyId = async (req,res)=>{
    let id=req.query.id
    try{let recipeData = await executeQuery('delete from recipe where id=?',[id])
    res.send(recipeData)}
    catch (error){   
        res.status(500).json(error)
            }
}
const updateRecipebyId = async (req,res)=>{
    let    id=req.query.id
    const {recipeTitle,created_at,content,imgUrl}=req.body;
    try{let recipeData = await executeQuery(`select * from recipe where id=?`,[id]);
    if (recipeData.length>0){
        recipeData = await executeQuery (`UPDATE recipe SET recipeTitle=?,created_at=?,content=?,imageUrl=? where id=${id}`,[recipeTitle,created_at,content,imgUrl,id])  
    } 
    else {
   res.status(400).json(`recipe is not found in the id=${id}`);
    }
    res.send(recipeData)}
    catch (error){   
        res.status(500).json(error)
            }
}


export {getAllRecipes,deleteRecipebyId,updateRecipebyId};