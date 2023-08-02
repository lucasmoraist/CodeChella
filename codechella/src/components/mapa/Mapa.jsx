import React from "react";
import styled from 'styled-components';

import MapaSetores from '../../assets/Tema-Verão/Imagens/3 - Mapa setores1.png';
import Pista from '../../assets/Tema-Verão/Imagens/3 - Mapa de setores2.png';
import PistaPremium from '../../assets/Tema-Verão/Imagens/3 - Mapa de setores3.png';
import Cadeiras from '../../assets/Tema-Verão/Imagens/3 - Mapa de setores4.png';
import './mapa.css'

export default function Mapa() {
    return (
        <DivMapa>
            <div id="setores">
                <h1>Mapa de Setores</h1>
            </div>

            <section className="mapa">
                <div>
                    <img src={MapaSetores} alt="" width="613px" height="541px" />

                    <div id="legenda">
                        <h6>Legenda:</h6>
                        <ul>
                            <li>
                                <div className="quadrado cor1"></div>Pista Premium
                            </li>
                            <li>
                                <div className="quadrado cor2"></div>Pista Comum
                            </li>
                            <li>
                                <div className="quadrado cor3"></div>Cadeiras Térreo
                            </li>
                            <li>
                                <div className="quadrado cor4"></div>Cadeiras Superiores
                            </li>
                            <li>
                                <div className="quadrado cor5"></div>Rampas
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="detalhes">
                <h5>Mais detalhes sobre os setores:</h5>
                <div className="setores">
                    <div className="colunas esquerda">
                        <img src={Pista} />
                        <h6>Pista</h6>
                        <p>Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com
                            local para sentar e descansar. Separada da pista premium por uma grade.</p>
                    </div>

                    <div className="colunas meio">
                        <img src={PistaPremium} />
                        <h6>Pista Premium</h6>
                        <p>Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas
                            as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.</p>
                    </div>

                    <div className="colunas direita">
                        <img src={Cadeiras} />
                        <h6>Cadeiras</h6>
                        <p>Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada
                            em relação às pistas.</p>
                    </div>
                </div>
            </section>
        </DivMapa>
    )
}

const DivMapa = styled.div`
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
    #banner {
        background: url(../assets/Tema-Verão/Imagens/3-Banner-Mapa-de-setores.png), lightgray 50% / cover no-repeat;
        background-size: cover;
    }
    .mapa{
        padding: 32px 180px;
    }
    .mapa div:first-child{
        justify-content: center;
        gap: 180px;
    }

    .detalhes h5{
        font-size: 40px;
    }

    .meio{
        margin-top: 120px;
    }
}

@media screen and (min-width: 1279px) and (max-width: 1440px){
    #banner {
        background: url(../assets/Tema-Verão/Imagens/3-Banner-Mapa-de-setores.png), lightgray 50% / cover no-repeat;
    }
    .mapa{
        padding: 32px 120px;
    }
    .mapa div:first-child{
        gap: 48px;
    }

    .detalhes h5{
        font-size: 40px;
    }

    .meio{
        margin-top: 120px;
    }
}

@media screen and (min-width: 760px) and (max-width: 1278px){
    #banner {
        display: flex;
        height: 384px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: url(../assets/Tema-Verão/Imagens/3-Banner-Mapa-de-setores.png), lightgray 50% / cover no-repeat;
        background-size: 800px 390px;
    }

    .detalhes h5{
        font-size: 40px;
    }

    .mapa div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 24px;
    }
    .mapa img{
        width: 548px;
        height: 509px;
    }

    .detalhes{
        display: flex;
        padding: 32px 24px;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        align-self: stretch;
    }

    .detalhes h5{
        font-size: 32px;
    }

    .detalhes img{
        width: 312px;
    }

    .setores{
        flex-direction: column;
        align-items: center;
        align-self: stretch;
    }
}

@media screen and (min-width: 359px) and (max-width: 759px){
    #banner {
        background: url(../assets/Tema-Verão/Imagens/3-Banner-Mapa-de-setores.png);
        display: flex;
        padding: 23px 0px;
        height: 270px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-size: 410px 320px; 
    }
    .mapa div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 24px;
    }
    .mapa img{
        width: 360px;
        height: 360px;
    }

    .detalhes{
        display: flex;
        padding: 32px 24px;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        align-self: stretch;
    }

    .detalhes h5{
        font-size: 32px;
    }

    .detalhes img{
        width: 312px;
    }

    .setores{
        flex-direction: column;
        align-items: center;
        align-self: stretch;
    }
}

.mapa{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}

.mapa div:first-child{
    display: flex;
    align-items: center;
    align-self: stretch;
}

#legenda{
    display: flex;
    width: 246px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
}

.mapa h6{
    color: var(--cor-escura);
    text-align: center;
    font-family: var(--raleway-font);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.mapa ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 24px;
}

.mapa ul li{
    display: flex;
    align-items: center;
    gap: 24px;
}

.quadrado{
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    gap: 16px;
}

.cor1{
    background-color: #0E7DF1;
}
.cor2{
    background-color: #FE016E;
}
.cor3{
    background-color: #01A89E;
}
.cor4{
    background-color: #3F51B5;
}
.cor5{
    background-color: #0E7DF1;
}

.detalhes{
    display: flex;
    padding: 48px 120px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    align-self: stretch;
}

.detalhes h5{
    color: var(--cor-escura);
    text-align: center;
    font-family: var(--raleway-font);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.setores{
    display: flex;
    gap: 24px;
}

.colunas{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    flex: 1 0 0;
}

.colunas h6{
    color: var(--cor-escura);
    text-align: center;
    font-family: var(--raleway-font);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.colunas p{
    color: var(--cor-escura);
    text-align: center;
    font-family: var(--raleway-font);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    align-self: stretch;
    line-height: 40px; 
}
`