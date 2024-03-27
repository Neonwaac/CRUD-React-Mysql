// Importar módulos necesarios
import axios from 'axios';             // Para realizar solicitudes HTTP
import { useState } from 'react';      // Para manejar estados en componentes funcionales de React
import { useNavigate } from 'react-router-dom';   // Para la navegación programática en React
import './CreateEditBlog.css';         // Estilos CSS para el componente
import { MdDriveFileRenameOutline } from "react-icons/md";   // Iconos de React para campos de texto
import { MdOutlineEmail } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { TbNumbers } from "react-icons/tb";
import { HiOutlineIdentification } from "react-icons/hi2";
import Swal from 'sweetalert2';        // Biblioteca para mostrar alertas

// URL de la API para los blogs
const URI = 'http://localhost:8000/blogs/';

const CompCreateBlog = () => {
    // Definir estados para los campos del formulario
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [fromcity, setFromcity] = useState('');
    const [date, setDate] = useState('');
    const [idnumber, setIdnumber] = useState('');

    // Obtener la función de navegación programática
    const navigate = useNavigate();

    // Procedimiento para guardar un nuevo registro
    const store = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        // Validar campos vacíos
        if (!name || !lastname || !email || !phone || !age || !fromcity || !date || !idnumber) {
            // Mostrar una alerta de error si hay campos vacíos
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields!',
            });
            return; // Salir de la función si hay campos vacíos
        }
        
        // Enviar solicitud POST para guardar el registro en la base de datos
        await axios.post(URI, {
            name: name,
            lastname: lastname,
            email: email,
            phone: phone,
            age: age,
            fromcity: fromcity,
            date: date,
            idnumber: idnumber
        });
        
        // Mostrar una alerta de éxito después de guardar el registro
        Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'Your registration has been successfully submitted.',
        });

        // Resetear los estados para limpiar el formulario
        setName('');
        setLastname('');
        setEmail('');
        setPhone('');
        setAge('');
        setFromcity('');
        setDate('');
        setIdnumber('');

        // Redirigir al usuario a la página de inicio después de registrar
        navigate('/');
    };

    // Renderizar el formulario de creación de blogs
    return (
        <div>
            <h1 className='paputitulo'>Generate Record</h1>
            <form className="wrapper" onSubmit={store}>

                {/* Campos del formulario con iconos */}
                <div className='input-box'>
                    <label className='form-label'>Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Write your name here"
                    />
                    <MdDriveFileRenameOutline className="icon"/>
                </div>
                <div className='input-box'>
                    <label className='form-label'>Last Name</label>
                    <input
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        type="text"
                        placeholder="Write your last name here"
                    />
                    <MdDriveFileRenameOutline className="icon"/>
                </div>
                <div className='input-box'>
                    <label className="form-label">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Write your email here"
                    />
                    <MdOutlineEmail className="icon"/>
                </div>
                <div className='input-box'>
                    <label className="form-label">Phone</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        placeholder="Write your phone number here"
                    />
                    <MdPhoneIphone className="icon"/>
                </div>
                <div className='input-box'>
                    <label className="form-label">Age</label>
                    <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                        placeholder="Write your age here"
                    />
                    <TbNumbers className="icon"/>
                </div>
                <div className='input-box'>
                    <label className="form-label">From City</label>
                    <input
                        value={fromcity}
                        onChange={(e) => setFromcity(e.target.value)}
                        type="text"
                        placeholder="Write your city of origin"
                    />
                    <FaCity className="icon"/>
                </div>
                <div className='input-box'>
                    <label className="form-label">Date</label>
                    <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                    />
                </div>
                <div className='input-box'>
                    <label className="form-label">ID Number</label>
                    <input
                        value={idnumber}
                        onChange={(e) => setIdnumber(e.target.value)}
                        type="text"
                        placeholder="Write your ID Number here"
                    />
                    <HiOutlineIdentification className="icon"/>
                </div>
                {/* Botón de registro */}
                <button type='submit' className='register-button'>Register</button>
            </form>
        </div>
    );
};

// Exportar el componente para su uso en otras partes de la aplicación
export default CompCreateBlog;
