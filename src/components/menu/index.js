import React from "react";
import Logo from "../../assets/logo/logo_guitarflix.svg";
import Button from "../Button";

import './Menu.css';

function Menu(){
    return(
        <nav className='Menu'>
            <a href='/' className='Logo'>
            <img  src={Logo} alt='Logo GuitarFlix'/>;
            </a>   
            <Button href='/' as='a' className='ButtonLink'>Novo vídeo </Button>
        </nav>
    );
};

export default Menu;