const {createPool} = require('mysql');
const pool = createPool ({
host : 'localhost',
user : 'root',
password: 'password',
port : 3306,
database : 'fithub-database'
})

pool.getConnection((err)=>{
    if(err){console.log('problem in DB')}
    console.log('DB connected')
})

const executeQuery = (query,arraParms)=>{
    return new Promise ((resolve,reject)=>{
        try{
pool.query(query,arraParms,(err,data)=>{
    if(err){
        console.log('error is excuted in the query')
        reject (err)
    }
    resolve(data)
})
        }catch (err){
            reject(err)
        }
    })
}
module.exports = {executeQuery};