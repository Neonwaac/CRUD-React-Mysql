// Importar el módulo Sequelize desde la biblioteca 'sequelize'
import { Sequelize } from 'sequelize';

// Crear una nueva instancia de Sequelize con la configuración proporcionada
const db = new Sequelize('database_app', 'root', '', {
    host: 'localhost',  // Nombre del host donde se encuentra la base de datos
    dialect: 'mysql'    // Especificar el dialecto de la base de datos (MySQL en este caso)
});

// Exportar la instancia de Sequelize para que pueda ser utilizada en otros archivos
export default db;