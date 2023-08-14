import React from "react";
import styled from "styled-components";

import './info.css'
import Faq from "./Accordion";

export default function Info() {
    return (
        <DivInfo>
            <div id="info">
                <h1>Informações Gerais</h1>
            </div>

            <main>
                <h3>Perguntas Frequentes</h3>

                <Faq/>
            </main>
        </DivInfo>
    )
}

const DivInfo = styled.div`
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

@media screen and (min-width: 1440px) {
    main{
        display: flex;
        padding: 48px 120px;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
        gap: 48px;
    }

    main h3{
        font-size: 48px;
    }

    section{
        display: flex;
        width: 996px;
        flex-direction: column;
        align-items: flex-start;
    }
}

@media screen and (min-width: 1279px) and (max-width: 1440px){
    main{
        display: flex;
        padding: 48px 120px;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
        gap: 48px;
    }

    main h3{
        font-size: 48px;
    }

    section{
        display: flex;
        width: 996px;
        flex-direction: column;
        align-items: flex-start;
    }
}

@media screen and (min-width: 760px) and (max-width: 1278px) {
    main{
        display: flex;
        padding: 48px 60px;
        flex-direction: column;
        align-items: center;
        gap: 48px;
        align-self: stretch;
    }

    main h3{
        font-size: 48px;
    }

    section{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
    }
}

@media screen and (min-width: 359px) and (max-width: 759px) {
    main{
        display: flex;
        padding: 48px 60px;
        flex-direction: column;
        align-items: center;
        gap: 48px;
        align-self: stretch;
    }

    main h3{
        font-size: 48px;
    }

    section{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
    }
}

main h3{
    color: var(--cor-escura);
    text-align: center;
    font-family: var(--caslistoga-font);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

`