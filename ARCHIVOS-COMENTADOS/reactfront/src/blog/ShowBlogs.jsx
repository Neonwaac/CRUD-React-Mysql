// Importar la biblioteca axios para realizar solicitudes HTTP
import axios from 'axios';
// Importar los hooks useState y useEffect de React
import { useState, useEffect } from 'react';
// Importar Link de React Router DOM para la navegación entre componentes
import { Link } from 'react-router-dom';
// Estilos CSS del componente
import './ShowBlogs.css';
// Iconos de React
import { IoAddCircle } from "react-icons/io5";
import { MdDelete, MdDriveFileRenameOutline } from "react-icons/md";
// Importar SweetAlert2 para mostrar mensajes al usuario
import Swal from 'sweetalert2';

// URL de la API
const URI = 'http://localhost:8000/blogs/';

const CompShowBlogs = () => {
    // Estado para almacenar la lista de blogs
    const [blogs, setBlogs] = useState([]);

    // Efecto para obtener la lista de blogs al cargar el componente
    useEffect(() => {
        getBlogs();
    }, []);

    // Función para obtener la lista de blogs desde la API
    const getBlogs = async () => {
        try {
            const res = await axios.get(URI);
            setBlogs(res.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    // Función para eliminar un blog
    const deleteBlog = async (id) => {
        try {
            await axios.delete(`${URI}${id}`);
            getBlogs(); // Volver a obtener la lista de blogs después de la eliminación
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    // Función para manejar el clic en el botón de eliminar
    const handleDeleteClick = (id) => {
        // Mostrar un cuadro de diálogo de confirmación
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Si el usuario confirma, eliminar el blog
                await deleteBlog(id);
                // Mostrar un mensaje de éxito al usuario
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Si el usuario cancela, mostrar un mensaje de cancelación
                Swal.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    };

    // Renderizar el componente
    return (
        <div className='container'>
            {/* Botón para crear un nuevo blog */}
            <button className="boton-crear"><Link to="/create"><IoAddCircle className="icon"/></Link></button>
            {/* Tabla para mostrar los blogs */}
            <table className='table'>
                <thead className='table-head'>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>From City</th>
                        <th>Date</th>
                        <th>ID Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapear la lista de blogs y renderizar cada fila */}
                    {Array.isArray(blogs) && blogs.map((blog) => (
                        <tr key={blog.id}>
                            <td>{blog.name}</td>
                            <td>{blog.lastname}</td>
                            <td>{blog.email}</td>
                            <td>{blog.phone}</td>
                            <td>{blog.age}</td>
                            <td>{blog.fromcity}</td>
                            <td>{blog.date}</td>
                            <td>{blog.idnumber}</td>
                            <td>
                                {/* Botón para editar el blog */}
                                <button className="custom-btn">
                                    <Link to={`/edit/${blog.id}`} className="custom-link"><MdDriveFileRenameOutline/></Link>
                                </button>
                                {/* Botón para eliminar el blog */}
                                <button onClick={() => handleDeleteClick(blog.id)} className='boton-eliminar'><MdDelete/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompShowBlogs;
