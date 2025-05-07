import React from "react";
import './SideMenu.css';
import { Link } from "react-router-dom";

const SideMenu = ({ isVisible }) => {
    return (
        <div className={`sidemenu ${!isVisible ? "hidden" : ""}`}>
            <Link to="/init" >
            <div className="menu-item">Información</div>
            </Link>            
            <Link to="/prod">
            <div className="menu-item">Productos</div>
            </Link>
            <div className="menu-item">Ventas</div>
            <div className="menu-item">Pagos</div>
            <div className="menu-item">Clientes</div>
            <div className="menu-item">Tu Cuenta</div>
            <Link to="/" className="last-menu-item" onClick={ () => { localStorage.setItem('auth', 'false'); }}>
                <div>Cerrar Sesión</div>
            </Link>
        </div>
    );
};

export default SideMenu;
