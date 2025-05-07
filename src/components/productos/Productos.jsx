import React, {useState} from "react";
import SideMenu from "../SideMenu/SideMenu";
import MenuToggleButton from "../MenuToggleButton/MenuToggleButton";

const Productos = () => {

    const [isMenuVisible, setMenuVisible] = useState(true);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return(
        <div className={`container ${!isMenuVisible ? 'menu-hidden' : ''}`}>
            <SideMenu isVisible={isMenuVisible} />
            <MenuToggleButton isOpen={isMenuVisible} onClick={toggleMenu} />
            <div>
                asd
            </div>
        </div>
    );
}

export default Productos;