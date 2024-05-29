import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import DeletarCategoria from './categorias/deletarcategorias/DeletarCategoria';
import FormCategoria from './categorias/formcategoria/FormCategoria';
import ListarCategorias from './categorias/listarcategorias/ListarCategorias';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
        
      <BrowserRouter>
      <Navbar/>
        <div className='min-h-[90vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      
    </>

  );
}

export default App