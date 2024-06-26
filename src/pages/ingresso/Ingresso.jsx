import React from "react";
import { styled } from "styled-components";

import '../../index.css';
import Code from '../../assets/Tema-Verão/Logos/Logo ingresso.png';
import Simbolo from '../../assets/Tema-Verão/Logos/Símbolo ingresso.png';
import ModelIngresso from "../../components/ingresso/Ingresso";

export default function Ingresso({ nome, setor, dia }) {


    return (
        <DivMain>
            <div id="ingresso">
                <h1>Seu ingresso está aqui!</h1>
            </div>

            <div id="container">
                <div id="conteudo">
                    <h6 id="titulo">Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h6>

                    <div id="molde">
                        <div id="header">
                            <img src={Code} alt='Nome do evento' />
                            <img src={Simbolo} alt='Simbolo do evento' />
                        </div>

                        <ModelIngresso nome={nome} setor={setor} dia={dia}/>
                    </div>
                </div>
            </div>
        </DivMain>
    )
}

const DivMain = styled.div`
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
    #ingresso{
        padding: 23px 417px;
    }
    #conteudo{
        width: 792px;
    }
    #titulo{
        font-size: 32px;
    }
    #main{
        align-items: flex-start;
    }
}

@media screen and (min-width: 1279px) and (max-width: 1440px) {
    #ingresso{
        padding: 23px 417px;
    }
    #conteudo{
        width: 792px;
    }
    #titulo{
        font-size: 32px;
    }
    #main{
        align-items: flex-start;
    }

}

@media screen and (min-width: 760px) and (max-width: 1278px) {
    #conteudo{
        width: 600px;
    }
    #titulo{
        font-size: 32px;
    }
    #main{
        align-items: flex-start;
    }
}

@media screen and (min-width: 359px) and (max-width: 759px){
    #titulo{
        width: 320px;
        font-size: 28px;
    }
    #main{
        flex-direction: column-reverse;
        align-items: center;
    }
}

#ingresso{
    display: flex;
    height: 407px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#container{
    display: flex;
    padding: 64px 120px;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    align-self: stretch;
}

#conteudo{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 32px;
}

#titulo{
    color: var(--cor-escura);
    text-align: center;
    font-family: var(--raleway-font);
    font-style: normal;
    line-height: normal;
}
    #molde {
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
    }

    #header{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    }

    #main{
        display: flex;
        gap: 48px;
        align-self: stretch;
    }

    #main h6{
        color: var(--cor-escura);
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