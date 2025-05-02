import React, { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import MenuToggleButton from "../MenuToggleButton/MenuToggleButton";
import './Inicio.css';

const Inicio = () => {
    const [isMenuVisible, setMenuVisible] = useState(true);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <div className={`container ${!isMenuVisible ? 'menu-hidden' : ''}`}>
            <SideMenu isVisible={isMenuVisible} />
            <MenuToggleButton isOpen={isMenuVisible} onClick={toggleMenu} />
            <div className="inf">
                <h2 className="h2">¿Quienes somos?</h2>
                <p className="p" >
                    Somos Ébano Mueblería, una empresa mexicana dedicada a la fabricación, diseño y comercialización de muebles de alta calidad. Nuestro compromiso es ofrecer productos que combinan funcionalidad, estilo y durabilidad, adaptándose a las necesidades y gustos de nuestros clientes.
                    Desde nuestros inicios, hemos trabajado con pasión y atención al detalle, utilizando materiales seleccionados cuidadosamente y procesos artesanales que resaltan la belleza natural de la madera. Nos especializamos en muebles para el hogar, oficina y espacios comerciales, con diseños que van desde lo clásico hasta lo contemporáneo.
                    En Ébano, creemos que cada mueble debe contar una historia y ser parte de un ambiente acogedor. Por eso, brindamos atención personalizada y soluciones a medida para que cada cliente encuentre exactamente lo que busca.
                    Nuestro objetivo es seguir siendo una referencia de calidad y elegancia en el mercado mexicano, llevando el arte del mobiliario a cada rincón del país.
                </p>
            </div>
        </div>
    );
};

export default Inicio;
