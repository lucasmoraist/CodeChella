import React from "react";
import Secao1 from "./secoes/Secao1";
import Secao2 from "./secoes/Secao2";
import Secao3 from "./secoes/Secao3";
import Secao4 from "./secoes/Secao4";
import styled from 'styled-components';

import './home.css'

import ImagemRodape from '../../assets/Tema-Verão/Imagens/1 - Imagem homepage2.png';

export default function Home() {
    return (
        <DivHome>
            <div id="home">
                <h1>Boas-vindas ao <br />#CodeChella2023!</h1>
            </div>

            <main>
                <Secao1/>
                <Secao2/>
                <Secao3/>
                <Secao4/>
                <img src={ImagemRodape} alt="" width="100%"/>
            </main>
        </DivHome>
    )
}

const DivHome = styled.div`
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
    #home h1{
        font-size: 64px;
    }

    #info-experiencia {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 340px;
        gap: 24px;
        margin: 0 150px;
        padding: 24px 0;
    }

    #info-experiencia button {
        display: flex;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border: none;
        border-radius: 16px;
        background-color: var(--cor-primaria);
        color: var(--cor-clara);
        cursor: pointer;
    }
    
    #info-experiencia button:hover {
        transition: 0.4s;
        box-shadow: 4px 4px 0 0 var(--cor-escura);
    }

    #info-experiencia button:not(:hover){
        transition: 0.4s;
    }

    .secoes{
        margin: 56px 120px;
    }

    .data-festa {
        justify-content: center;
    }

    #line-up {
        font-size: 64px;
    }

    .linha {
        height: 1px;
        width: 600px;
        background-color: var(--cor-secundaria);
    }

    .dia-festa{
        font-size: 48px;
        margin: 0 32px;
    }

    .banda h6 {
        padding: 0 16px;
    }
}

@media screen and (min-width: 1279px) and (max-width: 1440px) {
    #home h1{
        font-size: 32px;
    }

    #info-experiencia {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 340px;
        gap: 24px;
        margin-left: 48px;
        padding: 24px 0;
    }

    #info-experiencia button {
        display: flex;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border: none;
        border-radius: 16px;
        background-color: var(--cor-primaria);
        color: var(--cor-clara);
        cursor: pointer;
    }
    
    #info-experiencia button:hover {
        transition: 0.4s;
        box-shadow: 4px 4px 0 0 var(--cor-escura);
    }

    #info-experiencia button:not(:hover){
        transition: 0.4s;
    }

    #line-up {
        font-size: 64px;
    }

    .secoes{
        margin: 60px 90px;
    }

    .linha {
        height: 1px;
        width: 359px;
        background-color: var(--cor-secundaria);
    }

    .data-festa{
        justify-content: center;
    }

    .dia-festa{
        font-size: 48px;
        margin: 0 32px;
    }

    .banda h6 {
        padding: 0 16px;
    }
}

@media screen and (min-width: 760px) and (max-width: 1278px) {
    #home h1{
        font-size: 32px;
    }

    #experiencia {
        padding: 32px 60px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .secoes {
        margin: 32px 60px;
    }

    #info-experiencia {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 340px;
        gap: 24px;
        padding: 0 0;
        margin-left: 0;
        margin-top: 32px;
    }

    #info-experiencia button {
        display: flex;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border: none;
        border-radius: 16px;
        background-color: var(--cor-primaria);
        color: var(--cor-clara);
        cursor: pointer;
        box-shadow: 4px 4px 0 0 var(--cor-escura);
    }

    .dia-festa{
        margin: 0 32px;
    }

    .dias {
        display: flex;
        padding: 48px 60px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 48px;
    }

    #line-up {
        font-size: 64px;
    }

    .linha {
        height: 1px;
        width: 100px;
        background-color: var(--cor-secundaria);
    }

    .dia-festa{
        font-size: 48px;
    }

    .bandas {
        gap: 32px;
    }

    .banda h5 {
        padding: 0 10px;
    }

    .banda h6 {
        padding: 0 12px;
    }
}

@media screen and (min-width: 359px) and (max-width: 759px) {
    #home h1{
        font-size: 32px;
    }
    
    #experiencia{
        flex-direction: column;
    }

    #info-experiencia button {
        display: flex;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border: none;
        border-radius: 16px;
        background-color: var(--cor-primaria);
        color: var(--cor-clara);
        cursor: pointer;
        box-shadow: 4px 4px 0 0 var(--cor-escura);
    }

    .secoes {
        margin: 24px 25px;
    }

    #experiencia{
        width: 100%;
        gap: 24px;
    }

    #imagem-homepage1{
        width: 312px;
        height: auto;
    }

    #info-experiencia {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }

    #info-experiencia h6{
        text-align: center;
        font-style: normal;
        line-height: normal;
        align-self: stretch;
    }

    #info-experiencia button{
        align-self: stretch;
    }

    #line-up{
        padding: 32px 0px;
        font-size: 48px;
        line-height: normal;
    }

    .dia-festa{
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .dias{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 48px;
    }

    .data-festa{
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .banda{
        flex-direction: column;
        gap: 32px;
        align-self: stretch;
        text-align: center;
    }
}

#experiencia {
    display: flex;
    justify-content: center;
    align-items: center;
}

#info-experiencia a{
    text-decoration: none;
}

#info-experiencia h6 {
    text-align: center;
    font-size: 32px;
    font-family: var(--raleway-font);
    font-weight: 700;
    color: var(--cor-escura);
}

#info-experiencia p {
    font-size: 20px;
    font-family: var(--raleway-font);
    font-weight: 500;
    font-weight: normal;
    line-height: 40px;
    color: var(--cor-escura);
    text-align: center;

}

#line-up {
    font-family: var(--raleway-font);
    color: var(--cor-escura);
    text-align: center;
}

.data-festa {
    display: flex;
    align-items: center;
}

.dia-festa {
    background-color: var(--cor-secundaria);
    color: var(--cor-clara);
    font-family: var(--caslistoga-font);
    padding: 16px;
    font-weight: normal;
}

.bandas {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.banda {
    display: flex;
    align-items: center;
    text-align: center;
}

.banda h2 {
    font-size: 48px;
    font-family: var(--raleway-font);
    font-weight: 800;
    font-style: normal;
    color: var(--cor-escura);
    line-height: normal;
    margin: 48px 0 16px 0;
}

.banda h5 {
    font-size: 40px;
    font-family: var(--raleway-font);
    font-weight: 700;
    font-style: normal;
    color: var(--cor-escura);
    line-height: normal;
    margin: 14px 0;
    padding: 0 12px;
}

.banda h6 {
    font-size: 32px;
    font-family: var(--raleway-font);
    font-weight: 700;
    font-style: normal;
    color: var(--cor-escura);
    line-height: normal;
    margin: 16px 0;

}

.banda h4 {
    font-size: 32px;
    font-family: var(--raleway-font);
    font-weight: 500;
    font-style: normal;
    color: var(--cor-escura);
    font-style: normal;
    line-height: normal;
    margin: 16px 0;
    padding: 0 16px;
}
`