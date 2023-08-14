import React from "react";
import { styled } from "styled-components";

import './ingresso.css'

export default function Ingresso(){

    const pessoaDataResult = usePessoaData();
    const data = pessoaDataResult.data;

    return(
        <DivMain> 
            <div id="ingresso">
                <h1>Seu ingresso está aqui!</h1>
            </div>
            
            <div id="container">
                <div id="conteudo">
                    <h6>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h6>
                    
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

#ingresso{
    display: flex;
    height: 407px;
    padding: 23px 417px;
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
    width: 792px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 32px;
}

#conteudo h6{
    color: var(--cor-escura);
    text-align: center;
    font-family: var(--raleway-font);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

`