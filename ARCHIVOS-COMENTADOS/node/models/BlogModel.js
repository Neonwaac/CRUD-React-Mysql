// Importar la instancia de Sequelize desde el archivo de configuración de la base de datos
import db from "../database/db.js";
// Importar el tipo de datos DataTypes desde la biblioteca 'sequelize'
import { DataTypes } from "sequelize";

// Definir un modelo de blog utilizando la instancia de Sequelize y el tipo de datos
const BlogModel = db.define('blogs', {
    name: { type: DataTypes.STRING },         // Nombre del autor del blog (caracteres)
    lastname: { type: DataTypes.STRING },     // Apellido del autor del blog (caracteres)
    email: { type: DataTypes.STRING },        // Correo electrónico del autor del blog (caracteres)
    phone: { type: DataTypes.STRING },        // Número de teléfono del autor del blog (caracteres)
    age: { type: DataTypes.NUMBER },          // Edad del autor del blog (número)
    fromcity: { type: DataTypes.STRING },     // Ciudad de origen del autor del blog (caracteres)
    date: { type: DataTypes.DATE },           // Fecha de publicación del blog (fecha)
    idnumber: { type: DataTypes.NUMBER }      // Número de identificación del blog (número)
}, {
    timestamps: false  // Deshabilitar la generación automática de marcas de tiempo (createdAt, updatedAt)
});

// Exportar el modelo de blog para que pueda ser utilizado en otros archivos
export default BlogModel;