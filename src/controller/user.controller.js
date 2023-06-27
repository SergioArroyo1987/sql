

const {conexion}=require("../database/database");
const getuser=async (req,response)=>{
    let sql;
    if(req.query.students_id){
        console.log("holaaa");
         sql=`SELECT * FROM students WHERE students_id=${req.query.students_id}`;
    }
    try{
        const [resultado]=await conexion.query(sql);
        response.send(resultado);
        console.log(resultado);
    }
    catch(error){
        response.send(error);
    }
    
    console.log(req.query);

}
const gettodo=async(req,response)=>{
    let sql=`SELECT * FROM students;`
    
           try{
        const [resultado]=await conexion.query(sql);
        response.send(resultado);
        
    }
    catch(error){
        response.send(error);
    }
}
const postusuario=async(request,response)=>{
    let sql="";
    console.log(request.body);
    try{
        
        sql="INSERT INTO students (first_name, last_name, group_id, ingreso)"+ 
        "VALUES('"+request.body.first_name+"','"+request.body.last_name+"','"+request.body.group_id+"','"+request.body.ingreso+"')";
        console.log(sql);
      let [resultado]=await conexion.query(sql);
      console.log(resultado);
      response.send(resultado);
        
    }catch(error){
        response.send(error);
    }}
    const putusuario=async(req,response)=>{
        let sql=`UPDATE students SET first_name=COALESCE(?,first_name),
            last_name=COALESCE(?,last_name),
            group_id=COALESCE(?,group_id),
            ingreso=COALESCE(?,ingreso)
            WHERE students_id=?;`
            const {students_id,nombre,apellido,grupo,ingreso}=req.body;
            const parametros=[
                nombre? nombre: null,
                apellido? apellido: null,
                grupo? grupo: null,
                ingreso? ingreso: null,
                students_id
            ]

        try{
            const [resultado]=await conexion.query(sql,parametros);
            response.send(resultado);
            
        }catch(error){
            response.send(error);
        }}
        const deleteusuario=async(req,res)=>{
            let sql=`DELETE FROM students WHERE students_id=${req.query.students_id};`
            try{
                const[resultado]=await conexion.query(sql);
                res.send(resultado);
            }catch(error){
                res.send(error)
            }
        }
    
    


    

module.exports={getuser,gettodo,postusuario,putusuario,deleteusuario};