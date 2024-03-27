// Importar el framework Express
import express from "express";
// Importar el middleware 'cors' para habilitar el intercambio de recursos entre diferentes dominios
import cors from 'cors';
// Importar la instancia de Sequelize para la conexión a la base de datos
import db from "./database/db.js";
// Importar las rutas de los blogs
import blogRoutes from './routes/routes.js'

// Crear una instancia de la aplicación Express
const app = express()

// Habilitar el middleware 'cors' para permitir solicitudes desde diferentes dominios
app.use(cors())

// Habilitar el middleware para analizar solicitudes JSON
app.use(express.json())

// Usar las rutas definidas para los blogs
app.use('/blogs', blogRoutes)

// Intentar autenticar la conexión a la base de datos
try {
    db.authenticate()
    console.log("Conexión exitosa a la base de datos")
} catch (error) {
    console.log("Error de conexión a la base de datos:", error.message)
}

// Definir una ruta de inicio
app.get("/", (req, res) => {
    // Enviar un mensaje de respuesta al acceder a la ruta raíz
    res.send('HOLA MUNDO')
})

// Iniciar el servidor y escuchar en el puerto 8000
app.listen(8000, () => {
    console.log('Servidor en funcionamiento en http://localhost:8000/')
})
