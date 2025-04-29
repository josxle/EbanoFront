import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Rutas
import LogAndSig from "../LogAndSig/LogAndSig";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route  path="/" element={<LogAndSig />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;