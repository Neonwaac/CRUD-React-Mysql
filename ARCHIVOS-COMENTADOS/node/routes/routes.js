// Importar el framework Express
import express from 'express'

// Importar funciones del controlador BlogController
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'

// Crear un nuevo enrutador de Express
const router = express.Router()

// Definir las rutas y sus controladores correspondientes
router.get('/', getAllBlogs)      // Ruta para obtener todos los blogs
router.get('/:id', getBlog)        // Ruta para obtener un blog por su ID
router.post('/', createBlog)       // Ruta para crear un nuevo blog
router.put('/:id', updateBlog)     // Ruta para actualizar un blog existente por su ID
router.delete('/:id', deleteBlog)  // Ruta para eliminar un blog por su ID

// Exportar el enrutador para su uso en otras partes de la aplicación
export default router
