import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import Sidebar from "./SideBar/SideBar";

import LogoBranco from '../assets/Tema-Verão/Logos/Logo branco.png'

export default function Menu() {

    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sideBar);

    return (
        <DivNav>
            <Link to="/"><img src={LogoBranco} alt="" /></Link>

            <FaBars onClick={showSideBar} />
            {sideBar && <Sidebar active={setSideBar}/>}

            <ul>
                <li><Link to="/experiencia">A experiência</Link></li>
                <li><Link to="/setores">Mapa de Setores</Link></li>
                <li><Link to="/informacoes">Informações</Link></li>
                <li><Link to="/ingressos">Ingressos</Link></li>
            </ul>
        </DivNav>
    )
}

const DivNav = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Raleway:wght@500;700;800&display=swap');

:root {
    /*Váriaveis de fonte*/
    --raleway-font: 'Raleway', sans-serif;
    --caslistoga-font: 'Calistoga', cursive;

    /*Váriaveis de cores*/

    --cor-clara: #fff;
    --cor-escura: #444;
    --cor-primaria: #2E7BA2;
    --cor-secundaria: #DF9010;

}

@media screen and (min-width: 1441px) {
    padding: 32px 60px;

    > svg {
        display: none;
    }

    ul{
        display: flex;
    }

    img{
        width: 200px;
    }
}

@media screen and (min-width: 1279px) and (max-width: 1440px) {
    padding: 32px 60px;

    > svg {
        display: none;
    }

    ul{
        display: flex;
    }

    img{
        width: 200px;
    }
}

@media screen and (min-width: 760px) and (max-width: 1278px) {
    padding: 32px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    > svg {
        display: none;
    }

    ul{
        display: flex;
    }

    img{
        display: flex;
        align-self: center;
        width: 150px;
    }

    a{
        font-size: 16px;
    }
}

@media screen and (min-width: 359px) and (max-width: 759px) {
    padding: 32px 30px;

    > svg {
        position: relative;
        width: 20px;
        height: 20px;
        color: white;
        cursor: pointer;
    }

    ul{
        display: none;
    }

    img{
        display: flex;
        align-self: center;
        width: 150px;
    }

    a{
        font-size: 16px;
    }
}

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--cor-primaria);

    

    ul{
        align-items: flex-start;
        gap: 32px;
        list-style: none;
    }

    a{
        color: var(--cor-clara);
        text-align: center;
        font-family: var(--raleway-font);
        font-style: normal;
        font-weight: 700;
        line-height: 40px; 
        text-decoration: none;
        color: var(--cor-clara);
    }

    a:hover{
        color: #1d4d65;
    }
`