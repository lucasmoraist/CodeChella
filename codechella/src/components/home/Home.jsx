import React from "react";
import Secao1 from "./secoes/Secao1";
import Secao2 from "./secoes/Secao2";
import Secao3 from "./secoes/Secao3";
import Secao4 from "./secoes/Secao4";

import ImagemRodape from '../../assets/Tema-Verão/Imagens/1 - Imagem homepage2.png';

import './home.css';

export default function Home() {
    return (
        <>
            <div id="banner">
                <h1>Boas-vindas ao <br />#CodeChella2023!</h1>
            </div>

            <main>
                <Secao1/>
                <Secao2/>
                <Secao3/>
                <Secao4/>
                <img src={ImagemRodape} alt="" width="100%"/>
            </main>
        </>
    )
}