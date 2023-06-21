
const { log } = require('console');
const mysql=require('mysql2/promise');

async function conectar(){
    try{
        let conexion=await mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"77357590s",
            database:"school"
        });
        console.log("Conexion correcta");
        // let sql=`ALTER TABLE school.direccion 
        // ADD COLUMN ciudad VARCHAR(45) NULL AFTER numero;`
        //let sql=`ALTER TABLE school.direccion 
         //DROP COLUMN ciudad ;`
         //let sql=`DROP TABLE school.direccion;`
         //let sql=`UPDATE school.marks SET mark=0;`
        // let sql=`SELECT first_name,last_name FROM students;`
        //let sql=`DELETE FROM marks WHERE YEAR(date) <"2013";`
        let sql=`UPDATE marks  SET mark=5 WHERE mark < 5;`
        let [resultado]=await conexion.query(sql);
        console.log(resultado);
    }catch(error){
        console.log(error);
        await conexion.end();
    }
}


conectar();