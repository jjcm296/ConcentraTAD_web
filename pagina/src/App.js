import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Nosotros from "./screen/nosotros/Nosotros";
import Inicio from "./screen/inicio/Inicio";
import SobreTda from "./screen/sobretda/SobreTda"

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/sobretda" element={<SobreTda />} />
                {/* Puedes agregar otras rutas aquí, como inicio, servicios, etc. */}
            </Routes>
        </div>
    );
}

export default App;
