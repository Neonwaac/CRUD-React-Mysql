// Importar la biblioteca axios para hacer solicitudes HTTP
import axios from "axios";
// Importar los hooks useState y useEffect de React
import { useEffect, useState } from "react";
// Importar el hook useNavigate y useParams de React Router DOM
import { useNavigate, useParams } from "react-router-dom";
import './CreateEditBlog.css'; // Estilos CSS
// Importar íconos de React
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { TbNumbers } from "react-icons/tb";
import { HiOutlineIdentification } from "react-icons/hi2";
// Importar SweetAlert2 para mostrar mensajes al usuario
import Swal from 'sweetalert2';

// URL de la API
const URI = 'http://localhost:8000/blogs/';

const CompEditBlog = () => {
    // Definir estados para cada campo del formulario
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [fromcity, setFromcity] = useState('');
    const [date, setDate] = useState('');
    const [idnumber, setIdnumber] = useState('');
    const navigate = useNavigate(); // Obtener la función de navegación
    const { id } = useParams(); // Obtener el parámetro de ruta 'id'

    // Procedimiento para actualizar un registro
    const update = async (e) => {
        e.preventDefault();
        // Enviar una solicitud PUT para actualizar el registro
        await axios.put(URI + id, {
            name: name,
            lastname: lastname,
            email: email,
            phone: phone,
            age: age,
            fromcity: fromcity,
            date: date,
            idnumber: idnumber
        });
        // Mostrar un mensaje de éxito al usuario con SweetAlert2
        Swal.fire({
            icon: 'success',
            title: 'Update Successful',
            text: 'Your record has been successfully updated.',
        }).then(() => {
            navigate('/'); // Redireccionar al usuario a la página principal
        });
    };

    // Efecto para obtener los datos del registro a editar
    useEffect(() => {
        getBlogById(); // Llamar a la función para obtener el registro por ID
    }, [id]); // Ejecutar el efecto cada vez que cambie el 'id'

    // Función para obtener los datos del registro por ID
    const getBlogById = async () => {
        // Enviar una solicitud GET para obtener los datos del registro
        const res = await axios.get(URI + id);
        // Establecer los estados con los datos obtenidos del registro
        setName(res.data.name);
        setLastname(res.data.lastname);
        setPhone(res.data.phone);
        setEmail(res.data.email);
        setAge(res.data.age);
        setFromcity(res.data.fromcity);
        setDate(res.data.date);
        setIdnumber(res.data.idnumber);
    };

    // Renderizar el formulario de edición
    return (
        <div>
            <h1 className='paputitulo'>Edit Record</h1>
            <form className="wrapper" onSubmit={update}>
                {/* Input para el nombre */}
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
                {/* Input para el apellido */}
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
                {/* Input para el correo electrónico */}
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
                {/* Input para el número de teléfono */}
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
                {/* Input para la edad */}
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
                {/* Input para la ciudad de origen */}
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
                {/* Input para la fecha */}
                <div className='input-box'>
                    <label className="form-label">Date</label>
                    <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                    />
                </div>
                {/* Input para el número de identificación */}
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
                {/* Botón para enviar el formulario de actualización */}
                <button type="submit" className="register-button">Update</button>
            </form>
        </div>
    );
};

export default CompEditBlog;
