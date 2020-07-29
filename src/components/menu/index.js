import React from "react";
import {Link} from 'react-router-dom';
import Logo from "../../assets/logo/logo_guitarflix.svg";
import Button from "../Button";

import './Menu.css';

function Menu(){
    return(
        <nav className='Menu'>
            <Link to='/' clLinkssName='Logo'>
            <img  src={Logo} alt='Logo GuitarFlix'/>;
            </Link>   
            <Button to='/cadastro/video' as={Link} className='ButtonLink'>Novo vídeo </Button>
        </nav>
    );
};

export default Menu;