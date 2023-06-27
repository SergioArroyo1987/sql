const {conexion}=require("../database/database");
const getmedia=async (req,response)=>{
    let sql;
    if(req.query.students_id){
        console.log("holaaa");
         sql=`SELECT AVG(mark) FROM marks WHERE students_id=${req.query.students_id}`;
    }
    try{
        const [resultado]=await conexion.query(sql);
        response.send(resultado);
        
    }
    catch(error){
        response.send(error);
    }
}
const getapuntada=async (req,response)=>{
    let sql;
    if(req.query.students_id){

         sql=`SELECT CONT(subject_id) FROM marks WHERE students_id=${req.query.students_id}`;
    }else{
        sql=`SELECT first_name,last_name,title FROM students INNER JOIN grupos ON (students.group_id=grupos.group_id)INNER JOIN subjects_teacher ON (subjects_teacher.group_id=grupos.group_id) INNER JOIN subjects ON (subjects_teacher.subjects_id=subjects.subject_id)  ; `
    }
    try{
        const [resultado]=await conexion.query(sql);
        response.send(resultado);
        
    }
    catch(error){
        response.send(error);
    }
}
const getimpartida=async(req,resp)=>{
    let sql="";
    if(req.query.teachers_id){
        sql=`SELECT first_name,last_name,title FROM teachers AS t INNER JOIN subjects_teacher AS s ON (t.teachers_id=s.teacher_id) INNER JOIN subjects ON(s.subjects_id=subjects.subject_id) WHERE teachers_id=${req.query.teachers_id};`
    }else{
        sql=`SELECT first_name,last_name,title FROM teachers AS t INNER JOIN subjects_teacher AS s ON (t.teachers_id=s.teacher_id) INNER JOIN subjects ON(s.subjects_id=subjects.subject_id);`
    }
    try{
        const [resultado]=await conexion.query(sql);
        resp.send(resultado);
    }catch(error){
        resp.end(error);
    }
}
module.exports={getmedia,getapuntada,getimpartida};