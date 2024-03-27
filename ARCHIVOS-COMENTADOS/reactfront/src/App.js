// Importar estilos CSS
import './App.css';

// Importar los componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';

// Importar BrowserRouter, Route y Routes de React Router DOM
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Función principal del componente App
function App() {
  return (
    <div className="App">
      {/* Utilizar BrowserRouter para definir las rutas */}
      <BrowserRouter>
        {/* Utilizar Routes para definir las rutas */}
        <Routes>
            {/* Ruta para mostrar todos los blogs */}
            <Route path='/' element={ <CompShowBlogs />} />
            {/* Ruta para crear un nuevo blog */}
            <Route path='/create' element={ <CompCreateBlog />} />
            {/* Ruta para editar un blog existente */}
            <Route path='/edit/:id' element={ <CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Exportar el componente App
export default App;
