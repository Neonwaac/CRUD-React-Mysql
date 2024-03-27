import BlogModel from "../models/BlogModel.js";

// Función para obtener todos los blogs
export const getAllBlogs = async (req, res) => {
    try {
        // Buscar todos los blogs en la base de datos
        const blogs = await BlogModel.findAll();
        // Devolver los blogs como respuesta en formato JSON
        res.json(blogs);
    } catch (error) {
        // Manejar cualquier error y devolver un mensaje de error en formato JSON
        res.json({ message: error.message });
    }
}

// Función para obtener un blog específico por su ID
export const getBlog = async (req ,res) => {
    try {
        // Buscar un blog por su ID en la base de datos
        const blog = await BlogModel.findAll({
            where:{ id:req.params.id }
        });
        // Devolver el blog encontrado como respuesta en formato JSON
        res.json(blog[0]);
    } catch (error) {
        // Manejar cualquier error y devolver un mensaje de error en formato JSON
        res.json({ message: error.message });
    }
}

// Función para crear un nuevo blog
export const createBlog = async (req, res) => {
    try {
        // Crear un nuevo registro de blog en la base de datos utilizando los datos del cuerpo de la solicitud
        await BlogModel.create(req.body);
        // Devolver un mensaje de éxito en formato JSON
        res.json({ "message": "¡Registro creado correctamente!" });
    } catch (error) {
        // Manejar cualquier error y devolver un mensaje de error en formato JSON
        res.json({ message: error.message });
    }
}

// Función para actualizar un blog existente
export const updateBlog = async (req, res) => {
    try {
        // Actualizar un registro de blog existente en la base de datos utilizando el ID proporcionado en los parámetros de ruta y los datos del cuerpo de la solicitud
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        });
        // Devolver un mensaje de éxito en formato JSON
        res.json({ "message": "¡Registro actualizado correctamente!" });
    } catch (error) {
        // Manejar cualquier error y devolver un mensaje de error en formato JSON
        res.json({ message: error.message });
    }
}

// Función para eliminar un blog
export const deleteBlog = async (req, res) => {
    try {
        // Eliminar un registro de blog de la base de datos utilizando el ID proporcionado en los parámetros de ruta
        await BlogModel.destroy({
            where: { id: req.params.id }
        });
        // Devolver un mensaje de éxito en formato JSON
        res.json({ "message": "¡Registro eliminado correctamente!" });
    } catch (error) {
        // Manejar cualquier error y devolver un mensaje de error en formato JSON
        res.json({ message: error.message });
    }
}