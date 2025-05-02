import React from "react";
import './MenuToggleButton.css';

const MenuToggleButton = ({ isOpen, onClick }) => {
    return (
        <button className={`toggle-button ${isOpen ? 'open' : ''}`} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default MenuToggleButton;
