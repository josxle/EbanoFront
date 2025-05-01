import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Rutas
import LogAndSig from "../LogAndSig/LogAndSig";
import Inicio from "../Inicio/Inicio";
import RutaProtegida from '../RutaProtegida/RutaProtegida';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route  path="/" element={<LogAndSig />} />
                <Route path='/init' element={<RutaProtegida> <Inicio /> </RutaProtegida>} />            </Routes>
        </Router>
    );
}

export default AppRoutes;