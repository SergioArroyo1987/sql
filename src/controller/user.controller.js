
const {conexion}=require("../database/database");
const getuser=async (req,response)=>{
    let sql;
    // if(req.query.user_id){
    //      sql=`SELECT * FROM students WHERE students_id=${req.params.user_id}`;
    // }
    // try{
    //     const [resultado]=await pool.query(sql);
    //     response.json(resultado);
    //     console.log(resultado);
    // }
    // catch(error){
    //     response.send(error);
    // }
    
    console.log(req.params);

}
const gettodo=async(req,response)=>{
    let sql=`SELECT * FROM students;`
    
           try{
        const [resultado]=await conexion.query(sql);
        response.json(resultado);
        console.log(resultado);
    }
    catch(error){
        response.send(error);
    }
}

    

module.exports={getuser,gettodo};