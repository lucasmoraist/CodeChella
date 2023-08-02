import React from "react";
import styled from "styled-components";

import './info.css'

export default function Info() {
    return (
        <DivInfo>
            <div id="info">
                <h1>Informações Gerais</h1>
            </div>

            <main>
                <h3>Perguntas Frequentes</h3>

                <section>
                    <div class="caixa">
                        <div class="label">
                            <h6>Quais serão as atrações?</h6>
                            <div class="seta"></div>
                        </div>

                        <div class="conteudo">
                            <p>Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas
                                pop. <span>Confira o line-up em detalhes clicando neste link!</span></p>
                        </div>
                    </div>

                    <div class="caixa">
                        <div class="label">
                            <h6>Qual é a classificação etária?</h6>
                            <div class="seta"></div>
                        </div>

                        <div class="conteudo">
                            <p>A classificação etária do evento é 16 (dezesseis) anos.</p>
                        </div>
                    </div>

                    <div class="caixa">
                        <div class="label">
                            <h6>Quais são os setores disponíveis?</h6>
                            <div class="seta"></div>
                        </div>

                        <div class="conteudo">
                            <ul>
                                <li>Pista Premium</li>
                                <li>Pista Comum</li>
                                <li>Cadeiras Térreo</li>
                                <li>Cadeiras Superiores</li>
                            </ul>
                        </div>
                    </div>

                    <div class="caixa">
                        <div class="label">
                            <h6>Quais são os itens proibidos?</h6>
                            <div class="seta"></div>
                        </div>

                        <div class="conteudo">
                            <ol>
                                <li>garrafas de qualquer gênero, tamanho ou material (exemplos: garrafas de água mineral,
                                    “squeezes”, etc), exceto garrafas plásticas para consumo de água, desde que sem tampa. A
                                    tampa poderá ser retirada pela segurança na entrada ou em qualquer local do evento (vide
                                    item 7 sobre bebedouros);</li>
                                <li>embalagens rígidas e com tampa (exemplo: potes de plásticos do tipo “tupperware”);</li>
                                <li>copos térmicos, de vidro ou metal </li>
                                <li>latas;</li>
                                <li>capacetes;</li>
                                <li>armas de fogo ou armas brancas de qualquer tipo (facas, soco inglês, canivetes, etc);
                                </li>
                                <li>cadeiras/banquinhos;
                                </li>
                                <li>guarda-chuvas;
                                </li>
                                <li>objetos pontiagudos;
                                </li>
                                <li>objetos perfurantes ou cortantes (tesoura, estiletes, pinças, cortadores de unha,
                                    saca-rolhas);
                                </li>
                                <li>fogos de artificio, dispositivos explosivos, sinalizadores e aparatos incendiários de
                                    qualquer espécie;
                                </li>
                                <li>objetos de vidro, plástico ou metal (perfumes, cosméticos, inclusive desodorantes de
                                    qualquer tipo, pasta ou escova de dente);
                                </li>
                                <li>Substâncias inflamáveis, corrosivas
                                </li>
                                <li>sprays
                                </li>
                                <li>máquinas de incapacitação neuromuscular (tasers)
                                </li>
                                <li>ponteiros de laser, luzes estroboscópicas ou outros dispositivos emissores de luz
                                </li>
                                <li>bebidas (em qualquer tipo de recipiente);
                                </li>
                                <li>skate, bicicleta ou qualquer tipo de veículo motorizado ou não;
                                </li>
                                <li>isopor, cooler ou qualquer tipo de utensílio para armazenagem;
                                </li>
                                <li>bastão de selfie (extensor para tirar auto-retrato);
                                </li>
                                <li>câmeras fotográficas ou filmadoras profissionais ou com lente destacável
                                </li>
                                <li>objetos profissionais para captura de imagem e som, como, por exemplo: máquinas fotográficas
                                    profissionais (lente intercambiável), equipamentos de filmagem profissionais drones ou
                                    outros objetos voadores
                                </li>
                                <li>itens que possam ser utilizados para marketing de emboscada;
                                </li>
                                <li>substâncias venenosas e/ou tóxicas, incluindo drogas ilegais;
                                </li>
                                <li>bandeiras ou cartazes contendo mensagens ou símbolos com divulgações comerciais ou ainda com
                                    referências a causas discriminatórias, ofensivas, homofóbicas, racistas ou xenófobas (F1);
                                </li>
                                <li>drones, também denominados VANT (veículo aéreo não tripulado), RPA (Remotely-Piloted
                                    Aircraft), Aeronave Remotamente Pilotada, e equipamentos similares.
                                </li>
                                <li>alimentos que representem intuito de comercialização ou que possam representar riscos à
                                    segurança.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div class="caixa">
                        <div class="label">
                            <h6>Quais são os itens permitidos?</h6>
                            <div class="seta"></div>
                        </div>

                        <div class="conteudo">
                            <ol>
                                <li>alimentos industrializados devidamente lacrados (exemplos: biscoitos, torradas, barras de
                                    cereal etc.);
                                </li>
                                <li>frutas cortadas e acondicionadas em embalagem transparente e não rígida, do tipo “Zip Lock”;
                                </li>
                                <li>sanduiches acondicionados em embalagem transparente e não rígida, do tipo “Zip Lock”.
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
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

    .caixa{
        display: flex;
        padding: 5px;
        flex-direction: column;
        align-self: stretch;
    }

    .label{
        display: flex;
        width: 996px;
        padding: 16px;
        justify-content: space-between;
        align-items: center;
        background-color: var(--cor-primaria);
    }

    .label h6{
        font-size: 32px;
    }

    .label::before{
        right: 23%;
    }

    .conteudo{
        position: relative;
        height: 0;
        overflow: hidden;
        transition: .5s;
        overflow-y: auto;
        padding: 0;
        align-items: center;
        align-self: stretch;
        background-color: #C8DEEF;
    }

    .caixa.active .conteudo{
        height: auto;
        width: 996px;
        padding: 4px 16px;
    }

    .conteudo p{
        font-size: 20px;
        color: var(--cor-escura);
        font-family: var(--raleway-font);
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
    }

    .conteudo ul, .conteudo ol{
        margin: 0 20px;
    }

    .conteudo ul li, .conteudo ol li{
        font-size: 20px;
        color: var(--cor-escura);
        font-family: var(--raleway-font);
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
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

    .caixa{
        display: flex;
        padding: 5px;
        flex-direction: column;
        align-self: stretch;
    }

    .label{
        display: flex;
        width: 996px;
        padding: 16px;
        justify-content: space-between;
        align-items: center;
        background-color: var(--cor-primaria);
    }

    .label h6{
        font-size: 32px;
    }

    .label::before{
        right: 10%;
    }

    .conteudo{
        position: relative;
        height: 0;
        overflow: hidden;
        transition: .5s;
        overflow-y: auto;
        padding: 0;
        align-items: center;
        align-self: stretch;
        background-color: #C8DEEF;
    }

    .caixa.active .conteudo{
        height: auto;
        width: 996px;
        padding: 4px 16px;
    }

    .conteudo p{
        font-size: 20px;
        color: var(--cor-escura);
        font-family: var(--raleway-font);
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
    }

    .conteudo ul, .conteudo ol{
        margin: 0 20px;
    }

    .conteudo ul li, .conteudo ol li{
        font-size: 20px;
        color: var(--cor-escura);
        font-family: var(--raleway-font);
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
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

    .caixa{
        display: flex;
        padding: 5px;
        flex-direction: column;
        align-self: stretch;
    }

    .label{
        display: flex;
        padding: 16px;
        justify-content: space-between;
        align-items: center;
        background-color: var(--cor-primaria);
    }

    .label h6{
        font-size: 32px;
    }

    .label::before{
        right: 12%;
    }

    .conteudo{
        position: relative;
        height: 0;
        overflow: hidden;
        transition: .5s;
        overflow-y: auto;
        padding: 0;
        align-items: center;
        align-self: stretch;
        background-color: #C8DEEF;
    }

    .caixa.active .conteudo{
        height: auto;
        padding: 4px 16px;
    }

    .conteudo p{
        font-size: 20px;
        color: var(--cor-escura);
        font-family: var(--raleway-font);
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
    }

    .conteudo ul, .conteudo ol{
        margin: 0 20px;
    }

    .conteudo ul li, .conteudo ol li{
        font-size: 20px;
        color: var(--cor-escura);
        font-family: var(--raleway-font);
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
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

    .caixa{
        display: flex;
        padding: 5px;
        flex-direction: column;
        align-self: stretch;
    }

    .label{
        display: flex;
        padding: 16px;
        justify-content: space-between;
        align-items: center;
        background-color: var(--cor-primaria);
    }

    .label h6{
        font-size: 22px;
    }

    .label::before{
        right: 12%;
    }

    .conteudo{
        position: relative;
        height: 0;
        overflow: hidden;
        transition: .5s;
        overflow-y: auto;
        padding: 0;
        align-items: center;
        align-self: stretch;
        background-color: #C8DEEF;
    }

    .caixa.active .conteudo{
        height: auto;
        padding: 4px 16px;
    }

    .conteudo p{
        font-size: 20px;
        color: var(--cor-escura);
        font-family: var(--raleway-font);
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
    }

    .conteudo ul, .conteudo ol{
        margin: 0 20px;
    }

    .conteudo ul li, .conteudo ol li{
        font-size: 20px;
        color: var(--cor-escura);
        font-family: var(--raleway-font);
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
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

.label h6{
    color: var(--cor-clara);
    text-align: center;
    font-family: var(--raleway-font);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.conteudo p{
    color: var(--cor-escura);
    font-family: var(--raleway-font);
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
}

.conteudo p span{
    text-decoration: underline;
}

.label{
    display: flex;
    justify-content: space-between;
}

.seta{
    content: '';
    padding: 10px;
    box-shadow: 2px -2px 0 1px #fff inset;
    border: 2px solid transparent;
    transform: rotate(312deg);
    transition: .7s;
}

.caixa.active .seta{
    content: '';
    transition: .5s;
    margin-top: 10px;
    transform: rotate(135deg);
}

`