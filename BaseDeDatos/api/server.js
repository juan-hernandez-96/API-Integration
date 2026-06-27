require("dotenv").config();

console.log(process.env.PORT);

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const conexion = mysql.createConnection({

    host: process.env.MYSQL_ADDON_HOST,

    user: process.env.MYSQL_ADDON_USER,

    password: process.env.MYSQL_ADDON_PASSWORD,

    database: process.env.MYSQL_ADDON_DB,

    port: process.env.MYSQL_ADDON_PORT

});

conexion.connect((error)=>{

    if(error){

        console.log(error);

    }else{

        console.log("Base de datos conectada");

    }

});

app.get("/api/usuarios",(req,res)=>{

    conexion.query(

        "SELECT * FROM usuarios",

        (error,resultado)=>{

            if(error){

                res.status(500).json(error);

            }else{

                res.json(resultado);

            }

        }

    );

});

app.listen(process.env.PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${process.env.PORT}`);
});