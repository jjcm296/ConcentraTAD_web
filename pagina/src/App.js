import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Nosotros from "./screen/nosotros/Nosotros"; // Asegúrate de que este archivo exista

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/nosotros" element={<Nosotros />} />
                {/* Puedes agregar otras rutas aquí, como inicio, servicios, etc. */}
            </Routes>
        </div>
    );
}

export default App;
