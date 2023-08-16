import React from 'react';
import styled from 'styled-components';


import Experiencia1 from '../../assets/Tema-Verão/Imagens/2 - A experiência1.png';
import Experiencia2 from '../../assets/Tema-Verão/Imagens/2 - A Experiência2.png';
import Experiencia3 from '../../assets/Tema-Verão/Imagens/2 - A Experiência3.png';
import './experiencia.css';

export default function Experiencia() {
    return (
        <DivXp>
            <div id='xp'>
                <h1>A Experiência</h1>
            </div>

            <main>
                <section class="inclusao">
                    <img src={Experiencia1} alt='Imagem de uma experiencia no evento'/>
                        <div class="descricao-esquerda">
                            <h6>Acessibilidade e Inclusão</h6>
                            <p>
                                Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!
                                Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile,
                                visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e
                                crianças!
                            </p>
                        </div>
                </section>

                <section class="sustentabiladade">
                    <div class="descricao-direita">
                        <h6>Sustentabilidade</h6>
                        <p>
                            Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é
                            carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.
                        </p>
                    </div>
                    <img src={Experiencia2} alt='Imagem de uma experiencia no evento'/>
                </section>

                <section class="atracoes">
                    <img src={Experiencia3} alt='Imagem de uma experiencia no evento'/>
                        <div class="descricao-esquerda">
                            <h6>Atrações</h6>
                            <p>
                                Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com
                                recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de
                                alimentação, roda gigante e outros brinquedos!
                            </p>
                        </div>
                </section>
            </main>
        </DivXp>
    )
}

const DivXp = styled.div`
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
    main section{
        padding: 64px 120px;
        gap: 48px;
    }

    section img{
        width: 609px;
        height: 381px;
    }

    .descricao-esquerda{
        height: 340px;
        align-items: flex-start;
    }
    .descricao-direita{
        height: 340px;
        align-items: flex-end;
    }

    h6{
        font-size: 32px;
    }
    
    .descricao-esquerda p{
        font-size: 22px;
        line-height: 40px; 
    }
    
    .descricao-direita p{
        font-size: 22px;
        text-align: right;
    }
}

@media screen and (min-width: 1279px) and (max-width: 1440px){
    main section{
        padding: 57px 106px;
        gap: 48px;
    }

    section img{
        width: 609px;
        height: 381px;
    }

    h6{
        font-size: 32px;
    }

    .descricao-esquerda{
        height: 340px;
        align-items: flex-start;
    }
    .descricao-direita{
        height: 340px;
        align-items: flex-end;
    }
    
    .descricao-esquerda p{
        font-size: 18px;
        text-align: justify;
        line-height: 30px;
    }
    
    .descricao-direita p{
        font-size: 18px;
        text-align: right;
    }

}

@media screen and (min-width: 760px) and (max-width: 1278px){
    main section{
        padding: 32px 60px;
        flex-direction: column;
        gap: 32px;
        align-self: stretch;
    }

    section div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .sustentabiladade{
        display: flex;
        flex-direction: column-reverse;
    }

    h6{
        font-size: 32px;
        text-align: center;
        width: 100%;
    }

    .descricao-esquerda p{
        text-align: center;
        font-size: 20px;
        line-height: 40px;
        width: 528px;
    }
    .descricao-direita p{
        text-align: center;
        font-size: 20px;
        line-height: 40px;
    }

    .descricao-direita{
        align-items: flex-end;
    }
    .descricao-esquerda{
        align-items: flex-start;
    }
}

@media screen and (min-width: 359px) and (max-width: 759px){
    section img{
        width: 312px;
    }

    section h6{
        font-size: 32px;
        text-align: center;
    }

    section{
        display: flex;
        padding: 32px 24px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        gap: 32px;
    }

    .sustentabiladade{
        flex-direction: column-reverse;
    }

    section p{
        font-size: 20px;
    }
  
}

main section{
    display: flex;
    justify-content: center;
    align-items: center;
}

.descricao-esquerda{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
}

.descricao-direita{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
}

h6{
    color: var(--cor-escura);
    font-family: var(--raleway-font);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

section p{
    color: var(--cor-escura);
    text-align: center;
    font-family: var(--raleway-font);
    font-style: normal;
    font-weight: 500;
    line-height: 40px; 
}
`