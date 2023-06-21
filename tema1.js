
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
        // let sql=`ALTER TABLE school.direccion 
        //  DROP COLUMN ciudad ;`
        //  let sql=`DROP TABLE school.direccion;`
        //  let sql=`UPDATE school.marks SET mark=0;`
        // let sql=`SELECT first_name,last_name FROM students;`
        // let sql=`DELETE FROM marks WHERE YEAR(date) <"2013";`
        // let sql=`UPDATE marks  SET mark=5 WHERE mark < 5;`
        // let sql=`SELECT mark AVG FROM marks WHERE subject_id=6;`
        // let sql=`SELECT COUNT(students_id)  AS sumaalumnos FROM students;`
        // let sql=`SELECT * FROM school.groups;`
        // let sql=`DELETE  FROM marks WHERE mark>5 AND YEAR(date)=2022;`
        // let sql=`SELECT * FROM students WHERE ingreso=2023; `
        // let sql=`SELECT COUNT(subjects_id)AS totalasignaturas,teacher_id  FROM subjects_teacher GROUP BY teacher_id;`
        // let sql=`SELECT student_id,mark FROM marks WHERE student_id<=20  AND YEAR(date)=2022 OR mark>8;`
        // let sql=`SELECT subject_id, AVG(mark) AS media FROM marks WHERE YEAR(date)=2022 GROUP BY subject_id; `
        let sql=`SELECT student_id,AVG(MARK) AS mediaalumno FROM marks WHERE YEAR(date)=2022 GROUP BY student_id;`
        let [resultado]=await conexion.query(sql);
        console.log(resultado);
    }catch(error){
        console.log(error);
        await conexion.end();
    }
}


conectar();