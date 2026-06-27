const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static("public"));

const PORT = 3000;

app.get("/buscar", async (req, res) => {

    try{
        const nombre = req.query.q;
        const respuesta = await axios.get(
            `https://api.deezer.com/search?q=${encodeURIComponent(nombre)}`
        );
        res.json(respuesta.data);
    }

    catch(error){
        res.status(500).json({
            error:"No fue posible consultar Deezer."
        });
    }
});

app.listen(PORT, () => {
    console.log(
        `Servidor ejecutándose en http://localhost:3000`
    );

});