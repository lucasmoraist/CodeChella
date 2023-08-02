import React from "react";
import { Link } from 'react-router-dom';

import LogoBranco from '../assets/Tema-Verão/Logos/Logo branco.png'
import './menu.css';

export default function Menu(){
    return(
        <nav id="barra-navegacao">
            <Link to="/"><img src={LogoBranco} alt="" /></Link>

            <button id="btn-mobile" aria-label="Abrir Menu" aria-haspopup="true" aria-controls="menu"
                aria-expanded="false">
                <span id="hamburguer"></span>
            </button>

            <ul>
                <li><Link to="/experiencia">A experiência</Link></li>
                <li><Link to="/setores">Mapa de Setores</Link></li>
                <li><Link to="/informacoes">Informações</Link></li>
                <li><Link to="/ingressos">Ingressos</Link></li>
            </ul>
        </nav>
    )
}