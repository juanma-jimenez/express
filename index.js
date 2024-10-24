import express from "express"

const servidor = express();

servidor.use(express.static("./estaticos"));

servidor.get("/color", (peticion, respuesta) => {
    let [r,g,b] = [0,0,0].map(() => Math.floor(Math.random() * 256));

    respuesta.json({r,g,b});
});

servidor.use((peticion,respuesta) => {
    respuesta.status(404);
    respuesta.send("404 not found");
});

servidor.listen(3000);