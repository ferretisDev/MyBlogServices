import articleRoutes from "#routes/articleRoutes.js"
import cors from "cors";
import dbClient from "#config/dbClient.js";
import express from "express";
import global from "#config/global.js";

const db = dbClient;
const port = global.PORT || 3000;

// Conectar a la base de datos
db.connectDB()

// Crear servidor Node
const app = express();

// Configurar Cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json());

// Configurar Rutas
app.use('/api/article', articleRoutes);

// Crear servidor y escuchar peticiones HTTP
app.listen(port, () =>
    console.log('Servidor activo en el puerto ' + port))
    .on('error', (e) =>
        console.error('Error al iniciar el servidor:', e)
    );