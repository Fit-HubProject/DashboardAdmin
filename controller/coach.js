import {executeQuery} from '../config/db';

const getAllCoachs= async (req,res)=>{
    try{
        let coachData = await executeQuery('select * from coach',[])
    res.send(coachData)
}
    catch (error){   
        res.status(500).json(error)
            }
}

export {getAllCoachs};