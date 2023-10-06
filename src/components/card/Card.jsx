import React from 'react';
import { styled } from 'styled-components';
import Code from '../../assets/Tema-Verão/Logos/Logo ingresso.png';
import Simbolo from '../../assets/Tema-Verão/Logos/Símbolo ingresso.png';
import QR from '../../assets/Tema-Verão/Ícones/Qr code 1.png';

export default function Card({ nome, setor,dia }){

    return(
        <DivCard>
            <div id="header">
                <img src={Code} />
                <img src={Simbolo} />
            </div>

            <div id="main">
                <div>
                    <img src={QR} />
                </div>
                <div>
                    <h6>{nome}</h6>
                    <p>Ingresso:</p>
                    <p>Setor: {setor}</p>
                    <p>Data: {dia}</p>
                    <p>Local: São Paulo-SP</p>
                </div>
            </div>
        </DivCard>
    )
}

const DivCard = styled.div`
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

    display: flex;
    padding: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
    border: 0px solid var(--cor-escura);
    background: linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%);
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.15);

    #header{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    }

    #main{
        display: flex;
        align-items: flex-start;
        gap: 48px;
        align-self: stretch;
    }

    #main h6{
        color: var(--cor-escura);
        text-align: center;
        font-family: var(--raleway-font);
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    #main p{
        color: var(--cor-escura);
        font-family: var(--raleway-font);
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px; /* 200% */
    }
`