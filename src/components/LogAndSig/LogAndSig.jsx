import React from "react";
import './LogAndSig.css';

const LogAndSig = () => {
    return(
        <div className="container">
            <div className="form-box">
                <h2 className="h2">Iniciar Sesión</h2>
                <input className="input" type="text" placeholder="Nombre de pila" />
                <input className="input" type="text" placeholder="Correo electrónico" />
                <button className="b" >Iniciar sesión</button>
                <span className="h2">Crear Cuenta</span>
            </div>
        </div>
    );
}

export default LogAndSig;